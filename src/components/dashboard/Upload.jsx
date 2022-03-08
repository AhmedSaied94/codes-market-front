import * as React from 'react';
import './Upload.css'
import { Steps, Button, message, Form, Input, Select, Checkbox, Modal, Upload, Typography, InputNumber } from 'antd';
import { InboxOutlined, PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const { Step } = Steps;
const { Dragger } = Upload;
const { Option } = Select;
const { Title } = Typography;



const UploadItem = (props) => {
    const [form] = Form.useForm()
    const [current, setCurrent] = React.useState(0)
    const [prevImg, setPrevImg] = React.useState('')
    const [pervTitle, setPrevTitle] = React.useState('')
    const [pervVisible, setPrevVisible] = React.useState(false)
    const [fileList, SetFilelist] = React.useState(new Array());
    const [icon, setIcon] = React.useState('')
    const [preview, setPreview] = React.useState('')
    const [productDetails, setProductDetails] = React.useState({})
    const [catigory, setCatigory] = React.useState('')
    const [subcatigory, setSubcatigory] = React.useState('')
    const [frameworks, setFrameworks] = React.useState('')
    const [file_types, setFile_types] = React.useState('')
    const [zip_file, setZip_file] = React.useState()
    const itemName = React.useRef()
    const itemShortDesc = React.useRef()
    const itemDesc = React.useRef()
    const itemFeatures = React.useRef()
    const itemDemoUrl = React.useRef()
    const itemTestApk = React.useRef()
    const itemTestIos = React.useRef()
    const itemYTurl = React.useRef()
    const itemSize = React.useRef()
    const itemPrice = React.useRef()


    
    const main = new FormData()

   



    const addItem = () => {
        main.append('name', productDetails.name)
        main.append('short_describtion', productDetails.short_describtion)
        main.append('catigory', productDetails.catigory)
        main.append('subcatigory', productDetails.subcatigory)
        main.append('describtion', productDetails.describtion)
        main.append('features', productDetails.features)
        main.append('demo_url', productDetails.demo_url)
        main.append('test_apk', productDetails.test_apk)
        main.append('test_ios', productDetails.test_ios)
        main.append('youtube_url', productDetails.youtube_url)
        main.append('size', itemSize.current.props.value)
        main.append('price', itemPrice.current.value)
        main.append('zip_file', zip_file, zip_file.name)
        main.append('icon_img', icon, icon.name)
        main.append('preview_img', preview, preview.name)

        const screens = new FormData()
        for (let index = 0; index < fileList.length; index++) {
            screens.append(String(index), fileList[index].originFileObj, fileList[index].name)    
        }

        console.log(main.has('name'))
    }


    const handleSteps = move => {
        if(move === 'next'){
            if(current === 0){
                const data = {
                    name: itemName.current.props.value,
                    short_describtion: itemShortDesc.current.props.value,
                    catigory,
                    subcatigory,
                    describtion: itemDesc.current.resizableTextArea.props.value,
                    features: itemFeatures.current.resizableTextArea.props.value,
                    demo_url: itemDemoUrl.current.props.value,
                    test_apk: itemTestApk.current.props.value,
                    test_ios: itemTestIos.current.props.value,
                    youtube_url: itemYTurl.current.props.value,
                }
                setProductDetails(data)
            }
            setCurrent(current + 1)
        }
        else setCurrent(current - 1)
    }
 //////////////  screens upload //////////////   
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
    }

    const handleCancel = () => setPrevVisible(false);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }

        setPrevImg(file.url || file.preview)
        setPrevVisible(true)
        setPrevTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    
    };

    const handleChangeList = (info) =>{
        SetFilelist(info.fileList)
    }


    const uploadButton = (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
 //////////////  screens upload //////////////   

 ////////////// Icon & Preview /////////////



 ////////////// Icon & Preview /////////////

    //////// Select Options //////////
    const catigoryChange = value => {
        setCatigory(value)
    }
    const subCatigoryChange = value => {
        setSubcatigory(value)
    }
    //////// Select Options //////////

    ////////// Checkbox Groups /////////
    const frameworksOptions = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];
    const filesIncluded = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];
    const handleFiles = values => {
        setFile_types(values)
    }
    const handleFW = values => {
        setFrameworks(values)
    }
    ////////// Checkbox Groups /////////


    const steps = [
        {
            title:'Product details',
            content:(
                <Form layout='vertical' form={form}>
                    <Form.Item  
                    name="name" 
                    rules={[
                    { required: true,
                        message: 'Please input item name', 
                        whitespace: true }]}
                    label='Name'>
                        <Input ref={itemName} placeholder="Name" />
                    </Form.Item>
                    <Form.Item 
                    name="short_desc" 
                    rules={[
                    { required: true,
                        message: 'Please input item short describtion', 
                        whitespace: true }]}
                    label='Short Describtion (Max 80 Characters)'>
                        <Input ref={itemShortDesc} placeholder="Short Describtion" />
                    </Form.Item>
                    <Form.Item 
                    name="catigory" 
                    rules={[
                    { required: true,
                        message: 'Please choose catigory', 
                        whitespace: true }]}
                    label='Catigory'>
                        <Select placeholder='Catigory...' style={{ width: '100%' }} onChange={catigoryChange}>
                            <Option value="Indbendent Developer">Indbendent Developer</Option>
                            <Option value="Development Agency">Development Agency</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item 
                    name="subcatigory" 
                    rules={[
                    { required: true,
                        message: 'Please choose subcatigory', 
                        whitespace: true }]}
                    label='Subcatigory'>
                        <Select placeholder='subcatigory...' style={{ width: '100%' }} onChange={subCatigoryChange}>
                            <Option value="Indbendent Developer">Indbendent Developer</Option>
                            <Option value="Development Agency">Development Agency</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item 
                    name="frameworks" 
                    rules={[
                    { required: true,
                        message: 'Please choose frameworks', 
                        whitespace: true }]}
                    label='Frameworks'>
                        <Checkbox.Group options={frameworksOptions} onChange={handleFW} />
                    </Form.Item>
                    <Form.Item 
                    name="file_types" 
                    rules={[
                    { required: true,
                        message: 'Please choose files types', 
                        whitespace: true }]}
                    label='Files Included'>
                        <Checkbox.Group options={filesIncluded} onChange={handleFiles} />
                    </Form.Item>
                    <Form.Item 
                    name="desc" 
                    rules={[
                    { required: true,
                        message: 'Please input item describtion', 
                        whitespace: true }]}
                    label='Describtion'>
                        <TextArea ref={itemDesc} placeholder='Describtion' />
                    </Form.Item>
                    <Form.Item 
                    name="features" 
                    rules={[
                    { required: true,
                        message: 'Please input item features', 
                        whitespace: true }]}
                    label='Features'>
                        <TextArea ref={itemFeatures} placeholder='Features' />
                    </Form.Item>
                    <Form.Item 
                    name="demo_url" 
                    rules={[
                    { required: true,
                        message: 'Please input item demo url', 
                        whitespace: true }]}
                    label='Live Demo URL: (eg. your URL or Google Drive)'>
                        <Input ref={itemDemoUrl} placeholder='Your Url' addonBefore="http://" addonAfter=".com" />
                    </Form.Item>
                    <Form.Item 
                    name="test_apk" 
                    label='Test APK / Google Play Link:'>
                        <Input ref={itemTestApk} placeholder='Your Url' addonBefore="http://" addonAfter=".com" />
                    </Form.Item>
                    <Form.Item 
                    name="test_ios" 
                    label='iOS Link: (optional)'>
                        <Input ref={itemTestIos} placeholder='Your Url' addonBefore="http://" addonAfter=".com" />
                    </Form.Item>
                    <Form.Item 
                    name="youtube_url" 
                    label='YouTube URL: (optional)'>
                        <Input ref={itemYTurl} placeholder='Your Url' addonBefore="http://" addonAfter=".com" />
                    </Form.Item>
                </Form>
            )
        },
        {
            title:'Image Assest',
            content: (
                <>
                <div style={{display:'flex',flexWrap:'wrap' , justifyContent:'space-evenly', padding:'1rem 0'}}>
                    <div className='dragger'>
                    <Dragger
                    name='icon'
                    beforeUpload={()=> false}
                    onChange={(info) => setIcon(info.file)}
                    >
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to upload icon</p>
                        <p className="ant-upload-hint">
                            Icon Image: * (size: 200x200)
                        </p>
                    </Dragger>
                    </div>
                    <div className='dragger'>
                    <Dragger 
                    name='preview'
                    beforeUpload={()=> false}
                    onChange={(info) => setPreview(info.file)}
                    >
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to upload image</p>
                        <p className="ant-upload-hint">
                            Preview Image: * (size 590x300)
                        </p>
                    </Dragger>
                    </div>
                </div>
                <div style={{padding:'1rem'}}>
                    <Upload
                    beforeUpload={()=> false}
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChangeList}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal
                    visible={pervVisible}
                    title={pervTitle}
                    footer={null}
                    onCancel={handleCancel}
                    >
                        <img alt="example" style={{ width: '100%' }} src={prevImg} />
                    </Modal>
     
                </div>   
                </>
            )
        },
        {
            title:'Files & Pricing',
            content: (
                <>
                    <Dragger 
                    name='preview'
                    beforeUpload={()=> false}
                    onChange={(info) => setZip_file(info.file)}
                    style={{padding:'0 0.5rem'}}>
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to upload zip</p>
                        <p className="ant-upload-hint">
                            .zip (Only)
                        </p>
                    </Dragger>
                    <Form style={{padding:'1rem 0'}} form={form} layout='vertical'>
                        <Form.Item required  label='File size: (size of .ZIP file in MB)'>
                            <Input ref={itemSize} placeholder="File Size" />
                        </Form.Item>
                        <Form.Item required  label='Price: (Single Licence)'>
                            <InputNumber ref={itemPrice} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item required  label='Price: (Multiple Licence)'>
                            <InputNumber style={{width:'100%'}} />
                        </Form.Item>
                    </Form>
                </>
            )
        }
    ]
  return (
    <>
    <Title level={2}>New Item</Title>
    <div style={{backgroundColor:'#fff', padding:'1.5rem'}}>
        
        <Steps current={current}>
        {steps.map(item => (
            <Step key={item.title} title={item.title} />
        ))}
        </Steps>
        <div className="steps-content" style={{padding:'1rem 0'}}>{steps[current].content}</div>
        <div className="steps-action">
        {current < steps.length - 1 && (
            <Button htmlType='submit' type="primary" onClick={() => handleSteps('next')}>
            Next
            </Button>
        )}
        {current === steps.length - 1 && (
            <Button type="primary" onClick={addItem}>
            Done
            </Button>
        )}
        {current > 0 && (
            <Button type='dashed' style={{ margin: '0 8px' }} onClick={() => handleSteps('prev')}>
            Previous
            </Button>
        )}
        </div>
    </div>
    </>
  )
}

export default UploadItem
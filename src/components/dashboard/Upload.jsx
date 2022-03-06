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
    const [iconUrl, setIconUrl] = React.useState('')
    const [preUrl, setPreUrl] = React.useState('')
   


    const handleSteps = move => {
        move === 'next' ?
        setCurrent(current + 1)
        :
        setCurrent(current - 1)
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
        console.log(value)
    }
    const subCatigoryChange = value => {
        console.log(value)
    }
    //////// Select Options //////////

    ////////// Checkbox Groups /////////
    const frameworks = [
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
        console.log(values)
    }
    const handleFW = values => {
        console.log(values)
    }
    ////////// Checkbox Groups /////////


    const steps = [
        {
            title:'Product details',
            content:(
                <Form layout='vertical' form={form}>
                    <Form.Item required  label='Name'>
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item required  label='Short Describtion (Max 80 Characters)'>
                        <Input placeholder="Short Describtion" />
                    </Form.Item>
                    <Form.Item required label='Catigory'>
                        <Select placeholder='Catigory...' style={{ width: '100%' }} onChange={catigoryChange}>
                            <Option value="Indbendent Developer">Indbendent Developer</Option>
                            <Option value="Development Agency">Development Agency</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item required label='Subcatigory'>
                        <Select placeholder='subcatigory...' style={{ width: '100%' }} onChange={subCatigoryChange}>
                            <Option value="Indbendent Developer">Indbendent Developer</Option>
                            <Option value="Development Agency">Development Agency</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item required label='Frameworks'>
                        <Checkbox.Group options={frameworks} onChange={handleFW} />
                    </Form.Item>
                    <Form.Item required label='Files Included'>
                        <Checkbox.Group options={filesIncluded} onChange={handleFiles} />
                    </Form.Item>
                    <Form.Item required label='Describtion'>
                        <TextArea placeholder='Describtion' />
                    </Form.Item>
                    <Form.Item required label='Features'>
                        <TextArea placeholder='Features' />
                    </Form.Item>
                    <Form.Item required label='Live Demo URL: (eg. your URL or Google Drive)'>
                        <Input placeholder='Your Url' addonBefore="http://" addonAfter=".com" />
                    </Form.Item>
                    <Form.Item required label='Test APK / Google Play Link:'>
                        <Input placeholder='Your Url' addonBefore="http://" addonAfter=".com" />
                    </Form.Item>
                    <Form.Item label='iOS Link: (optional)'>
                        <Input placeholder='Your Url' addonBefore="http://" addonAfter=".com" />
                    </Form.Item>
                    <Form.Item label='YouTube URL: (optional)'>
                        <Input placeholder='Your Url' addonBefore="http://" addonAfter=".com" />
                    </Form.Item>
                </Form>
            )
        },
        {
            title:'Image Assest',
            content: (
                <>
                <div style={{display:'flex', justifyContent:'space-evenly', padding:'1rem 0'}}>
                    <Dragger
                    name='icon'
                    beforeUpload={()=> false}
                    onChange={(info) => console.log('done')}
                    style={{padding:'0 0.5rem'}}>
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to upload icon</p>
                        <p className="ant-upload-hint">
                            Icon Image: * (size: 200x200)
                        </p>
                    </Dragger>
                    <Dragger 
                    name='preview'
                    beforeUpload={()=> false}
                    onChange={(info) => console.log('done')}
                    style={{padding:'0 0.5rem'}}>
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to upload image</p>
                        <p className="ant-upload-hint">
                            Preview Image: * (size 590x300)
                        </p>
                    </Dragger>
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
                    onChange={(info) => console.log('done')}
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
                            <Input placeholder="File Size" />
                        </Form.Item>
                        <Form.Item required  label='Price: (Single Licence)'>
                            <InputNumber style={{width:'100%'}} />
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
            <Button type="primary" onClick={() => handleSteps('next')}>
            Next
            </Button>
        )}
        {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
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
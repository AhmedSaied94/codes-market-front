import * as React from 'react'
import { Input, Collapse, Form, Button, Select, Checkbox, Upload, message } from 'antd'
import { MailTwoTone, IdcardTwoTone, UserOutlined, CreditCardTwoTone, KeyOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { formatTimeStr } from 'antd/lib/statistic/utils'
const { Panel } = Collapse
const { Option } = Select

const MyAccount = () => {
    const [form] = Form.useForm()


    ////   Upload avatar   ////
    const [loading, setLoading] = React.useState(false)
    const [imgUrl, setImgUrl] = React.useState('')
    const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
    const getBase64 =(img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
      
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt1M = file.size / 1024 / 1024 < 1;
        if (!isLt1M) {
          message.error('Image must smaller than 1MB!');
        }
        return isJpgOrPng && isLt1M;
    }

    const handleUpload = info => {
        if (info.file.status === 'uploading') {
          setLoading(true);
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => {
            setImgUrl(imageUrl)
            setLoading(false)
            });
        }
      };
    ////   Upload avatar   ////

    // check boxes
    const handleOs = values => {
        console.log(values)
    }
    const handleFW = values => {
        console.log(values)
    }
    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];
    // check boxes / /

    // select options
    const handleChange = value => {
        console.log(value)
    }
    //select options

    // collapse
    const callback = e => {
        console.log(e.key)
    }
    // collapse
  return (
    <Collapse defaultActiveKey={['1']} accordion expandIconPosition='right' onChange={callback}>
    <Panel header="My Account" key="1">
    <Form
        layout='vertical'
        form={form}
    >
        <Form.Item>
            <Input size='large' placeholder="Email" prefix={<MailTwoTone />} />
        </Form.Item>
        <Form.Item>
            <Input size='large' placeholder="Full Name" prefix={<IdcardTwoTone />} />
        </Form.Item>
        <Form.Item>
            <Input size='large' placeholder="User Name" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item>
            <Input size='large' placeholder="Paypal Email" prefix={<CreditCardTwoTone />} />
        </Form.Item>
        <Form.Item>
            <Button type='primary' block>Update Account</Button>
        </Form.Item>
    </Form>

    </Panel>
    <Panel header="Developer Details" key="2">
      <Form         
        layout='vertical'
        form={form}>
            <Form.Item label='Developer Type'>
                <Select defaultValue="Indbendent Developer" style={{ width: '100%' }} onChange={handleChange}>
                    <Option value="Indbendent Developer">Indbendent Developer</Option>
                    <Option value="Development Agency">Development Agency</Option>
                </Select>
            </Form.Item>
            <Form.Item label='Operation System'>
                <Checkbox.Group options={options} defaultValue={['Apple']} onChange={handleOs} />
            </Form.Item>
            <Form.Item label='Frameworks'>
                <Checkbox.Group options={options} defaultValue={['Apple']} onChange={handleFW} />
            </Form.Item>
            <Form.Item label='Developer Experience'>
                <Select defaultValue="1-3 years" style={{ width: '100%' }} onChange={handleChange}>
                    <Option value="1-3 years">1-3 years</Option>
                    <Option value="2-5 years">2-5 years</Option>
                    <Option value="more than 5 years">more than 5 years</Option>
                </Select>
            </Form.Item>
            <Form.Item label='Public contact for profile: (optional for freelance work)'>
                <Input size='large' placeholder="Email" prefix={<MailTwoTone />} />
            </Form.Item>
            <Form.Item>
                <Button type='primary' block>Update Account</Button>
            </Form.Item>
        </Form>
    </Panel>
    <Panel header="Change Password" key="3">
        <Form
            layout='vertical'
            form={form}
        >
            <Form.Item>
                <Input.Password size='large' placeholder="Old Password" prefix={<KeyOutlined />} />
            </Form.Item>
            <Form.Item>
                <Input.Password size='large' placeholder="New Password" prefix={<KeyOutlined />} />
            </Form.Item>
            <Form.Item>
                <Input.Password size='large' placeholder="Re-password" prefix={<KeyOutlined />} />
            </Form.Item>
            <Form.Item>
                <Button type='primary' block>Change Password</Button>
            </Form.Item>
        </Form>
    </Panel>
    <Panel header="Profile Picture" key="4">
        <p>Please upload size &lt; 1 MB(.png or .jpg file)</p>
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://run.mocky.io/v3/ad8fbbe9-ee91-4f32-adcf-81e26dd50c1b"
            beforeUpload={beforeUpload}
            onChange={handleUpload}
        >
            {imgUrl !== '' ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
    </Panel>
  </Collapse>
  )
}

export default MyAccount
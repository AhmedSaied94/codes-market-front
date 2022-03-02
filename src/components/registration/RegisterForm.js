import React from 'react';
import { Form, Input, Button, Checkbox ,Select,Cascader} from 'antd';
const { Option } = Select;



function RegisterForm() {
  const [form]=Form.useForm();
  const residences = [
    {
      value:'egypt',
      label:'Egypt'
    },
    {
      value:'india',
      label:'India'
    },
    {
      value:'usa',
      label:'USA'
    },
  ];
  const formItemLayout = {
    labelCol:{
      xs:{
        span:24
      },
      sm:{
        span:8
      }
    
    },
    wrapperCol:{
      xs:{
        span:24
      },
      sm:{
        span:16
      },
      
    }
  }
  const tailFormItemLayout ={
    wrapperCol:{
      xs:{
        span:24,
        offset:0
      },
      sm:{
        span:16,
        offset:8
      }
    }
  }
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="20">+20</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const onFinish =(values: any)=>{
    console.log('Received values of form: ', values);
  }
  return (
    <Form 
    {...formItemLayout} 
    form={form} 
    name='register' 
    onFinish={onFinish} 
    style={{textAlign:'center'}}
    scrollToFirstError
    initialValues={{
      residence: ['zhejiang', 'hangzhou', 'xihu'],
      prefix: '86',
    }}
    >
      <Form.Item 
      name="email" 
      label="E-mail" 
      style={{width:"400px"}}
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item 
      name="password" 
      label="Password" 
      style={{width:"400px"}}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
      hasFeedback >
        <Input.Password/>
      </Form.Item>
      <Form.Item
       name="confirm" label="Confirm Password" 
       dependencies={["password"]}
       style={{width:"400px"}}
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please confirm your password!',
        },({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords that you entered do not match!'));
          },
        }),
      ]}
      >
        <Input.Password/>
      </Form.Item>
      <Form.Item 
      name="nickname" 
      label="Nick Name" 
      style={{width:"400px"}}
      tooltip="What do you want others to call you?"
      rules={[
        { required: true,
          message: 'Please input your nickname!', 
          whitespace: true }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
      style={{width:"250px",marginLeft:"45px"}}
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item 
      name="country" 
      label="Country" 
      style={{width:"250px",marginLeft:"45px"}}
      rules={[
        { 
        type: 'array', 
        required: true,
        message: 'Please select your country !' },
      ]}
      >
        <Cascader options={residences} style={{width:"100%",marginLeft:"5px"}}/>
      </Form.Item>
      <Form.Item 
      name="phone" 
      label="Phone Number" 
      style={{width:"400px"}}
      rules={[
        { required: true,
          message: 'Please input your phone number!' }
        ]}
        >
        <Input 
        addonBefore={prefixSelector}
        style={{width:"100%"}}
        
        />
      </Form.Item>
      <div style={{float:"left" , width:'350px'}}>
        <Form.Item 
        name="agreement" 
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]} 
        {...tailFormItemLayout}>
          <Checkbox>I have read the <a href='#'>agreement</a> </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit' >Register</Button>
        </Form.Item>
      </div>
      

    </Form>
  )
}

export default RegisterForm

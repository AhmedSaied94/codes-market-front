import React from 'react';
import './RegisterForm.css';
import { Form, Input, Button, Checkbox ,Select,Cascader} from 'antd';
const { Option } = Select;



function RegisterForm() {
  const [form]=Form.useForm();
  const submitHandler =(data)=>{
    console.log(data)
  }
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
  const onFinish =(values)=>{
    console.log('Received values of form: ', values);
  }
  return (
    <div className='form-container'>
    <Form 
    {...formItemLayout} 
    form={form} 
    name='register' 
    onFinish={onFinish} 
    style={{backgroundColor:'#fff', padding:'3rem'}}
    scrollToFirstError
    initialValues={{
      residence: ['zhejiang', 'hangzhou', 'xihu'],
      prefix: '86',
    }}
    onSubmitCapture={submitHandler}
    >
      <Form.Item 
      name="email" 
      label="E-mail" 
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
       name="re-password" label="Re-password" 
       dependencies={["password"]}

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
      name="username" 
      label="User Name" 
      rules={[
        { required: true,
          message: 'Please input your user name!', 
          whitespace: true }]}
      >
        <Input/>
      </Form.Item>
      
      <Form.Item 
      name="fullname" 
      label="Full Name" 
      rules={[
        { required: true,
          message: 'Please input your Name!' }
        ]}
        >
          <Input/>
      </Form.Item>
      <div>
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
        <Form.Item {...tailFormItemLayout} style={{margin:0}}>
          <Button className='btn-sub' type='primary' htmlType='submit' >Register</Button>
        </Form.Item>
      </div>
    </Form>
    </div>
  )
}

export default RegisterForm

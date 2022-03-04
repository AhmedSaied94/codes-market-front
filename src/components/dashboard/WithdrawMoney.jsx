import * as React from 'react'
import { Table, Tag, Space } from 'antd';
import { Typography, Form, Input, Button, InputNumber } from 'antd';

const { Title } = Typography;

const WithdrawMoney = (props) => {

    const [form] = Form.useForm()
    const columns = [
      {
        title: 'Total Earnings',
        dataIndex: 'totalearnings',
        key: 'totalearnings',
      },
      {
        title: 'Total Withdraws',
        dataIndex: 'totalwithdraws',
        key: 'totalwithdraws',
      },
      {
        title: 'Credit',
        dataIndex: 'availablecredit',
        key: 'availablecredit',
      },
      

    ];

    const data = [{
        key: 1,
        totalearnings: 2500,
        totalwithdraws: 1500,
        availablecredit: 1000,
      }]

      
    

  return (
    <div>
      <Title level={3}>Withdraw Money</Title>
      <Table columns={columns} dataSource={data} />
      <Form
        layout='vertical'
        form={form}
      >
        <Form.Item label="Paypal Email">
          <Input placeholder="Paypal Email" />
        </Form.Item>
        <Form.Item label="Withdraw Amount (minmal $30)">
          <InputNumber style={{width:'100%'}} placeholder="Amount" />
        </Form.Item>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
          <Form.Item>
            <Button type="dashed">Check Withdraw</Button>
          </Form.Item>
        </div>
      </Form>

    </div>
  )
}

export default WithdrawMoney
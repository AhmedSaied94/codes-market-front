import * as React from 'react'
import { Table, Tag, Space } from 'antd';
import { Typography, Form, Input, Button, InputNumber } from 'antd';
import { UserContext } from '../../App';

const { Title } = Typography;

const WithdrawMoney = (props) => {
    const { authedUser } = React.useContext(UserContext)
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
        totalearnings:authedUser && authedUser.earnings.length > 0 ? authedUser.earnings.reduce((a,b) => a.amount + b.amount) : 0,
        totalwithdraws:authedUser && authedUser.withdraws.length > 0 ? authedUser.withdraws.reduce((a,b) => a.amount + b.amount) : 0,
        availablecredit:authedUser ? authedUser.credit : 0,
      }]

      
    

  return (
    <>
    { authedUser &&
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
    }
    </>
  )
}

export default WithdrawMoney
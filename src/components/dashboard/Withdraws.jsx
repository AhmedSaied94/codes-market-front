import * as React from 'react'
import { Table, Tag, Space } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const Withdraws = (props) => {


    const columns = [
      {
        title: 'ID',
        dataIndex: 'ID',
        key: 'ID',
      },
      {
        title: 'Date',
        dataIndex: 'Date',
        key: 'Date',
      },
      {
        title: 'Paypal',
        dataIndex: 'paypal',
        key: 'paypal',
      },
      {
        title: 'Amount',
        dataIndex: 'Amount',
        key: 'Amount',
      },
      {
        title: 'Status',
        key: 'Status',
        dataIndex: 'Status',
        render: Status => {

              let color = Status === 'success' ? 'green' : 'volcano'
              return (
                <Tag color={color} key={Status}>
                  {Status.toUpperCase()}
                </Tag>
              )
        }


      },

    ];

    const data = []
    for (let index = 1; index < 6; index++) {
      data.push(        {
        key: index,
        ID: index,
        Date: '2022-02-20',
        Details: 'New York No. 1 Lake Park',
        Amount:'$25',
        Status: 'success',
      })
    }
      
    

  return (
    <div>
        <Title level={3}>Withdraws</Title>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Withdraws
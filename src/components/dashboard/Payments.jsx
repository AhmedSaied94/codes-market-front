import * as React from 'react'
import { Table, Tag, Space } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const Payments = (props) => {


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
        title: 'Details',
        dataIndex: 'Details',
        key: 'Details',
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

    const data = [
        {
          key: '1',
          ID: '1',
          Date: '2022-02-20',
          Details: 'New York No. 1 Lake Park',
          Amount:'$25',
          Status: 'success',
        },
        {
          key: '2',
          ID: '2',
          Date: '2022-01-27',
          Details: 'London No. 1 Lake Park',
          Amount: '$20',
          Status: 'failed',
        },
        {
          key: '3',
          ID: '3',
          Date: '2022-01-9',
          Details: 'Sidney No. 1 Lake Park',
          Amount: '$32',
          Status: 'success',
        },
      ];

  return (
    <div>
        <Title level={3}>Last Payments</Title>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Payments
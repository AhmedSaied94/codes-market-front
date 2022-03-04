import * as React from 'react'
import { Table, Tag, Space } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const Earnings = (props) => {


    const columns = [
      {
        title: 'ID',
        dataIndex: 'ID',
        key: 'ID',
        responsive:['sm']
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
        responsive:['sm']
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
        },
        responsive:['sm']
      },
      {
        title:'A&S',
        dataIndex:'amountstatus',
        key:'amountstatus',
        render: (record) => {
          let color = record.status === 'success' ? 'green' : 'volcano'
          return (
            <React.Fragment>
              {record.amount}
              <br />
              <Tag color={color} key={record.status}>
                {record.status.toUpperCase()}
              </Tag>
            </React.Fragment>
          )
        },
        responsive:['xs']
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
        amountstatus:{
          amount:'$25',
          status:'success'
        }
      })
    }
      
    

  return (
    <div>
        <Title level={3}>Earnings</Title>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Earnings
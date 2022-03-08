import * as React from 'react'
import { Table, Tag, Row, Col } from 'antd';
import { Typography } from 'antd';
import { UserContext } from '../../App';

const { Title } = Typography;

const Payments = (props) => {


  const { authedUser } = React.useContext(UserContext)
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      responsive:['sm']
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      // responsive:['xs']
    },
    // {
    //   title: 'Status',
    //   key: 'status',
    //   dataIndex: 'status',
    //   render: Status => {

    //         let color = Status === 'success' ? 'green' : 'volcano'
    //         return (
    //           <Tag color={color} key={Status}>
    //             {Status.toUpperCase()}
    //           </Tag>
    //         )
    //   },
    //   responsive:['sm']
    // },
    // {
    //   title:'A&S',
    //   dataIndex:'amountstatus',
    //   key:'amountstatus',
    //   render: (record) => {
    //     let color = record.status === 'success' ? 'green' : 'volcano'
    //     return (
    //       <React.Fragment>
    //         {record.amount}
    //         <br />
    //         <Tag color={color} key={record.status}>
    //           {record.status.toUpperCase()}
    //         </Tag>
    //       </React.Fragment>
    //     )
    //   },
    //   responsive:['xs']
    // },

  ];

  // const data = []
  // for (let index = 1; index < 6; index++) {
  //   data.push(        {
  //     key: index,
  //     ID: index,
  //     Date: '2022-02-20',
  //     Details: 'New York No. 1 Lake Park',
  //     Amount:'$25',
  //     Status: 'success',
  //     amountstatus:{
  //       amount:'$25',
  //       status:'success'
  //     }
  //   })
  // }
  const payments = authedUser ? authedUser.payments.map(trans => {
    return {
      key:trans.id,
      id:trans.id,
      date:trans.data.substring(0, 10),
      details:trans.item,
      amount:trans.amount
    }
  }) : []
      
    

  return (
      <>
      { authedUser &&
      <div>
        <Title level={3}>Last Payments</Title>
        <Table columns={columns} dataSource={payments} className='table-view'/>
      </div>
      }
      </>


  )
}

export default Payments
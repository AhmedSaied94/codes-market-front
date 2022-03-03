import * as React from 'react'
import { Table, Tag, Space } from 'antd';
import { Typography, Button } from 'antd';

const { Title } = Typography;

const Wishlist = (props) => {


    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: price => {
            return (
                <Tag color='success' key={price}>
                    {price}
                </Tag>
            )
        }
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: id => { 
            return (
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                        <Button type="primary" shape="circle">A</Button>
                        <Button type="primary" danger shape="circle">B</Button>
                </div>
            )
        }
      },
     
    ];

    const data = []
    for (let index = 1; index < 6; index++) {
      data.push(        {
        key: index,
        name: 'item'+index,
        price: '$25',
        action: 'index',
      })
    }
      
    

  return (
    <div>
        <Title level={3}>Wishlist</Title>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Wishlist
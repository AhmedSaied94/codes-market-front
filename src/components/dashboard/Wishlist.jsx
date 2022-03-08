import * as React from 'react'
import { Table, Tag, Space } from 'antd';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const { Title } = Typography;

const Wishlist = (props) => {
  const { authedUser } = React.useContext(UserContext)

    const removeItem = id => {

    }
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
                        <Link to={`/item?id=${id}`}><Button type="primary" shape="rounded">Details</Button></Link>
                        <Button onClick={() => removeItem(id)} type="dashed" danger shape="rounded">Remove</Button>
                </div>
            )
        }
      },
     
    ];

    // const data = []
    // for (let index = 1; index < 6; index++) {
    //   data.push(        {
    //     key: index,
    //     name: 'item'+index,
    //     price: '$25',
    //     action: 'index',
    //   })
    // }
    const items = authedUser && authedUser.wishlist ? authedUser.wishlist.map(item => {
      return {
        key:item.id,
        name:item.name,
        price:item.price,
        action:item.id
      }
    }) : []
    

  return (
    <>
    { authedUser &&
    <div>
        <Title level={3}>Wishlist</Title>
        <Table columns={columns} dataSource={items} />
    </div>
    }
    </>
  )
}

export default Wishlist
import * as React from 'react'
import { Table, Typography, Button, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const { Title } = Typography;


const Myitems = (props) => {
    const [current, setCurrent] = React.useState('all')
    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    const columns = [
        {
            title: 'Logo',
            dataIndex: 'logo',
            key: 'logo',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Sales',
            dataIndex: 'sales',
            key: 'sales',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (id) => {
                return (
                <div style={{display:'flex', justifyContent:'space-around'}}>
                        <Button type="primary" shape="circle">A</Button>
                        <Button type="primary" danger shape="circle">B</Button>
                        <Button type="dashed" shape="circle">C</Button>
                </div>
                )
            }
        },
    ]
    const data = []
    for (let index = 1; index < 6; index++) {
        data.push({
            key: index,
            logo: 'logo'+index,
            name: 'item' + index,
            price: '$25',
            status: 'approved',
            sales: 5,
            action: index
        })
        
    }
  return (
    <div>{
            props.view === 'myitems'?
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{marginBottom:'1.5rem'}}>
            <Menu.Item key="all" icon={<MailOutlined />}>
              All items
            </Menu.Item>
            <Menu.Item key="approved"  icon={<AppstoreOutlined />}>
              Approved 
            </Menu.Item>
            <Menu.Item key="waiting"  icon={<AppstoreOutlined />}>
              Waiting 
            </Menu.Item>
            <Menu.Item key="rejected"  icon={<AppstoreOutlined />}>
              Rejected 
            </Menu.Item>
            <Menu.Item key="add" icon={<AppstoreOutlined />}>
              Add item
            </Menu.Item>
          </Menu>
            :
        <Title level={3}> My Items</Title>

        }

        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Myitems
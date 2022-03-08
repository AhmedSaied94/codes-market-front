import * as React from 'react'
import { Table, Typography, Button, Menu, Tag } from 'antd';
import { Link, Routes, Route } from 'react-router-dom'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import UploadItem from './Upload';
import { UserContext } from '../../App';


const { Title } = Typography;


const Myitems = (props) => {
    const { authedUser } = React.useContext(UserContext)
    const [itemsData, setItemsData] = React.useState([])
    const [current, setCurrent] = React.useState('all')
    const items = authedUser ? authedUser.items : []


  React.useEffect(()=>{
    if (authedUser) setItemsData(authedUser.items)
  }, [])

    const handleClick = e => {
        switch(e.key){
          case 'approved':
            setItemsData(items.filter(item => item.status === 'approved'))
            break;
          case 'waiting':
            setItemsData(items.filter(item => item.status === 'waiting'))
            break;
          case 'rejected':
            setItemsData(items.filter(item => item.status === 'rejected'))
            break;
          default:
            setItemsData(items)
            break;
        }
        setCurrent(e.key);
      };
    const columns = [
        {
          title: 'Logo',
          dataIndex: 'logo',
          key: 'logo',
          responsive:['sm']
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
          responsive:['sm']
        },
        {
          title: 'Sales',
          dataIndex: 'sales',
          key: 'sales',
          responsive:['sm']
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
          },
          responsive:['sm']
        },
        {
          title:'A&S',
          dataIndex:'actionstatus',
          key:'actionstatus',
          render: (record) => {
            let color = record.status === 'success' ? 'green' : 'volcano'
            return (
              <React.Fragment>
                <Tag color={color} key={record.status}>
                  {record.status.toUpperCase()}
                </Tag>
                <br />
                <div style={{display:'flex', justifyContent:'space-around', marginTop:'0.25rem'}}>
                      <Button type="primary" shape="circle">A</Button>
                      <Button type="primary" danger shape="circle">B</Button>
                      <Button type="dashed" shape="circle">C</Button>
                </div>
              </React.Fragment>
            )
          },
          responsive:['xs']
        },
    ]
    // const data = []
    // for (let index = 1; index < 6; index++) {
    //     data.push({
    //         key: index,
    //         logo: 'logo'+index,
    //         name: 'item' + index,
    //         price: '$25',
    //         status: 'approved',
    //         sales: 5,
    //         action: index,
    //         actionstatus:{
    //           amount:index,
    //           status:'success'
    //         }
    //     })   
    // }

    const viewData = itemsData.map(item => {
      return {
        key:item.id,
        logo:item.logo,
        name:item.name,
        price:item.price,
        status:item.status,
        sales:item.downloads,
        action:item.id,
        actionstatus:{
          action:item.id,
          status:item.status
        }

      }
    })
  return (
    <div>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{marginBottom:'1.5rem'}}>
            <Menu.Item key="all" icon={<MailOutlined />}>
              <Link to=''>
              All items

              </Link>
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
              <Link to='upload' >
                Add item
              </Link>
            </Menu.Item>
          </Menu>
        
        <Routes>
          <Route path='/' element={<>
            <Title level={3}> My Items</Title>
            <Table columns={columns} dataSource={viewData} />
          </>} />
          <Route path='/upload' element={<UploadItem />} />
        </Routes>

    </div>
  )
}

export default Myitems
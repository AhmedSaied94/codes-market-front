import * as React from 'react'
import { Card, Avatar } from 'antd';
import './Tabs.css'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


const Tabs = (props) => {
    const { Meta } = Card;
    const [loading, setLoading] = React.useState(false)
    const { SubMenu } = Menu
    const handleClick = e => {
        console.log('click ', e);
      };
  return (
    <div className='aside'>
        <Card style={{ width: 300 }} loading={loading}>
          <Meta
            avatar={<Avatar size={64} src="https://picsum.photos/200/300" />}
            title="Hi User"
            description="Joined 2022/03/01"
            className='card'
          />
        </Card>
        <Menu
        onClick={handleClick}
        style={{ width: 300 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['transactions']}
        mode="inline"
        className='tab-menu'
        >
            <Menu.Item className='tab-item' key="1">Dashboard</Menu.Item>
            <Menu.Item className='tab-item' key="2">My Account</Menu.Item>
            <SubMenu className='sub-tab' key="transactions" icon={<AppstoreOutlined />} title="Transactions">
                <Menu.Item className='tab-item' key="3">Payments</Menu.Item>
                <Menu.Item className='tab-item' key="4">Earnings</Menu.Item>
                <Menu.Item className='tab-item' key="5">Withdraws</Menu.Item>
            </SubMenu>
            <SubMenu className='sub-tab' key="items" icon={<SettingOutlined />} title="Items">
                <Menu.Item className='tab-item' key="6">My Items</Menu.Item>
                <Menu.Item className='tab-item' key="7">Downloads</Menu.Item>
            </SubMenu>
            <Menu.Item className='tab-item' key="8">Wishlist</Menu.Item>
      </Menu>
    </div>
  )
}

export default Tabs
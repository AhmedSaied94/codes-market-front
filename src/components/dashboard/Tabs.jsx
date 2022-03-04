import * as React from 'react'
import { Card, Avatar } from 'antd';
import './Tabs.css'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom' 


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
            <Menu.Item className='tab-item' key="dashboard">
              <Link to=''>
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item className='tab-item' key="myaccount">
              <Link to='myaccount'>
                My Account
              </Link>
            </Menu.Item>
            <SubMenu className='sub-tab' key="transactions" icon={<AppstoreOutlined />} title="Transactions">
                <Menu.Item className='tab-item' key="payments">
                  <Link to='payments'>
                    Payments
                  </Link>
                </Menu.Item>
                <Menu.Item className='tab-item' key="earnings">
                  <Link to='earnings'>
                    Earnings
                  </Link>
                </Menu.Item>
                <Menu.Item className='tab-item' key="withdraws">
                  <Link to='withdraws'>
                    Withdraws
                  </Link>
                </Menu.Item>
                <Menu.Item className='tab-item' key="withdraw-money">
                  <Link to='withdraw-money'>
                    Withdraw Money
                  </Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu className='sub-tab' key="items" icon={<SettingOutlined />} title="Items">
                <Menu.Item className='tab-item' key="myitems">
                  <Link to='myitems'>
                    My Items
                  </Link>
                </Menu.Item>
                <Menu.Item className='tab-item' key="downloads">
                  <Link to='downloads'>
                    Downloads
                  </Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item className='tab-item' key="wishlist">
                  <Link to='wishlist'>
                    Wishlist
                  </Link>
            </Menu.Item>      
        </Menu>
    </div>
  )
}

export default Tabs
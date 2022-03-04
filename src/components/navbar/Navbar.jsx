import * as React from 'react'
import { Menu, Button, Tag } from 'antd';
import './Navbar.css'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [current, setCurrent] = React.useState('mail')
    const { SubMenu } = Menu;
    const handleClick = e => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
      return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home" icon={<MailOutlined />}>
            <Link className='link' to='/'>
              Home
              </Link>
            </Menu.Item>
          
          <Menu.Item key="catalog" icon={<AppstoreOutlined />}>
          <Link to='/catalog'>
            Catalog
          </Link>
          </Menu.Item>

          <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
          <Link to='/dashboard'>
            Dashboard
          </Link>
          </Menu.Item>

          <Menu.Item key="upload" icon={<AppstoreOutlined />}>
          <Link to='/upload'>
            Upload
          </Link>
          </Menu.Item>

          <Menu.Item style={{marginLeft:'auto'}} key="signup" className='nav-btn'>
          <Link to='/signup'>
            <Button type='primary'>Sign up</Button>
          </Link>
          </Menu.Item>


          <Menu.Item key="login" className='nav-btn'>
          <Link to='/login'>
            <Button type='dashed'>Log in</Button>
          </Link>
          </Menu.Item>

          <SubMenu key="SubMenu" icon={<Tag color='success'>$52</Tag>} title="Hi User">
          <Menu.Item key="sub-dashboard" icon={<AppstoreOutlined />}>
            <Link to='/dashboard'>
              Dashboard
            </Link>
          </Menu.Item>

          <Menu.Item key="sellitem" icon={<AppstoreOutlined />}>
            <Link to='/upload'>
              Sell Item
            </Link>
          </Menu.Item>

            <Menu.Item key="signout" icon={<AppstoreOutlined />}>
              <Link to='/signout'>
                Sign Out
              </Link>
            </Menu.Item>
          </SubMenu>

        </Menu>
      );
}

export default Navbar
import * as React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const Catigories = (props) => {

    const handleClick = e => {
        console.log('click ', e);
      };
    const catigories = []

    for (let index = 1; index < 6; index++) {
        catigories.push({
            title:'Catigory' + index,
            subCatigories:[]
        })
        for (let index = 1; index < 6; index++) {
            catigories[catigories.length-1].subCatigories.push(`Subcatigory${index}`)
        }
        
    }

  return (
    <Menu
    onClick={handleClick}
    style={{ width: 300 }}
    defaultSelectedKeys={['Catigory1']}
    defaultOpenKeys={['Catigory1']}
    mode="inline"
    className='tab-menu'
    >
        {catigories.map(cat => {
            return (
                <SubMenu className='sub-tab' key={cat.title} icon={<AppstoreOutlined />} title={cat.title}>
                    {cat.subCatigories.map(sub => {
                        return (
                            <Menu.Item className='tab-item' key={sub}>
                                    {sub}
                            </Menu.Item>
                        )
                    })}
                </SubMenu>
            )
        })}
    </Menu>
  )
}

export default Catigories
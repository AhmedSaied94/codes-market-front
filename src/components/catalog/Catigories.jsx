import * as React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const Catigories = (props) => {
    const [openKeys, setOpenKeys] = React.useState(['Catigory1']);

    const onOpenChange = keys => {
      const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };

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
    const rootSubmenuKeys = catigories.map(i => i.title)


  return (
    <Menu
    onClick={handleClick}
    style={{ width: 300 }}
    openKeys={openKeys} 
    onOpenChange={onOpenChange}
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
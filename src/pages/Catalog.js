import * as React from 'react'
import Catigories from '../components/catalog/Catigories'
import Items from '../components/catalog/Items'
import { Layout } from 'antd'
const { Sider, Content } = Layout;
const Catalog = (props) => {
  return (
    <Layout className='main-content'>
        <Sider 
            width={300} 
            className="site-layout-background" 
            style={{height:'90vh', marginTop:'1.5rem'}}
            breakpoint="lg"
            collapsedWidth="0"
        >
            <Catigories />
        </Sider>
        <Layout>
            <Content className='dash-content'>
                <Items />
            </Content>
        </Layout>
    </Layout>
  )
}

export default Catalog
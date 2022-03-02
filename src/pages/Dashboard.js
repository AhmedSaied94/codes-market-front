import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Tabs from '../components/dashboard/Tabs'
import './Dashboard.css'
import Payments from '../components/dashboard/Payments';
const Dashboard = (props) => {

    const { Content, Sider } = Layout;

  return (
    <Layout>
        <Sider width={300} className="site-layout-background">
            <Tabs />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '3rem 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
            >
            <Payments />
            </Content>
        </Layout>
    </Layout>

  )
}

export default Dashboard
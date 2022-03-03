import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Tabs from '../components/dashboard/Tabs'
import './Dashboard.css'
import Payments from '../components/dashboard/Payments';
import Myitems from '../components/dashboard/Myitems';
import Earnings from '../components/dashboard/Earnings';
import Withdraws from '../components/dashboard/Withdraws.jsx'
import WithdrawMoney from '../components/dashboard/WithdrawMoney';
import Wishlist from '../components/dashboard/Wishlist';
import MyAccount from '../components/dashboard/MyAccount';
const Dashboard = (props) => {

    const { Content, Sider } = Layout;

  return (
    <Layout style={{padding:'0 8rem', marginTop:'1rem'}}>
        <Sider width={300} className="site-layout-background" style={{height:'90vh'}}>
            <Tabs />
        </Sider>
        <Layout style={{ padding: '0 0 0 2rem' }}>
            <Content
            className="site-layout-background"
            style={{
                padding: '1.5rem 1.5rem 0',
                margin: '0 0 2rem 0',
                minHeight: 280,
            }}
            >
            <Payments />
            </Content>
            <Content
            className="site-layout-background"
            style={{
                padding: '1.5rem 1.5rem 0',
                margin: '0 0 2rem 0',
                minHeight: 280,
            }}
            >
            <Myitems view={'myitems'} />
            </Content>
            <Content
            className="site-layout-background"
            style={{
                padding: '1.5rem 1.5rem 0',
                margin: '0 0 2rem 0',
                minHeight: 280,
            }}
            >
            <Earnings />
            </Content>
            <Content
            className="site-layout-background"
            style={{
                padding: '1.5rem 1.5rem 0',
                margin: '0 0 2rem 0',
                minHeight: 280,
            }}
            >
            <Withdraws />
            </Content>
            <Content
            className="site-layout-background"
            style={{
                padding: '1.5rem 1.5rem 0',
                margin: '0 0 2rem 0',
                minHeight: 280,
            }}
            >
            <WithdrawMoney />
            </Content>
            <Content
            className="site-layout-background"
            style={{
                padding: '1.5rem 1.5rem 0',
                margin: '0 0 2rem 0',
                minHeight: 280,
            }}
            >
            <Wishlist />
            </Content>
            <Content
            className="site-layout-background"
            style={{
                padding: '1.5rem',
                margin: '0 0 2rem 0',
                minHeight: 280,
            }}
            >
            <MyAccount />
            </Content>
        </Layout>
    </Layout>

  )
}

export default Dashboard
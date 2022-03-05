import React from 'react'
import { Layout, Card, Col, Row, Typography } from 'antd';
import Tabs from '../components/dashboard/Tabs'
import './Dashboard.css'
import Payments from '../components/dashboard/Payments';
import Myitems from '../components/dashboard/Myitems';
import Earnings from '../components/dashboard/Earnings';
import Withdraws from '../components/dashboard/Withdraws.jsx'
import WithdrawMoney from '../components/dashboard/WithdrawMoney';
import Wishlist from '../components/dashboard/Wishlist';
import MyAccount from '../components/dashboard/MyAccount';
import { Route, Routes, Link } from 'react-router-dom';
const { Title } = Typography;

const Dashboard = (props) => {

    const { Content, Sider } = Layout;

  return (
        <Layout className='main-content'>
            <Content>
                <div className="site-card-wrapper">
                    <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={6}>
                        <Card hoverable title="Credit" bordered={false}>
                            <Title level={5}>Content</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card hoverable title="Wishlist" bordered={false}>
                            <Title level={5}>Content</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card hoverable title="My Purchases" bordered={false}>
                            <Title level={5}>Content</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card hoverable title="My sales" bordered={false}>
                            <Title level={5}>Content</Title>
                        </Card>
                    </Col>
                    </Row>
                </div>
            
            <Layout style={{marginTop:'1rem'}}>
                <Sider 
                    width={300} 
                    className="site-layout-background" 
                    style={{height:'90vh'}}
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <Tabs />
                </Sider>
                    <Layout style={{ padding: '0 0 0 2rem' }}>
                        <Content className="dash-content">
                                <Routes>
                                {/* <Route path='/' element={<DashboardCom />} /> */}
                                <Route path='/payments' element={<Payments />} />
                                <Route path='/earnings' element={<Earnings />} />
                                <Route path='/myitems/*' element={<Myitems view='myitems' />} />
                                <Route path='/myaccount' element={<MyAccount />} />
                                <Route path='/withdraws' element={<Withdraws />} />
                                <Route path='/withdraw-money' element={<WithdrawMoney />} />
                                <Route path='/wishlist' element={<Wishlist />} />
                            </Routes>
                        </Content>
                </Layout>
            </Layout>
        </Content>
    </Layout>

  )
}

export default Dashboard
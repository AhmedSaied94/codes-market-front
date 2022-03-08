import * as React from 'react'
import ItemCard from '../components/item/ItemCard';
import { Layout, Row, Col, Typography } from 'antd'
const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
    const arr = []
    for (let index = 0; index < 11; index++) {
       arr.push(index)
        
    }
  return (
    <Content className='main-content'>
        <Row gutter={16}>
        <Col span={24}><Title level={4}>New Items</Title></Col>
            {arr.map((i, n) => {
                return (
                    <Col key={n} xs={24} sm={12} md={6} style={{marginBottom:'1rem'}}>
                        <ItemCard id={n} />
                    </Col>
                )
            })}
        </Row>
        <Row gutter={16}>
            <Col span={24}><Title level={4}>Top Selling</Title></Col>
            {arr.map((i, n) => {
                return (
                    <Col key={n} xs={24} sm={12} md={6} style={{marginBottom:'1rem'}}>
                        <ItemCard id={n} />
                    </Col>
                )
            })}
        </Row>
    </Content>
  )
}

export default Home
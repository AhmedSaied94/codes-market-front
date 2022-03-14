import * as React from 'react'
import ItemCard from '../components/item/ItemCard';
import { Layout, Row, Col, Typography, Spin } from 'antd'
import { axiosFetchInstance, handleUnauthorized } from '../Axios'
const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
    const [Items, setItems] = React.useState()


    React.useEffect(()=> {
        axiosFetchInstance.get('/')
        .then(res => setItems(res.data))
        .catch(error => handleUnauthorized(error))
    }, [])

  return (
    <Content className='main-content'>
        {Items ?
        <>
        <Row gutter={16}>
        <Col span={24}><Title level={4}>New Items</Title></Col>
            {Items.new_items.map(item => {
                return (
                    <Col key={`new${item.id}`} xs={24} sm={12} md={6} style={{marginBottom:'1rem'}}>
                        <ItemCard item={item} />
                    </Col>
                )
            })}
        </Row>
        <Row gutter={16}>
            <Col span={24}><Title level={4}>Top Selling</Title></Col>
            {Items.most_selled.map(item => {
                return (
                    <Col key={`top${item.id}`} xs={24} sm={12} md={6} style={{marginBottom:'1rem'}}>
                        <ItemCard item={item} id={item.id} />
                    </Col>
                )
            })}
        </Row>
        </>
        :
        <Spin style={{margin:'5rem 48%'}} size="large" />
        }
    </Content>
  )
}

export default Home
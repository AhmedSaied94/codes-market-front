import * as React from 'react'
import ItemHeader from '../components/item/ItemHeader'
import ItemDetails from '../components/item/ItemDetails'
import ItemReviews from '../components/item/ItemReviews'
import ItemComments from '../components/item/ItemComments'
import ItemPurchase from '../components/item/ItemPurchase'
import { Layout, Row, Col, Tabs } from 'antd'
import { axiosFetchInstance } from '../Axios'
import QueryString from 'query-string'
import { useLocation } from 'react-router-dom'
const { Content } = Layout
const { TabPane } = Tabs
export const ItemContext = React.createContext()

const ItemPage = () => { 
    const [item, setItem] = React.useState()
    const location = useLocation()
    const query = QueryString.parse(location.search)
    React.useEffect(()=> {
        axiosFetchInstance.get(`/item-details/${query.id}/`)
        .then(res => {
            console.log(res.data)
            setItem(res.data)
        })
        .catch(error => console.log(error.response))
    }, [])
  return (
    <Content className='main-content'>
        <ItemContext.Provider value={{item, setItem}}>
            { item &&
            <>
        <ItemHeader />
        <Row style={{marginTop:'1rem'}} gutter={[16,16]}>
            <Col xs={24} sm={16}>
                <Tabs  defaultActiveKey="item" centered>
                    <TabPane tab="Item" key="item">
                        <ItemDetails />
                    </TabPane>
                    <TabPane tab="Reviews" key="reviews">
                        <ItemReviews />
                    </TabPane>
                    <TabPane tab="Comments" key="comments">
                        <ItemComments />
                    </TabPane>
                </Tabs>
            </Col>
            <Col style={{marginTop:'3.75rem'}} xs={24} sm={8}>
                <ItemPurchase />
            </Col>
        </Row>
        </>
        }
        </ItemContext.Provider>
    </Content>
  )
}

export default ItemPage
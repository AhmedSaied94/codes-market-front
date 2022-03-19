import * as React from 'react'
import Catigories from '../components/catalog/Catigories'
import Items from '../components/catalog/Items'
import { axiosFetchInstance } from '../Axios'
import { Layout, Spin, spin } from 'antd'
import QueryString from 'query-string'
import { useLocation } from 'react-router-dom'
export const ItemsContext = React.createContext()
const { Sider, Content } = Layout;
const Catalog = (props) => {
    const [items, setItems] = React.useState()
    const [catigories, setCatigories] = React.useState()
    const location = useLocation()
    const query = QueryString.parse(location.search)
    React.useEffect(()=> {
        axiosFetchInstance.get('/catigories/')
        .then(res => setCatigories(res.data))
        axiosFetchInstance('/items/all/')
        .then(res => {
            query.search ? 
            setItems(res.data.filter(i => i.name.includes(query.search)))
            :
            setItems(res.data)}
            )
    }, [])
    
  return (
    <Layout className='main-content'>
        {items && catigories ?
        <ItemsContext.Provider value={{items, setItems}}>
        <Sider 
            width={300} 
            className="site-layout-background" 
            style={{height:'90vh', marginTop:'1.5rem', paddingTop:'1rem'}}
            breakpoint="lg"
            collapsedWidth="0"
        >
            <Catigories catigories={catigories} />
        </Sider>
        <Layout>
            <Content className='dash-content'>
                <Items />
            </Content>
        </Layout>
        </ItemsContext.Provider>
        :
        <Spin  size='large'/>
        }
    </Layout>
  )
}

export default Catalog
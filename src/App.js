import * as React from 'react';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import RegisterForm from './components/registration/RegisterForm';
import LoginForm from './components/registration/LoginForm';
import Catalog from './pages/Catalog';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemPage from './pages/ItemPage';
import { axiosFetchInstance, axiosInstance, handleUnauthorized } from './Axios'

const { Header } = Layout;
export const UserContext = React.createContext()



const App = props => {

    const [authedUser, setAuthedUser] = React.useState()
    const client_id = "FL7ixHnVGK1BTP36HsZLaphKNI9dt8FPTepS9JLI"
    const client_secret = "72XySSrkywbtjMy6XBa3YDFBhgE6L4QyBevwUPfy4G7tU4cOGx4EmP1Gga2vihHRR9FbR0l7Wy8TLU9rgxYHpDWDr5F2sDt6jG6HKkimjLM1RwcijU8aCOfpsQwIOHGn"
    const host = 'http://localhost:8000'
    React.useMemo(() => {
        if (localStorage.getItem('foxCodes_accessToken')){
            axiosFetchInstance
            .get('/account/dashboard/')
            .then(res => {
                console.log(res.data)
                res.data && setAuthedUser(res.data)
            })
            .catch(error => {
                if (error.response.status === 401) handleUnauthorized(error)
                else console.log(error.response)
                
            })
        } else setAuthedUser(null) 
    }, [])

    return (
    <UserContext.Provider value={{authedUser, setAuthedUser, client_id, client_secret, host}}>
    <BrowserRouter>
    <Layout style={{minHeight:'100vh'}}>
        <Header style={{backgroundColor:'#fff'}}>
            <div style={{float:'left', width:'20%', borderBottom:'1px solid #f0f0f0', height:'inherit', paddingRight:'1rem'}} className='logo'>
                <Link to='/'>
                    <img style={{width:'100%'}} src={require('./images/foxcodes-2.png')} />
                </Link>
            </div>
            <Navbar />
        </Header>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard/*' element={<Dashboard />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/signup' element={<RegisterForm />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/item' element={<ItemPage />} />
        </Routes>
        {/* <RegisterForm />
        <Dashboard /> */}
    </Layout>
    </BrowserRouter>
    </UserContext.Provider>
    );
  
}

export default App;

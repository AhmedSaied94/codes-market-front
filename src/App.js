import * as React from 'react';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import RegisterForm from './components/registration/RegisterForm';
import Catalog from './pages/Catalog';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemPage from './pages/ItemPage';




const App = props => {
    const { Header } = Layout;

    return (
    <BrowserRouter>
    <Layout>
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
            <Route path='/item' element={<ItemPage />} />
        </Routes>
        {/* <RegisterForm />
        <Dashboard /> */}
    </Layout>
    </BrowserRouter>
    );
  
}

export default App;

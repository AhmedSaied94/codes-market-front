import * as React from 'react';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/Dashboard';
import RegisterForm from './components/registration/RegisterForm';



const App = props => {
    const { Header } = Layout;

    return (
    <Layout>
        <Header style={{backgroundColor:'#fff'}}>
            <Navbar />
        </Header>
        {/* <RegisterForm /> */}
        <Dashboard />
    </Layout>
    );
  
}

export default App;

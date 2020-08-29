import React from 'react';
import Axios from 'axios';
import './App.css';
import { Switch , Route , Link} from 'react-router-dom';
import { Layout } from 'antd';

import Home from './pages/home';
import User from './pages/user';
import Detail from './pages/detail';

const { Header , Content } = Layout;

Axios.defaults.baseURL = 'https://cnodejs.org/api/v1';


class App extends React.Component{

  render(){
    return (
      <Layout>
          <Header className='header'>
              <Link to='/'>
                  <div className='logo'>
                    <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
                  </div>
              </Link>
          </Header>
          <Layout>
            <Content
                style={{
                  background:'#fff',
                  padding:'0 40px'
                }}
            >   
                <Switch>
                    <Route exact={true} path='/:tab?' component={Home} />
                    <Route path='/detail/:id?' component={Detail} />
                    <Route path='/user/:loginname?' component={User} />
                </Switch>
            </Content>
          </Layout>
      </Layout>
    )
  }
}

export default App;

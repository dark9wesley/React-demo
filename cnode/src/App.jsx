import React from 'react';
import Axios from 'axios';
import './App.css';
import { Switch , Route } from 'react-router-dom';
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
              <div className='logo'>
                <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
              </div>
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
                    <Route exact={true} path='/detail/:id?' component={Detail} />
                    <Route exact={true} path='/user/:userid?' component={User} />
                </Switch>
            </Content>
          </Layout>
      </Layout>
    )
  }
}

export default App;

import React from 'react';
import Axios from 'axios';
import './App.css';
import { Switch , Route , Link} from 'react-router-dom';
import { Layout } from 'antd';

import routes from './routes/index';
const { Header , Content } = Layout;

Axios.defaults.baseURL = 'https://cnodejs.org/api/v1';  //设置请求默认地址


class App extends React.Component{

  render(){
    return (
      <Layout>
          <Header className='header'>    {/* 设置项目通用头部,主要包括logo */}
              <Link to='/'>
                  <div className='logo'>
                    <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
                  </div>
              </Link>
          </Header>
          <Content className='main'>    {/* 循环遍历路由配置。并根据不同的路由渲染不同的内容 */}
              <Switch>
                  {
                    routes.map( item =>{
                      return (
                        <Route key={item.name} exact={item.exact} path={item.path} component={item.component} />
                      )
                    })
                  }
              </Switch>
          </Content>
      </Layout>
    )
  }
}

export default App;

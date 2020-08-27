import React from 'react';
import Axios from 'axios';
import './App.css';
import ArticleList from './components/articlelist';
import { Layout , Menu } from 'antd';

const { Header , Sider , Content } = Layout;

Axios.defaults.baseURL = 'https://cnodejs.org/api/v1';

const menuList = {
  all:'全部',
  good:'精华',
  share:'分享',
  ask:'问答',
  job:'招聘'
}

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
              <Sider width={200} style={{ background:'#fff' }}>
                  <Menu
                      theme='light'
                      mode='vertical'
                      defaultSelectedKeys={['all']}
                      style={{lineHeight:'64px'}}
                  >
                      {
                        Object.entries(menuList).map(item => {
                        return <Menu.Item key={item[0]}>{item[1]}</Menu.Item>
                        })
                      }
                  </Menu>
              </Sider>
              <Content
                  style={{
                    background:'#fff',
                    border:'1px solid #eee'
                  }}
              >
                  <ArticleList />
              </Content>
          </Layout>
      </Layout>
    )
  }
}

export default App;

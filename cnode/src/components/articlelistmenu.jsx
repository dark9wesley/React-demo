import React , { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export default class ArticleMenu extends Component {
    
    state={
        tab:'all'
    }

    componentDidMount(){
        this.setState({
            tab:this.props.tab
        })
    }
    
    render(){
        const { menuList } = this.props;
        const { tab } = this.state;
        return (
            <Menu
                theme='light'
                mode='vertical'
                selectedKeys={[tab]}
                onSelect={({key})=>{
                    this.setState({tab:key})
                }}
            >
                {
                    Object.entries(menuList).map(item => {
                    return <Menu.Item key={item[0]}>
                                <Link to={`/${item[0]}`}>{item[1]}</Link>
                            </Menu.Item>
                    })
                }
            </Menu>
        )
    }
} 
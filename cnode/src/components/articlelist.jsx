import React,{ Component } from 'react';
import Axios from 'axios';
import { List , Avatar , Tag } from 'antd';

const tagIcon = [
    {
        all:'magenta'
    },
    {
        good:'volcano'
    },
    {
        share:'blue'
    },
    {
        ask:'gold'
    },
    {
        job:'purple'
    }
]

export default class ArticleList extends Component{
    
    state = {
        dataList:[]
    }

    componentDidMount(){
        Axios.get(
            `/topics?page=${1}&tab=${'all'}&limit=${20}`
            )
            .then(
                data => data.data.data
                )
                .then(
                    data => this.setState({dataList:data})
                )
    }
    
    render(){
        console.log(this.state)
        const { dataList } = this.state
        return (
            <List
                dataSource={dataList}
                renderItem={(item)=>{
                    return (<List.Item key={item.id}>
                                <List.Item.Meta 
                                    avatar={< Avatar src={item.author.avatar_url} />}
                                    title={ item.title }
                                />
                            </List.Item>)
                }}
            />
        )
    }
}
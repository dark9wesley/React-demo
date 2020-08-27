import React,{ Component } from 'react';
import Axios from 'axios';
import { List } from 'antd';


export default class ArticleList extends Component{
    
    componentDidMount(){
        Axios.get(`/topics?page=${1}&tab=${'all'}&limit=${20}`).then((data) => { console.log(data) })
    }
    
    render(){
        return (
            <List>
                
            </List>
        )
    }
}
import React,{ Component } from 'react';
import Axios from 'axios';
import { fromNow , locate } from 'silly-datetime';
import { List , Avatar , Tag } from 'antd';
import {Link} from 'react-router-dom';

locate('zh-cn');
export default class ArticleList extends Component{
    
    state = {
        dataList:[],
        page:1
    }

    componentDidMount(){
        const { tab } = this.props;
        this.getData(tab);
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.tab !== this.props.tab){
            this.getData(nextProps.tab)
            return false;
        }
        return true;
    }

    getData = (tab='all',page=1) => {
        Axios.get(
            `/topics?page=${page}&tab=${tab}&limit=${15}`
            )
            .then(
                data => data.data.data
                )
                .then(
                    data => this.setState({dataList:data})
                )
    }
    
    render(){
        const { dataList } = this.state;
        const { menuList , colorList , tab } = this.props;
        return (
            <List
                className='list'
                dataSource={dataList}
                pagination={{ 
                    pageSize: 15 , 
                    total: 600 , 
                    showSizeChanger:false , 
                    onChange:(page)=>{
                        this.setState({page});
                        this.getData( tab ,page)
                    }
                }}
                renderItem={(item)=>{
                    return (<List.Item 
                                key={item.id} 
                                className='item'
                                actions={[`回复 ${item.reply_count}`,`访问 ${item.visit_count}`]}
                            >
                                <List.Item.Meta 
                                    avatar={
                                        <Link to={`/user/${item.author.loginname}`} >
                                            <Avatar src={item.author.avatar_url}/>
                                        </Link>
                                    }
                                    title={ 
                                        <div>
                                            <Tag
                                                color={colorList[item.tab]}
                                            >
                                                {item.top ? '置顶' : (item.good ? '精华' : menuList[item.tab])}
                                            </Tag>
                                            <Link to={`/detail/${item.id}`}>
                                                {item.title}
                                            </Link>
                                        </div> 
                                    }
                                    description={
                                        <div>
                                            <Link to={`/user/${item.author.loginname}`} className='user_name'>
                                                {item.author.loginname}
                                            </Link>
                                            <span className='reply_time'>
                                                最后回复时间：{fromNow(item.last_reply_at)}
                                            </span>
                                        </div>
                                    }
                                />
                            </List.Item>)
                }}
            />
        )
    }
}
import React, { Component } from 'react';
import { Card , Descriptions , Avatar} from 'antd';
import Axios from 'axios';
import { fromNow } from 'silly-datetime';

import UserTopic from '../components/usertopic';

const { Item } = Descriptions; 

export default class User extends Component{

    state = { 
        data : []
    }

    componentDidMount(){
        const { loginname } = this.props.match.params; 
        Axios.get(`/user/${loginname}`).then( data => data.data.data ).then( data => this.setState({data}))
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.loginname !== this.props.match.params.loginname){
            Axios.get(`/user/${this.props.match.params.loginname}`).then( data => data.data.data ).then( data => this.setState({data}))
        }
    }

    render(){
        const { data } = this.state;
        return (
            <div className='wrap'>
                <Card
                    title={
                        <Descriptions
                            title={<Avatar src={data.avatar_url} style={{marginBottom:'20px'}} />}
                        >
                            <Item label='用户名'>
                                {data.loginname}
                            </Item>
                            <Item label='积分'>
                                {data.score}
                            </Item>
                            <Item label='创建时间'>
                                {fromNow(data.create_at)}
                            </Item>
                        </Descriptions>
                    }
                >
                    <UserTopic title={'最近创建的话题'} data={data.recent_topics} />
                    <UserTopic title={'最近回复的话题'} data={data.recent_replies} />
                </Card>
            </div>
        )
    }
} 
import React,{ Component } from 'react';
import { Card , List , Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { fromNow } from 'silly-datetime';
const { Item } = List;

export default class UserTopic extends Component{

    render(){
        const { title , data } = this.props;
        return(
            <Card
                title={title}
            >
                <List
                    dataSource={data}
                    pagination={{ 
                        pageSize: 5 , 
                        total: data?.length , 
                        hideOnSinglePage:true
                        }
                    }
                    renderItem={(item)=>{
                        return (<Item 
                                    key={item.id} 
                                    className='item'
                                    extra={`最后回复时间：${fromNow(item.last_reply_at)}`}
                                >
                                    <Item.Meta 
                                        avatar={
                                            <Link to={`/user/${item.author.loginname}`}>
                                                <Avatar src={item.author.avatar_url}/>
                                            </Link>
                                        }
                                        title={ 
                                            <div>
                                                <Link to={`/detail/${item.id}`}>
                                                    {item.title}
                                                </Link>
                                            </div> 
                                        }
                                        
                                    />
                                </Item>)
                    }}
                />
            </Card>
        )
    }
}

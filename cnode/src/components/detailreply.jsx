import React,{ Component } from 'react';
import { Card , List , Avatar } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import { fromNow } from 'silly-datetime';
import { Link } from 'react-router-dom';
const { Item } = List;

export default class DetailReply extends Component{
    render(){

        const { data } = this.props;
        return (
            <Card
                title={
                <div>{data?.length}条回复</div>
                }
            >
                <List 
                    itemLayout='vertical'
                    className='reply_list'
                    pagination={{
                        pageSize:5,
                        total: data?.length,
                        hideOnSinglePage:true
                    }}
                    dataSource={data}
                    renderItem={(item)=>{
                        return (
                                <Item
                                    extra={item.ups?.length ? <div><LikeOutlined /> {item.ups?.length}</div>  : '' }
                                    className='item'
                                >
                                    <Item.Meta
                                        avatar={
                                            <Link to={`/user/${item.author.loginname}`}>
                                                <Avatar src={item.author?.avatar_url}/> 
                                            </Link>
                                        }
                                        description={
                                            <div>
                                                <Link to={`/user/${item.author.loginname}`} className='user_name'>
                                                    {item.author?.loginname}
                                                </Link>
                                                <span>发表于：{fromNow(item.create_at)}</span>
                                            </div>
                                        }
                                    >
                                    </Item.Meta>
                                    {
                                            <div dangerouslySetInnerHTML={{
                                                __html:item.content
                                            }} />
                                        }
                                </Item>
                            )
                    }}
                />
            </Card>
        )
    }
}
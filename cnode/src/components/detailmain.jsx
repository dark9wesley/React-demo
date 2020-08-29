import React,{ Component } from 'react';
import { fromNow } from 'silly-datetime';
import { Card , Tag } from 'antd';

import { menuList , colorList } from '../utils/utils';

export default class DetailMain extends Component{
    render(){ 
        const { data } = this.props;
        return (
            <Card
                type='inner'
                title={
                    <div>
                        <div className='title'>
                            <Tag
                                color={colorList[data.tab]}
                            >
                                {data.top ? '置顶' : (data.good ? '精华' : menuList[data.tab])}
                            </Tag>
                            <span className='title_name'>
                                {data.title}
                            </span>
                        </div>
                        <div className='info'>
                            <span> 发布于 {fromNow(data.create_at)} </span>
                            <span> 作者 {data.author?.loginname} </span>
                            <span> {data.visit_count} 次浏览 </span>
                            <span> 来自 {menuList[data.tab]} </span>
                        </div> 
                    </div>
                }
            >
               {
                   <div dangerouslySetInnerHTML={{
                       __html:data.content
                   }}
                   className='content'
                   />
               }
            </Card>
        )
    }
}
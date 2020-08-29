import React, { Component } from 'react';
import Axios from 'axios';

import DetailMain from '../components/detailmain';
import DetailReply from '../components/detailreply';

export default class Detail extends Component{
    state = {
        data:[]
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        Axios.get(`/topic/${id}`).then(data => {
            this.setState({data:data.data.data})
        })
    }

    render(){
        return (
            <div className='wrap'>
                <DetailMain data={this.state.data} />
                {this.state.data.replies?.length ? <DetailReply data={this.state.data.replies} /> : '' }
            </div>
        )
    }
} 
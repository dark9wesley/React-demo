import React, { Component } from 'react';
import Axios from 'axios';

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
        // console.log(this.props.match.params);
        console.log(this.state.data)
        return (
            <div>详情页</div>
        )
    }
} 
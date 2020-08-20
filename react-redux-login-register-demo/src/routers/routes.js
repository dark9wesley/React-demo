import React from 'react';
import { Route } from 'react-router-dom';
import App from '../components/App';
import SignUp from '../components/signup/signup';

export default (
    <div>
        <Route exact path='/' component={App} />
        <Route path='/signup' component={SignUp} />
    </div>
)
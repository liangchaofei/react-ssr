import React from 'react';
import { Router } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';

export default (
    <div>
        <Router path='/' exact component={Home}></Router>
        <Router path='/login' exact component={Login}></Router>
    </div>
)
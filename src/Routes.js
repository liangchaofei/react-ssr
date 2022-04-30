import React from 'react';
import { Router } from 'react-router-dom';
import Home from './containers/Home';

export default (
    <div>
        <Router path='/' exact component={Home}></Router>
    </div>
)
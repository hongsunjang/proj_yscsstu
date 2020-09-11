import React from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
//switch component 로 묶어주면 첫번째 걸리는 router만 출력해준다.
function RouterComponent(){
    return(
        <div>
            <h1>React Router Dom example</h1>
            <ul>
                <li><a href ="/">Home</a></li>
                <li><a href ="/topics">Topics</a></li>
                <li><a href = "/contact">Contact</a></li>
            </ul>
            
            <Switch> 
                <Route exact path="/"><Home></Home></Route>
                <Route path="/topics"><Topics></Topics></Route>
                <Route path="/contact"><Contact></Contact></Route>
                <Route path="/">404:Not Found!</Route>

            </Switch>
        </div>
    );
}

function Home(){
    return(
        <div>
            <h2>Home</h2>
            Home...
        </div>
    )
}

function Topics(){
    return(
        <div>
            <h2>Topics</h2>
            Topics...
        </div>
    )
}

function Contact(){
    return(
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    )
}

export default RouterComponent;
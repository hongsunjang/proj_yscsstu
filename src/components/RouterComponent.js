import React from 'react';

function RouterComponent(){
    return(
        <div>
            <h1>React Router Dom example</h1>
            <ul>
                <li><a href ="/">Home</a></li>
                <li><a href ="/topics">Topics</a></li>
                <li><a href = "/contact">Contacts</a></li>
            </ul>
            <Switch>
                <Route path="/"><Home></Home></Route>
                <Route path="/topics"><Topics></Topics></Route>
                <Route path="/comtact"><Contact></Contact></Route>
            </Switch>
        </div>
    );
}

export default RouterComponent;
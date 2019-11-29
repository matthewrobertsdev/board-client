import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from '../View/Posts';
import Post from '../View/Post';
const AppRouter= () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" exact component={Posts}/>
                <Route path="/post" exact component={Post}/>
                {/*<Route component={PageNotFoundView}/>*/}
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;
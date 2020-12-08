import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";


import Login from "./page/Login";
import Register from "./page/Register";

class Main extends Component{
    render = () => {
        return(
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        );
    }
}

export default Main;

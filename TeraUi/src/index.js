import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Invoke from './Invoke';
import Query from './query'
//import Header from './header';
import Home from './Home';
import Update from "./update";

class Index extends Component{
    render() {
        var Child;

        switch(this.props.route) {
            case 'query': Child = Query; break;
            case 'invoke': Child = Invoke; break;
            case 'update' : Child = Update; break;
            default: Child = Home;
        }

        return (
            <div>
                <App/>
                <Child/>
                
                
            </div>
        );
    }
}

var route =window.location.hash.substr(1);

ReactDOM.render(<Index route={route} />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

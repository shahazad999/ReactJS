import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import Query from './query'
//import Header from './header';

import Header from "./Header";

class Index extends Component{
    render() {
        var Child;

        switch(this.props.route) {
            case 'query': Child = Query; break;
            case 'invoke': Child = App; break;
           
            default: Child = App;
        }

        return (
            <div>
                <Header/>
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

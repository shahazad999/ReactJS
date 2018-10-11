"use strict";

var React = require('react');
/*
var request = new XMLHttpRequest();

request.open('GET','')
*/

var Home = React.createClass({
    render: function(){
        return (
            <div className="myClass">
                <h1 color ='red'><strong>BlockChain </strong>
                    Medical Record Database
                </h1>
                
                <button>
                    Click me
                </button>
                <p>
                    Sample Web App
                    <li>
                        <a href="http://localhost:9005/#query">Query</a>
                    </li>
                    <li>    </li>
                    <li>
                        <a href="http://localhost:9005/#invoke">Invoke</a>
                    </li>
                </p>
            </div>
        );

    }
});

module.exports = Home;

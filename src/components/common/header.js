"use strict";

var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <nav className ="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img src="images/Cerner_Corporation_logo.png" width="100" height="35"/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#invoke">Invoke</a></li>
                        <li><a href="/#query">Query</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
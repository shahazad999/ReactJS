"use strict";

var React = require('react');

var User = React.createClass({
    render: function() {
        return (           
            <form>
                <h1>User</h1>
                <input type ="text" placeholder ="User Name" />
                <input type ="text" placeholder ="Org Name" />
                <button type ="submit">Submit</button>
            </form>
            
        );   
    }
});

function getUser() {
    let config = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: ur
    }
}
"use strict";

var React = require('react');

var Query = React.createClass({
    getInitialState: function() {
        return {token: '', ID: ''};
    },

    handleChange: function(event) {
        this.setState({token: event.target.token });
        this.setState({ID : event.target.ID})
    },

    handleClick: function() {
        alert("Token is" +this.state.token, "ID is" +this.state.ID);
    },

    handleSubmit: function() {
        this.setState({result: queryFunc()});
        console.log(result)
    },

    render: function() {
        return (           
            <form>
                <h1>Query</h1>
                <input type ="text" placeholder ="Token" value={this.state.token} onChange={this.handleChange} />
                <button type ="submit" onClick={this.handleClick} >Submit</button>
                <input type ="text" value = {this.state.ID} onChange={this.handleChange} />
                <button type ="submit" onClick={this.handleSubmit} >Submit</button>
            </form>
            
        );   
    },
    queryFunc: function() {
        let config = {
          method: 'GET',
          headers: {
            'authorization': this.state.token,
            'content-Type': 'application/json'
          }
        }
      
        fetch('http://localhost:4000' + 'channels/mychannel/chaincode/mycc?peer=peer0.org1.example.com&fcn=query&args=%5B%22'+ this.state.ID +'%22%5D', config)
          .then(response => response.json() )
          .then((json) =>{
            console.log("in refresh state method")
     
            console.log("JSON")
            console.log(json)
         
            if (typeof(json) == "string") {
              localStorage.setItem('objects', json)
    
            } else {
              localStorage.setItem('objects', JSON.stringify(json))
            }
    
            if (JSON.parse(json)) {
              return JSON.parse(json)
            } else {
              return json
            }
        }).catch( (err) => {
            console.log("fetch failed")
            console.log(err)
        });
    }
});

module.exports = Query;
"use strict";

var React = require('react');

var Invoke = React.createClass({
    getInitialState: function() {
        return {value: ''};
    },

    handleChange: function(event) {
        this.setState({value: event.target.value });
    },

    handleClick: function() {
        alert("Token is" +this.state.value);
    },

    render: function() {
        return (           
            <form>
                <div>
                <h1>Invoke</h1>
                <input type="text" placeholder ="Authentication Tocken" value={this.state.value} onChange={this.handleChange}/>
                <input type="button" value = "Submit Token" onClick={this.handleClick} />
                </div>
                <div>
                <input type ="text" placeholder ="Function Name" />
                <input type ="text" placeholder ="Data" />
                <button type ="submit">submit</button>
                </div>
            </form>
            
        );   
    }
});

/*
function invoke() {
    let config = {
      method: 'POST',
      headers: {
        'authorization': token,
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        method: "invoke",
        params: {
          ctorMsg: {
            function: 'addMedicalRecord',
            args: [id , name, age, weight]
          }
        }
      })
    }
  
    fetch(window.location.href.replace('4000', '3001') + 'channels/mychannel/chaincode/mycc', config)
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
}*/

module.exports = Invoke;
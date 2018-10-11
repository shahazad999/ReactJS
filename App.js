import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function refreshState() {
  let config = {
    method: 'POST',
    headers: {
      'content-Type': 'application/x-www-form-urlencoded'
      //"Authorization": "Basic " + new Buffer(key + ":" + secret, "utf8").toString("base64")
    },
    body: 'username=Shahazad&orgName=Org1'
  }
  // console.log(config.body)

  fetch('http://localhost:4000' + '/users', config)
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


class App extends Component {
  componentDidMount() {
    setInterval(() => {
        console.log("component mounting in interval")
        this.setState({ objects: refreshState() })

    }, 150000);
  }

  handleChange = (event, value) => {
    console.log("updating state")
    console.log(value)
    this.setState({ value });
  };
  handleRefresh = () =>  {
    console.log("handleRefresh")
    // console.log(this.state.objects)
    this.setState({ objects: refreshState() });
    alert("result is" +this.state.objects)
  };
  state = {
    value: 0,
    objects: {}
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <button size="small" onClick={ this.handleRefresh }>Register</button>
        </header>
      </div>
    );
  }
}

export default App;

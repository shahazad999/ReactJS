import React, { Component } from 'react';

import logo from './Cerner.png';
import './App.css';
import { Button, Fade } from 'reactstrap';

class App extends Component {

  constructor(){
    super();
    this.state ={
      'items': [], 'token' : '',  'id': '',
      'auth' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mzk4NzkyMTksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1Mzk4NDMyMTl9.zPtUAucHkXT8L4d4j2yxVhTjH41h2XfhzamLIXCfDJ4', 
      'fadeIn': false
    }
    this.handleChange= this.handleChange.bind(this)
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  fetchData() 
  {
    
    let config = {
      method: 'GET',
      headers: {
        'authorization': 'Bearer '+this.state.auth,
        'content-Type': 'application/json'
        
      },
      
    }
   

    fetch('http://localhost:4000' + '/channels/mychannel/chaincodes/medrecord?peer=peer0.org1.example.com&fcn=queryMedicalRecord&args=%5B%22'+this.state.token+'%22%5D', config)
      .then(response =>  response.json() )
      .then((response) => this.setState({ 'items' : response }));
      

  }

  toggle() {
    this.setState({
        fadeIn: !this.state.fadeIn
    });
  }

  handleChange(e) {
    this.setState({token: e.target.value});
  }



  
  handleSubmit() {
    this.fetchData();

  }

  
  render() {
    const a = this.state.token
    return (
      <div className="App">
      
        <header className="App-header">
        <a href="/" className="navbar-brand">
          <img src={logo} width='200' height = '100' />
        </a>
        <h2>Query Medical Record from the Blockchain Ledger</h2>
        <form>
        <label>Query: 
        <input type="text" placeholder ="ID" value={this.state.token} onChange={this.handleChange}/>
        
        </label>
        
        <Button color="primary" size="lg" onClick={this.toggle}>Display</Button>
        
        <Button color="success" size="lg" onClick={this.handleSubmit}>Submit</Button>
        </form>
        
        

        </header>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                <h3>ID: {this.state.items.id}</h3>
                <h4>Name: {this.state.items.name}</h4>
                <h4>Weight: {this.state.items.weight}</h4>
                <h4>Age: {this.state.items.age}</h4>
        </Fade>
        </div>

    );
  }
}

export default App;

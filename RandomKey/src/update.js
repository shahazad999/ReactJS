import React, { Component } from 'react';
import './Update.css';
import logo from './Cerner.png';
import { Button, Alert } from 'reactstrap';

class Update extends React.Component {
    constructor(){
        super();
        this.state ={
          'items': [], 'token' : '', 
          'auth' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mzk4NzkyMTksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1Mzk4NDMyMTl9.zPtUAucHkXT8L4d4j2yxVhTjH41h2XfhzamLIXCfDJ4', 
          'key': "", 'id':"",'name' :"", 'age':"", 'weight':"",
          'input': '',
          'error': ''
        }
        this.handleChangeKey= this.handleChangeKey.bind(this)
        this.handleChangeID= this.handleChangeID.bind(this)
        this.handleChangeName= this.handleChangeName.bind(this)
        this.handleChangeAge= this.handleChangeAge.bind(this)
        this.handleChangeWeight= this.handleChangeWeight.bind(this)
        this.handleChangeInput= this.handleChangeInput.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
      }
    

      fetchData() 
      {

    
        let config = {
          method: 'POST',
          headers: {
            'authorization': 'Bearer '+this.state.auth,
            'content-Type': 'application/json'
            
          },
          body: '{ "peers": ["peer0.org1.example.com","peer0.org2.example.com"], "fcn":"updateMedicalRecord", "args":['+this.state.input +']}'
        }
       
    
        fetch('http://localhost:4000' + '/channels/mychannel/chaincodes/medrecord', config)
          .then(response =>  response.text() )
          .then((response) => this.setState({ 'items' : response }))
          .catch(err => err.text())
          .catch((err) => this.setState({'error': err}));
          
    
      }
    

      handleChangeKey(e) {
        this.setState({key: e.target.value});
      }
      handleChangeID(e) {
        this.setState({id: e.target.value});
        
      }
      handleChangeName(e) {
        this.setState({name: e.target.value});
      }
      handleChangeWeight(e) {
        this.setState({weight: e.target.value});
      }
      handleChangeAge(e) {
        this.setState({age: e.target.value});
      }
      handleChangeInput(e) {
        this.setState({input: e.target.value});
      }
    
      
      handleSubmit() {

        
        this.fetchData();

      }

      
      handleAlert(){
          alert()
      }
      
      render() {
         // const a = [JSON.stringify(this.state.id), ',',JSON.stringify(this.state.name), ',',JSON.stringify(this.state.age),',', JSON.stringify(this.state.weight)]
         const j = ['"'+this.state.key +'"', '"'+this.state.id +'"', '"'+this.state.name +'"']
         //const a = JSON.stringify(j)
         return (
        
          <div className="Invoke">
          
            <header className="Update-header">
            <a href="/" className="navbar-brand">
              <img src={logo} width='250' height = '100' />
            </a>
            <h2>Update Existing Record</h2>
            <form>
            <ul>
              <lable>
              <input type="text" placeholder ="key" value={this.state.key} onChange={this.handleChangeKey}/>
              </lable>
            </ul>
            
            <ul>
            
            <label>
            
            <input type="text" placeholder ="value" value={this.state.id} onChange={this.handleChangeID}/>
            </label>
            </ul>
            <ul>
            <label> 
            <input type="text" placeholder ="Type what you want to update" value={this.state.name} onChange={this.handleChangeName}/>
            </label></ul>
                  
            </form>
            <Button value = {j} onClick ={this.handleChangeInput}>Populate</Button>
            <Button color="info" size="lg" onClick={this.handleSubmit}>Submit</Button>
            </header>
            
            <li>{this.state.input}</li>
            <li>{this.state.items}</li>
            
            <Alert color="danger">
            {this.state.error}
            </Alert>
            </div>
    
        );
      }
}

export default Update;
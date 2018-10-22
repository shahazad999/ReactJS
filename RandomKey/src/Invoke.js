import React, { Component } from 'react';
import './Invoke.css';
import logo from './Cerner.png';
import { Button, Fade } from 'reactstrap';

class Invoke extends React.Component {
    constructor(){
        super();
        this.state ={
          'items': [], 'token' : '', 
          'auth' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mzk4NzkyMTksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1Mzk4NDMyMTl9.zPtUAucHkXT8L4d4j2yxVhTjH41h2XfhzamLIXCfDJ4', 
          'key': "", 'id':"",'name' :"", 'age':"", 'weight':"",
          'input': ''
        }
        this.handleChangeKey= this.handleChangeKey.bind(this)
        this.handleChangeID= this.handleChangeID.bind(this)
        this.handleChangeName= this.handleChangeName.bind(this)
        this.handleChangeAge= this.handleChangeAge.bind(this)
        this.handleChangeWeight= this.handleChangeWeight.bind(this)
        this.handleChangeInput= this.handleChangeInput.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.random=this.random.bind(this)
      }
    

      fetchData() 
      {

    
        let config = {
          method: 'POST',
          headers: {
            'authorization': 'Bearer '+this.state.auth,
            'content-Type': 'application/json'
            
          },
          body: '{ "peers": ["peer0.org1.example.com","peer0.org2.example.com"], "fcn":"addMedicalRecord", "args":['+this.state.input +']}'
        }
       
    
        fetch('http://localhost:4000' + '/channels/mychannel/chaincodes/medrecord', config)
          .then(response =>  response.text() )
          .then((response) => this.setState({ 'items' : response }));
          
    
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
      random() {

          this.setState({key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)})
      }
    
      
      handleSubmit() {

        
        this.fetchData();

      }

      
      handleAlert(){
          alert()
      }
      
      render() {
         // const a = [JSON.stringify(this.state.id), ',',JSON.stringify(this.state.name), ',',JSON.stringify(this.state.age),',', JSON.stringify(this.state.weight)]
         const j = ['"'+this.state.key +'"', '"'+this.state.id +'"', '"'+this.state.name +'"','"'+this.state.age +'"', '"'+this.state.weight +'"']
         const a = JSON.stringify(j)
         return (
        
          <div className="Invoke">
          
            <header className="Invoke-header">
            <a href="/" className="navbar-brand">
              <img src={logo} width='250' height = '100' />
            </a>
            <h2>Add Medical Record to Ledger</h2>
            <form>
            <ul>
            <input type="text" placeholder ="key" value={this.state.key} onChange={this.handleChangeKey}/>
            <Button onClick={this.random}>Generate</Button>
            </ul>
            
            <ul>
            
            <label>
            
            <input type="text" placeholder ="ID" value={this.state.id} onChange={this.handleChangeID}/>
            </label>
            </ul>
            <ul>
            <label> 
            <input type="text" placeholder ="Name" value={this.state.name} onChange={this.handleChangeName}/>
            </label></ul>
            <ul>
            <label>
            <input type="text" placeholder ="Weight" value={this.state.weight} onChange={this.handleChangeWeight}/>
            </label></ul>
            <ul>
            <label>
            <input type="text" placeholder ="Age" value={this.state.age} onChange={this.handleChangeAge}/>
            </label> </ul>           
            </form>
            <Button value = {j} onClick ={this.handleChangeInput}>Populate</Button>
            <Button color="info" size="lg" onClick={this.handleSubmit}>Submit</Button>
            </header>
            
            <li>{this.state.input}</li>
            <li>{this.state.items}</li>
            
            
            </div>
    
        );
      }
}

export default Invoke;
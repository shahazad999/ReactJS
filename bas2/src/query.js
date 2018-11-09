import React, { Component } from 'react';

import Input from 'terra-form-input';
import Fieldset from 'terra-form-fieldset/lib/Fieldset';
import Button from 'terra-button/lib/Button';
import Layout from 'terra-layout/lib/Layout';
import ReactJson from 'react-json-view'


class Query extends React.Component {

    constructor(){
        super();
        this.state ={
          'items': [], 'token' : '',  'id': '',
          'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDE2OTY5NTUsInVzZXJuYW1lIjoiQ2VybmVyIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NDE2NjA5NTV9.w0Yh_oSYVyTjiSlQdwYbWjhInBXuX02dKnOieaFQLpY', 
        'fadeIn': false
        }
        this.handleChange= this.handleChange.bind(this)
       
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
       
    
        fetch('http://localhost:4000' + '/channels/mychannel/chaincodes/bas2?peer=peer0.org1.example.com&fcn=query&args=%5B%22'+this.state.token+'%22%5D', config)
          .then(response =>  response.json() )
          .then((response) => this.setState({ 'items' : response }));
          
    
      }

      handleChange(e) {
        this.setState({token: e.target.value});
      }
    
      handleSubmit() {
        this.fetchData();
    
      }
    render() {
        var query = JSON.stringify(this.state.items)
        var dub = JSON.stringify(query)
        var parse = JSON.parse(query)
        
        const buttonStyle = { margin: '20px' };
        const feildStyle = { margin: '50px' };
        const inputStyle ={ height: '35px', width: '400px'};
       return (
          <div  style={{ margin: 'auto', height: '500px', width: '400px', textAlign:'left'}}> 
           
      
      <Fieldset legend="Query the blockchain data" legendAttrs={{ className: 'healtheintent-application' }} help="Enter a valid Hash and click Submit" isInline style={feildStyle} >

            <Input type="text" placeholder ="Hash Key" value={this.state.token} onChange={this.handleChange}  style={inputStyle}/>
            
        
            
            
            <div style={{ margin: 'auto', textAlign:'right'}}>
            <Button color="success" size="lg" onClick={this.handleSubmit} text="Submit" variant="action" style={buttonStyle} />
            
            </div>
           </Fieldset>
            
            <ReactJson src={parse} />
            </div>
    
        );
    }
}

export default Query;
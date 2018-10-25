import React, { Component } from 'react';
//import IconEdit from 'terra-icon/lib/icon/IconEdit';

import Button from 'terra-button/lib/Button';

//import InputField from 'terra-form-input/lib/InputField';
import Input from 'terra-form-input';
import Fieldset from 'terra-form-fieldset/lib/Fieldset';
import Card from 'terra-card/lib/Card';
import Layout from 'terra-layout/lib/Layout';
import ApplicationMenuName from 'terra-application-name/lib/ApplicationMenuName';
import img from './cerner.png';
import Image from 'terra-image';
import Alert from 'terra-alert/lib/Alert';
import sha256 from 'crypto-js/sha256';

class Invoke extends React.Component {
    constructor(){
        super();
        this.state ={
          'items': [], 'token' : '', 
          'auth' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDA0OTQyNzIsInVzZXJuYW1lIjoiQ2VybmVyIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NDA0NTgyNzJ9.IvbwhbbcE3sjzvDIzFt18hBkqcHkpR-TFjBxWLWZ430', 
          'key': "", 'id':"",'name' :"", 'age':"", 'weight':"","keys": "",
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
        this.hash=this.hash.bind(this)
        this.handleAll=this.handleAll.bind(this)
      }
    

      fetchData(e) 
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
      handleAll(){
        this.setState({key:sha256(this.state.name+this.state.age+this.state.id+this.state.weight)})
      
        const j = ['"'+this.state.key +'"', '"'+this.state.id +'"', '"'+this.state.name +'"','"'+this.state.age +'"', '"'+this.state.weight +'"']
        this.setState({input: j});
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

          //this.setState({keys: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) +Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) })
          this.setState({key:sha256(this.state.name+this.state.age+this.state.id+this.state.weight)})
      
        }
        hash() {
            //this.setState({keys: sha256("hello"+this.state.name+this.state.age+this.state.id)})
        }
    
      
      handleSubmit() {

        this.fetchData();
      }
  render() {
    const inputStyle ={ height: '35px', width: '400px'};
    const buttonStyle = { margin: '20px' };
    const feildStyle = { margin: '50px' };
    const j = ['"'+this.state.key +'"', '"'+this.state.id +'"', '"'+this.state.name +'"','"'+this.state.age +'"', '"'+this.state.weight +'"']

    const outputStyle = { height: '100px', width: '100px' };
    return (
      <div style={{ border: '1px solid lightGray', backgroundColor: '#2481ca', width: '100%', height: '50px', position: 'relative' }} >
             <ApplicationMenuName
               title="BlockChain Web App"
               accessory={<Image variant="rounded" src={img} height="100px" width="100px" isFluid />}
             />
              <div style={{paddingLeft: '500px'}}>
          
          

          
          <Fieldset legend="Adding a Medical record" legendAttrs={{ className: 'healtheintent-application' }} help="Generate Key and Populate the data before submitting" isInline style ={feildStyle}>
         
          <form>
          <ul>
          
          <label>
          
          <Input type="text" placeholder ="ID" value={this.state.id} onChange={this.handleChangeID} required  style={inputStyle}/>
          </label>
          </ul>
          <ul>
          <label> 
          <Input type="text" placeholder ="Name" value={this.state.name} onChange={this.handleChangeName} required  style={inputStyle}/>
          </label></ul>
          <ul>
          <label>
          <Input type="number" placeholder ="Weight" value={this.state.weight} onChange={this.handleChangeWeight} required label="Enter Weight"  style={inputStyle}/>
          </label></ul>
          <ul>
          <label>
          <Input type="number" placeholder ="Age" value={this.state.age} onChange={this.handleChangeAge}  required label="Enter Age"  style={inputStyle}/>
          </label> </ul> 
          <ul>
          <Input type="text" placeholder ="key" value={this.state.key} onChange={this.handleChangeKey} required  style={inputStyle}/>
          <Button color="primary" size ="lg" value = {j} onClick={this.random} text="Generate" variant="emphasis"  style={buttonStyle} />
          </ul>

          <ul>
          <Button value = {j} onClick ={this.handleChangeInput} text="Populate" variant="emphasis" style={buttonStyle}/>
        
        <Button color="info" size="lg" onClick={this.handleSubmit} text="Submit" variant="action" style={buttonStyle} />
        
          </ul>
          </form>
          </Fieldset>
         


              <Layout style={{ margin: '50px', height: '400px', width: '500px' }} >
      <Card>
      <Card.Body>
        
        Populated Data : {this.state.input}
        <hr style={{
        border: '0 none', borderTop: '1px solid #c8cacb', boxSizing: 'border-box', height: '1px', margin: '0',
      }}
      />
        TxId: {this.state.items}
        
      
      
      </Card.Body>
    </Card>
            
    
  </Layout>
          

          
          
          </div>
     
      </div>
      

    );
  }
}

export default Invoke;

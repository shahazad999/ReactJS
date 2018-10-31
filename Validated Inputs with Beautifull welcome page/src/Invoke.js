import React, { Component } from 'react';
//import IconEdit from 'terra-icon/lib/icon/IconEdit';

import Button from 'terra-button/lib/Button';

//import InputField from 'terra-form-input/lib/InputField';
import Input from 'terra-form-input';
import Fieldset from 'terra-form-fieldset/lib/Fieldset';
import Card from 'terra-card/lib/Card';
import Layout from 'terra-layout/lib/Layout';
import Alert from 'terra-alert/lib/Alert';
import sha256 from 'crypto-js/sha256';
import { Form, Field } from 'react-final-form';

import InputField from 'terra-form-input/lib/InputField';




class Invoke extends React.Component {
    constructor(){
        super();
        this.state ={
          'items': [], 'token' : '', 
          'auth' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDEwMTQ1NjgsInVzZXJuYW1lIjoiQ2VybmVyIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NDA5Nzg1Njh9.vgrIpYsHXLd1o-WoQUduzs0JqZdJCP9JC-hqtyWmGc8', 
          'key': "", 'id': "" ,'name' : "", 'age': "", 'weight':"",
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
       
    
        fetch('http://10.182.68.184:4000' + '/channels/mychannel/chaincodes/medrecord', config)
          .then(response =>  response.text() )
          .then((response) => this.setState({ 'items' : response }));
          
    
      }
    

      handleChangeKey(e) {
        this.setState({key: e.target.value});
      }
      handleChangeID(e) {
        const re = /^[a-zA-z0-9\b]+$/;
        if (e.target.value == '' || re.test(e.target.value)){
          this.setState({id: e.target.value});
        }
        
      }
      handleChangeName(e) {
        const re = /^[a-z A-z\b]+$/;
        if (e.target.value == '' || re.test(e.target.value)){
          this.setState({name: e.target.value});
        }
        
      }
      handleChangeWeight(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value == '' || re.test(e.target.value)){
          this.setState({weight: e.target.value});
        }
      }
      handleChangeAge(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value == '' || re.test(e.target.value)){
          this.setState({age: e.target.value});
        } 
        
      }
      handleChangeInput(e) {
        this.setState({input: e.target.value});
      }
      random() {
        this.setState({key:sha256(this.state.name+this.state.age+this.state.id+this.state.weight)})
      

        //this.setState({key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) +Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) })
      }
    
      
      handleSubmit() {
        this.fetchData();
      }
  render() {
    const re = /^[0-9\b]+$/;
    const inputStyle ={ height: '35px', width: '400px'};
    const buttonStyle = { margin: '20px' };
    const feildStyle = { margin: '50px' };
    const j = ['"'+this.state.key +'"', '"'+this.state.id +'"', '"'+this.state.name +'"','"'+this.state.age +'"', '"'+this.state.weight +'"']

    const outputStyle = { height: '100px', width: '100px' };
    return (
      <div>
              <div  style={{ margin: 'auto', height: '500px', width: '700px', textAlign:'left'}}> 
          
          

          
          <Fieldset legend="Adding a Medical record" legendAttrs={{ className: 'healtheintent-application' }} help="Generate Key and Populate the data before submitting" isInline style ={feildStyle}>
          <ul>
          <Input type="text" placeholder =" Hash key" value={this.state.key} onChange={this.handleChangeKey} required  style={inputStyle}/>
          <Button color="primary" size ="lg" onClick={this.random} text="Generate" variant="emphasis"  style={buttonStyle} />
          </ul>
          
          <ul>
          
          
          <label>
          
          <Input type="text" isInvalid placeholder ="ID" value={this.state.id} onChange={this.handleChangeID} required  style={inputStyle}/>
          </label>
          </ul>
          <ul>
          <label> 
          <Input type="text" placeholder ="Name" value={this.state.name} onChange={this.handleChangeName} required  style={inputStyle}/>
          </label></ul>
          <ul>
          <Input label="Name" placeholder ="Weight" value={this.state.weight} onChange={this.handleChangeWeight} required label="Enter Weight"  style={inputStyle}/>
          
          
          </ul>
          
          <ul>
          <label>
          <Input type="text" placeholder ="Age" value={this.state.age} onChange={this.handleChangeAge}  required label="Enter Age"  style={inputStyle}/>
          </label> </ul>           
          <ul>
          <Button value = {j} onClick ={this.handleChangeInput} text="Populate" variant="emphasis" style={buttonStyle}/>
        
        <Button color="info" size="lg" onClick={this.handleSubmit} text="Submit" variant="action" style={buttonStyle} />
        
          </ul>

          </Fieldset>
         
          <ul>
          <InputField  inputid="Name" label ="Name" type="number" placeholder ="Name" required  style={inputStyle} error ="enter a valdi number"/>
          
          </ul>

              <Layout style={{ margin: '50px', height: '400px', width: '500px' }} >
      <Card>
      <Card.Body>
        
        Populated Data : {this.state.input}+ {j}
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

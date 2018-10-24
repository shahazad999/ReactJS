import React, { Component } from 'react';
import Input from 'terra-form-input';
import Fieldset from 'terra-form-fieldset/lib/Fieldset';
import Card from 'terra-card/lib/Card';
import Layout from 'terra-layout/lib/Layout';
import Button from 'terra-button/lib/Button';
import SelectField from 'terra-form-select/lib/SelectField';
import Select from 'terra-form/lib/Select';
import Radio from 'terra-form-radio/lib/Radio'


class Update extends React.Component {
    constructor(){
        super();
        this.state ={
          'items': [], 'token' : '', 
          'auth' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDAyMjIxNzUsInVzZXJuYW1lIjoiQ2VybmVyIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NDAxODYxNzV9.PUrfG2ZUn2-OY8j28UE-nvVLIkiyNGzH_Rs1eqgpDgA', 
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

    render() {
        const j = ['"'+this.state.key +'"', '"'+this.state.id +'"', '"'+this.state.name +'"']
        const inputStyle ={ height: '35px', width: '400px'};
        const buttonStyle = { margin: '20px' };
        const feildStyle = { margin: '50px' };
        return (
        <div>    
        <Fieldset legend="Update a Medical record" legendAttrs={{ className: 'healtheintent-application' }} help="Populate the data with valid key before submitting" isInline style ={feildStyle}>
            <ul>
            <Input type="text" placeholder ="key" value={this.state.key} onChange={this.handleChangeKey} required  style={inputStyle}/>
            </ul>
            <ul>
            <Input type="text" placeholder ="value" value={this.state.id} onChange={this.handleChangeID} required  style={inputStyle}/> 
            </ul>
     
            <ul>
            <Radio id="first" labelText="Select" name="multiple-group" defaultChecked />
            <Radio id="first-inline" labelText="Name" onChange={this.handleChangeName} value ="name" name="multiple-group" isInline />
            <Radio id="second-inline" labelText="Age" onChange={this.handleChangeName} value ="age" name="multiple-group" isInline/>
            <Radio id="third-inline" labelText="Weight" onChange={this.handleChangeName} value ="weight" name="multiple-group" isInline/>
            </ul>
            <ul>
            <Button value = {j} onClick ={this.handleChangeInput} text="Populate" variant="emphasis" style={buttonStyle}/>
            <Button color="info" size="lg" onClick={this.handleSubmit} text="Submit" variant="action" style={buttonStyle} />
            </ul>
        </Fieldset>

          
          <Layout style={{ margin: '50px', height: '400px', width: '500px' }} >
          <Card>
          <Card.Body>
            
            Populated Data : {this.state.input}
            <hr style={{ border: '0 none', borderTop: '1px solid #c8cacb', boxSizing: 'border-box', height: '1px', margin: '0', }}/>
            TxId: {this.state.items}
            
          
          
          </Card.Body>
        </Card>
        </Layout>
          

          </div>
        );
    }
}
/*  
    <Select placeholder="Select a color" value={this.state.name} onChange={this.handleChangeName} style={{ maxWidth: '300px' }}>
        <Select.Option value="name" display="Name" />
        <Select.Option value="age" display="Age" />
        <Select.Option value="weight" display="Weight" />
    </Select>
 */

export default Update;
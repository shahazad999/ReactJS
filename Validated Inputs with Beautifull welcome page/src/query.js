import React, { Component } from 'react';
import Card from 'terra-card/lib/Card';
import Input from 'terra-form-input';
import Fieldset from 'terra-form-fieldset/lib/Fieldset';
import Button from 'terra-button/lib/Button';
import ItemView from 'terra-clinical-item-view/lib/ItemView';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import Layout from 'terra-layout/lib/Layout';

class Query extends React.Component {

    constructor(){
        super();
        this.state ={
          'items': [], 'token' : '',  'id': '',
          'auth' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDEwMTQ1NjgsInVzZXJuYW1lIjoiQ2VybmVyIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NDA5Nzg1Njh9.vgrIpYsHXLd1o-WoQUduzs0JqZdJCP9JC-hqtyWmGc8', 
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
       
    
        fetch('http://10.182.68.184:4000' + '/channels/mychannel/chaincodes/medrecord?peer=peer0.org1.example.com&fcn=queryMedicalRecord&args=%5B%22'+this.state.token+'%22%5D', config)
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
        const buttonStyle = { margin: '20px' };
        const feildStyle = { margin: '50px' };
        const inputStyle ={ height: '35px', width: '400px'};
        const display1 = <ItemView.Display icon={<IconPerson />} text={this.state.items.name} />;
        const display20 = <ItemView.Display text="Patent ID: " />;
        const display2 = <ItemView.Display text={this.state.items.id} />;
        const display21 =[display20, display2]
        const display30 = <ItemView.Display text="Name: " />;
        const display3 = <ItemView.Display text={this.state.items.name} />;
        const display31 =[display30, display3]
        const display40 = <ItemView.Display text="Weight:" />;
        const display4 = <ItemView.Display text={this.state.items.weight} />;
        const display41 =[display40, display4]
        const display50 = <ItemView.Display text="Age: " />;
        const display5 = <ItemView.Display text={this.state.items.age} />;
        const display51 =[display50, display5]
        const displays = [display1, display21, display31, display41, display51];
        return (
          <div  style={{ margin: 'auto', height: '500px', width: '400px', textAlign:'left'}}> 
           
      
      <Fieldset legend="Query a Medical record" legendAttrs={{ className: 'healtheintent-application' }} help="Enter a valid Hash and click Submit" isInline style={feildStyle} >

            <Input type="text" placeholder ="Hash Key" value={this.state.token} onChange={this.handleChange}  style={inputStyle}/>
            
        
            
            
            
            <Button color="success" size="lg" onClick={this.handleSubmit} text="Submit" variant="action" style={buttonStyle} />
            </Fieldset>
            <Layout style={{ margin: '50px', height: '400px', width: '400px' }} >
      <Card>
      <Card.Body isContentCentered>
      <ItemView displays={displays}/>
      </Card.Body>
    </Card>
            
    
  </Layout>

            
    
            

            </div>
    
        );
    }
}

export default Query;
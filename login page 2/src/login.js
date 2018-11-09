import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'terra-button/lib/Button';
import Card from 'terra-card/lib/Card';
import Fieldset from 'terra-form-fieldset/lib/Fieldset';
import Input from 'terra-form-input';
import ApplicationMenuName from 'terra-application-name/lib/ApplicationMenuName';
import Image from 'terra-image';
import Layout from 'terra-layout/lib/Layout';
import App from './App';
import img from './cerner.png';
import Index from './index';
import Query from './query';
import { ApplicationMenuUtility, UtilityUtils } from 'terra-application-utility/lib/ApplicationUtility';
//import Alert from 'terra-alert';



class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            'username': '', 'password':'' , error : false
        }
        this.handleChangeUsername= this.handleChangeUsername.bind(this)
        this.handleChangePassword= this.handleChangePassword.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        
        this.handleLogout= this.handleLogout.bind(this)
    }
    handleChangeUsername(e) {
        this.setState({username: e.target.value});
    }
    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }
    handleSubmit(){
        const { username, password } = this.state;
        
        if (!(username === 'payer101' && password === 'blockchain')) {
            this.setState({ error: false }) 
            alert("Invalid PayerID or Password")
        
        }
        if ((username === 'payer101' && password === 'blockchain')) {
            this.setState({ error: true }) 
        
        }
        
    }
    handleLogout() {
        this.setState({error : false})
    }

    render() {
        
        const inputStyle ={ height: '35px', width: '300px'};
        const buttonStyle = { margin: '20px' };
        const buttonStyle2 = { float : 'right'  };
        const feildStyle = { width: '100%', textAlign: 'right'  };
        const error = this.state.error;
        const logoutStyle = { textAlign: 'left', paddingLeft: '1100px', float: 'right'}
        let button;

    
        if (error) {
            button =   <div>  <div style={{ border: '1px solid lightGray', backgroundColor: '#2481ca', width: '100%', height: '50px', position: 'relative', margin: 'auto' }} >
       
            <ApplicationMenuName
               title="CernChain"
               accessory={<Image variant="rounded" src={img} height="100px" width="100px" isFluid />}
             />
               
                
                
             </div>
            
             
            <div style = {feildStyle}> 
            <h3 >Welcome Payer101</h3>
            
            </div>
            <div style = {buttonStyle2}> 
            
            <Button  onClick={this.handleLogout} text="Log Out" variant="action" style={buttonStyle2} />
            
            </div>
                
                <div  style={{ margin: 'auto', height: '500px', width: '500px', textAlign:'left', position:'relative'}}> 
             <Query />
                </div>
                </div>
        } else {
            button = <div style={{  backgroundColor: '#2481ca', width: '100%', height: '50px', position: 'relative' }} >
            <ApplicationMenuName
              title="CernChain"
              accessory={<Image variant="rounded" src={img} height="100px" width="100px" isFluid />}
            />                <div style={{ backgroundColor: '#55d851', width: '100%', height: '5px', position: 'relative', margin: 'auto' }} >
            </div>
                    <div style={{ height: '60px', width: '300px', paddingLeft: '4px',position: 'absolute' }}>
       
        </div>
            <div  style={{ margin: 'auto', height: '500px', width: '400px', textAlign:'left'}}> 
           
               <App/>
                <Card>
                    
                    <Card.Body  >
                    <ul>
                    <label>
                    <Input type="text" placeholder ="PayerID" value={this.state.username} onChange={this.handleChangeUsername} required  style={inputStyle}/>
                    </label>
                    </ul>
                    <ul>
                    <label>
                    <Input type="password" placeholder ="Password" value={this.state.password} onChange={this.handleChangePassword} required  style={inputStyle}/>
                    </label>
                    </ul>
                <div style={{ margin: 'auto', textAlign:'center'}}>
                <Button  onClick={this.handleSubmit} text="Submit" variant="action" style={buttonStyle} />
                    
                </div>
                    
                    </Card.Body>
                </Card>
               
               
                </div>
            </div>
        }
      

      return (
         <div>
             {button}
         </div>

      );
    }
}
export default Login;
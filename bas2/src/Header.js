import React, { Component } from 'react';
import ApplicationMenuName from 'terra-application-name/lib/ApplicationMenuName';
import Image from 'terra-image';

import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Button from 'terra-button/lib/Button';
import IconHouse from 'terra-icon/lib/icon/IconHouse';
import img from './cerner.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
 
    const buttonStyle = { margin: '1px', float: 'right', height:'45px' };
    const buttonStyle2 = { margin: '1px', float: 'right', height:'45px', width: '200px', textAlign: 'left'};
    
  return(
    <div style={{ border: '1px solid lightGray', backgroundColor: '#2481ca', width: '100%', height: '50px', position: 'relative', }} >
   <ApplicationMenuName
          title={<div style={{float: 'right'}}>
           
          <a href="/#query" target ="_blank" style={{position: "relative"}}><Button text="Search Blockchain" variant="emphasis" icon={<IconSearch />} style={buttonStyle2} /></a>
            
         <a href="/"><Button text="Home" variant="emphasis" icon={<IconHouse />} style={buttonStyle2} /></a>
  
         </div>}
          accessory={<div><Image variant="rounded" src={img} height="100px" width="100px" isFluid />
            </div> }
       
          />
     
        

       
      
           
       
  

</div>
  );
  }
}

export default Header;

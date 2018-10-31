import React, { Component } from 'react';
import { ApplicationTabs } from 'terra-application-links/lib/ApplicationLinks';
import ApplicationMenuName from 'terra-application-name/lib/ApplicationMenuName';
import NavigationLayout from 'terra-navigation-layout/lib/NavigationLayout';
import Image from 'terra-image';
import Invoke from './Invoke';
import Query from './query'
//import Header from './header';
import Home from './Home';
import Update from "./update";
import { MemoryRouter, withRouter } from 'react-router-dom';
import Markdown from 'terra-markdown';
import ToggleButton from 'terra-toggle-button';
import ConfigReadMe from 'terra-navigation-layout/lib/terra-dev-site/doc/example/NavigationLayoutStandardConfig.md';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Button from 'terra-button/lib/Button';
import IconHouse from 'terra-icon/lib/icon/IconHouse';
import ActionHeader from 'terra-action-header/lib/ActionHeader';
import img from './cerner.png';
import ApplicationHeaderLayout from 'terra-application-header-layout/lib/ApplicationHeaderLayout';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

var applicationLinkConfig = [{ path: '/#invoke', text: 'Invoke' }, { path: '/#query', text: 'Query' }, { path: '/#update', text: 'update' }];

class App extends Component {
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
           
          <a href="/#query" target ="_blank"><Button text="Search Medical Record" variant="emphasis" icon={<IconSearch />} style={buttonStyle} /></a>
            
          <a href="/#update" target ="_blank"> <Button text="Update Medical Record" variant="emphasis" icon={<IconEdit />} style={buttonStyle} /></a>
      
      <a href="/#invoke" target ="_blank"><Button text="Add Medical Record" variant="emphasis" icon={<IconAdd />} style={buttonStyle} /></a>
      <a href="/"><Button text="Home" variant="emphasis" icon={<IconHouse />} style={buttonStyle2} /></a>
           
         </div>}
          accessory={<div><Image variant="rounded" src={img} height="100px" width="100px" isFluid />
            </div> }
       
          />
     
        

       
      
           
       
  

</div>
  );
  }
}

export default App;

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
    const config = {

      menu:{
        '/': {
          path: '/',
          component: {
            tiny: {
              componentClass: Home,
            },
            small: {
              componentClass: Home,
            },
          },
        },
        '/#invoke': {
          path: '/#invoke',
          component: {
            default: {
              componentClass: Invoke,
            },
          },
        },
        '/#query': {
          path: '/#query',
          component: {
            default: {
              componentClass: Query,
            },
          },
        },
      },
      content: {
        '/#invoke': {
          path: '/#invoke',
          component: {
            default: {
              componentClass: Invoke,
            },
          },
        },
     
        '/#query': {
          path: '/#query',
          component: {
            default: {
              componentClass: Query,
            },
          },
        },
        '/#update': {
          path: '/#update',
          component: {
            default: {
              componentClass: Update,
            },
          },
        },
      
    },
    };

      
  return(
    <div style={{ border: '1px solid lightGray', backgroundColor: '#2481ca', width: '100%', height: '50px', position: 'relative', }} >
   <ApplicationMenuName
          title="BlockChain"
          accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
        />
     
        <nav>
        <a href="/#invoke">Invoke</a>
<a href="/#query">Query</a>
<a href="/#update">Update</a>
        </nav>
  

</div>
  );
  }
}

export default App;

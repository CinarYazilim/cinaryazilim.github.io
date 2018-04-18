import React, { Component } from 'react';
import Menu from './parts/Menu.js';
import Footer from './parts/Footer.js';

import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Services from './pages/Services.js';

class App extends Component {
  componentDidMount(){
      window.$.holdReady( false );
  }

  render() {
      return [
            <Menu key="menu"/>,
            <Home key="home"/>,
            <Contact/>,
            <Footer key="footer"/>
      ];
  }
}

export default App;
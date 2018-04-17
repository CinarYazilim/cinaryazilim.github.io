import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Menu from './parts/Menu.js';
import Footer from './parts/Footer.js';

import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Services from './pages/Services.js';

const HomePage = () => (
    <Home key="home"/>
);

const ServicesPage = () => (
    <Services key="services"/>
);


class App extends Component {
  componentDidMount(){
      window.$.holdReady( false );
  }

  render() {
      return [
          <Menu key="menu"/>,
          <Router key="router">
              <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/services" component={ServicesPage}/>
              </div>
          </Router>,
          <Contact/>,
          <Footer key="footer"/>
      ];
  }
}

export default App;
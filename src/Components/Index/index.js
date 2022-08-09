import React , { Component } from 'react';

import Home from '../Home';
import About from '../About';
import Profile from '../Profile';
import Portfolio from '../Portfolio';
import SocialMedia from '../SocialMedia';
import Work from '../Work';
import Footer from '../Footer';

class Index extends Component {
  render() {
    return (
      <div>
          <Home></Home>
          <Work></Work>
          <Portfolio></Portfolio>
          <Profile></Profile>
          <About></About>
          <SocialMedia></SocialMedia>
          <Footer></Footer>
      </div>
    )
  }
}

export default Index;
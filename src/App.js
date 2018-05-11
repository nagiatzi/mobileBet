import React, { Component } from 'react';
import Hero from './components/hero';
import Body1 from './components/body1';
import Body2 from './components/body2';
import Banner from './components/banner';
import Form from './components/form';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Hero />
      <Body1 />
      <Banner />
      <Body2 />
      <Form />
      <Footer />
      </div>
    );
  }
}

export default App;

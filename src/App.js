import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Checklist from './components/Checklist';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Checklist />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Checklist from './components/Checklist';
import Footer from './components/Footer';
/**
 * 
 * A movie checklist that is vertically and horizontally centered on a page with the following list of items:
 * Star Wars Episode IV – A New Hope
 * Star Wars Episode V – The Empire Strikes Back 
 * Star Wars Episode VI – Return of the Jedi 
 * Star Wars Episode I – The Phantom Menace 
 * Star Wars Episode II – Attack of the Clones 
 * Star Wars Episode III – Revenge of the Sith 
 * Star Wars Episode VII – The Force Awakens
 * If any of above checklist items is checked then the text must be grayed out Add the following checklist item that is not editable:
 * Star Wars Episode IX


To build this web page use current framework technologies and inline styles are prohibited.
 */


class App extends Component {
  render() {
    return (
      <div>
      {/* Header */}
      <Header/>
      {/* Checklist */}
      <Checklist/>
      {/* Footer */}
      <Footer/>

      </div>
    );
  }
}

export default App;

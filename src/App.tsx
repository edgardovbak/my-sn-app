import * as React from 'react';
import './App.css';

import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;

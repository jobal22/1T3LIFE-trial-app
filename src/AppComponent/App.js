import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from '../images/logo.png';
import MYPDF from '../Files/GCFile.pdf';
import Menu from '../MenuComponent/Menu';
import GoodNews from '../GoodNewsComponent/GoodNews';

import STORE from '../store.js'
import './App.css';

export default class App extends Component {

  renderRoutes() {
    return (
      <Switch>
        <Route exact path='/' component={Menu}/>
        <Route exact path='/goodnews' component={GoodNews}/>
      </Switch>
    )
  }

  render() {
    const {files} = STORE;
    console.log('look here', files)
    return (
      <div className='App'>
        <nav className="App__nav">
          <Link className="navLink" to={"/"}>
            <img className='logo img' src={logo} alt='Logo'/>
          </Link>
        </nav>
        <main className='main'>
          {this.renderRoutes()}
        </main>
        <footer className='App__footer'>
          <p className='footerText'>To God be the glory!</p>
          <p className='footerText1'>All the handouts on 1T3Life.org are free and are intended for encouragement and educational purposes.</p>
        </footer>
      </div>
    )
  }
}

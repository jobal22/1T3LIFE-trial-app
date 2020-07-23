import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from '../images/logo.png';
import Menu from '../MenuComponent/Menu';
import GoodNews from '../PDFComponent/PDF';
import Popup from '../PopupComponent/Popup';
import STORE from '../store.js';
import "animate.css/animate.min.css";
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: true
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  renderRoutes() {
    return (
      <Switch>
        <Route exact path='/' component={Menu}/>
        <Route exact path='/:pdfId' component={GoodNews}/>
      </Switch>
    )
  }

  render() {
    const {files} = STORE;
    return (
      <div className='App'>
        <div className='AppNavDiv'>
        <nav className="App__nav header-w is-scrolling">
          <Link className="navLink" to={"/"}>
            <img className='logo img headtitl' src={logo} alt='Logo'/>
          </Link>
          <Link className="navLink" to={"/"}>
            <h1 className='logoTitle headtitle'>1T3 LIFE</h1>
          </Link>
          <hr className='hrHead'></hr>
        </nav>
        </div>
        <main className='main'>
          {this.renderRoutes()}
          {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </main>
        <footer className='App__footer'>
          <p className='footerText'>To God be the glory!<br></br>
          All the handouts on 1T3Life.org are free and are intended for encouragement and educational purposes.</p>
        </footer>
      </div>
    )
  }
}

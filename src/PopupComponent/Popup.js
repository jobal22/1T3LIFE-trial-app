import React, { Component } from 'react';
import logo from '../images/logo.png';
import './Popup.css';

export default class PopUp extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <header>
            <img className='BigLogo' src={logo} alt='Logo'/>
          </header>
          <main className='MainPU'>
            <p className='PUP'><b>1T3 Life</b>: Aiming for the glory of God through the grace of the gospel by practicing living a 1 Timothy 3 life in the home, in the church and in the world.</p>
            <p className='PUP'>Resources: All the handouts on 1T3Life.org are free and are intended for encouragement and educational purposes.</p>
          </main>
            <button className='ClosePU' onClick={this.props.closePopup}>Close</button>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import logo from '../images/logo.png';
import MYPDF from '../Files/GCFile.pdf';
import STORE from '../store.js'
import './App.css';

export default class App extends Component {
  render() {
    const {files} = STORE;
    console.log('look here', files)
    return (
      <div className='App'>
        <nav className="App__nav">
          <img className='logo img' src={logo} alt='Logo'/>
        </nav>
        <main className='main'>
          <div className='App__div'>
            <p>1T3 Life: Aiming for the glory of God through the grace of the gospel by practicing living a 1 Timothy 3 life in the home, in the church and in the world.</p>
            <p>Resources: All the handouts on 1T3Life.org are free and are intended for encouragement and educational purposes.</p>
          </div>
          <div className='trialDL'>
            <p className='DLTitle'>The Good News</p>
            <a className='DL'href={MYPDF} download='GCFile.pdf'>(Download PDF)</a>
          </div>
          <div className='trialDL'>
            <p className='DLTitle'>A way to share The Good News</p>
            <a className='DL'href={MYPDF} download='GCFile.pdf'>(Download PDF)</a>
          </div>          
          <div className='trialDL'>
            <p className='DLTitle'>The Christian Life</p>
            <a className='DL'href={MYPDF} download='GCFile.pdf'>(Download PDF)</a>
          </div>          
          <div className='trialDL'>
            <p className='DLTitle'>Growing Instructions</p>
            <a className='DL'href={MYPDF} download='GCFile.pdf'>(Download PDF)</a>
          </div>          
          <div className='trialDL'>
            <p className='DLTitle'>An Atlas for Life</p>
            <a className='DL'href={MYPDF} download='GCFile.pdf'>(Download PDF)</a>
          </div>          
          <div className='trialDL'>
            <p className='DLTitle'>A Discipleship Atlas</p>
            <a className='DL'href={MYPDF} download='GCFile.pdf'>(Download PDF)</a>
          </div>          
          <div className='trialDL'>
            <p className='DLTitle'>A Theology of the Great Commission</p>
            <a className='DL'href={MYPDF} download='GCFile.pdf'>(Download PDF)</a>
          </div>          
          <div className='trialDL'>
            <p className='DLTitle'>The Greact Commission - Simply Explained</p>
            <a className='DL'href={MYPDF} download='GCFile.pdf'>(Download PDF)</a>
          </div>          
          <div className='trialDL'>
            <p className='DLTitle'>1T3 Plan</p>
            <a className='DL'href={MYPDF} download='GCFile.pdf'>(Download PDF)</a>
          </div>          
          <div className='trialDL'>
            <p className='DLTitle'>Reasonable Trust</p>
            <a className='DL'href={MYPDF} download='GCFile.pdf'>(Download PDF)</a>
          </div>          
          <div className='trialDL'>
            <p className='DLTitle'>Additional Resources</p>
            <a className='DL'href={MYPDF} download='GCFile.pdf'>(Download PDF)</a>
          </div>          

        </main>
        <footer className='App__footer'>
          <p className='footerText'>To God be the glory!</p>
          <p className='footerText1'>All the handouts on 1T3Life.org are free and are intended for encouragement and educational purposes.</p>

        </footer>
      </div>
    )
  }
}

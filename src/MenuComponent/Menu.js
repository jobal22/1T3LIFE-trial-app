import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MYPDF from '../Files/GoodNews.pdf';
import GoodNews from '../GoodNewsComponent/GoodNews';
import GNLogo from '../images/GNLogo.png';
import STORE from '../store'
import './Menu.css';

export default class Menu extends Component {
  render() {
    const {files} = STORE;
    console.log('JOBAL', files)
    const pdf = require('../Files/GoodNews.pdf')
    return (
      <div className='Menu__div'>
          {/* <header className='App__div'>
          <p>1T3 Life: Aiming for the glory of God through the grace of the gospel by practicing living a 1 Timothy 3 life in the home, in the church and in the world.</p>
          <p>Resources: All the handouts on 1T3Life.org are free and are intended for encouragement and educational purposes.</p>
        </header> */}
        <div className='Menu'>
          {files.map(f=>
          <div className='trialDL'>
            <a className='DLI'href={MYPDF} download='GCFile.pdf'>
              <img className='DLImg' src={f.image} alt={f.image}/>
            </a>
            <Link className='DLTitle' to='/goodnews'><p>{f.name}</p></Link>
            <a className='DL'href= {f.content} download='GCFile.pdf'>(Download PDF)</a>
          </div>)}
        </div>
      </div>
    )
  }
}

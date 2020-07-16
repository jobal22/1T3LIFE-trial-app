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
        <div className='Menu'>
          {files.map(f=>
          <div className='trialDL'>
            <a className='DLI'href={f.content} download={f.name}>
              <img className='DLImg' src={f.logo} alt={f.image}/>
            </a>
            <Link className='DLTitle' to={`/${f.id}`}><p>{f.name}</p></Link>
            <a className='DL'href= {f.content} download={f.name}>(Download PDF)</a>
          </div>)}
        </div>
      </div>
    )
  }
}

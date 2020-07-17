import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import STORE from '../store'
import './Menu.css';

export default class Menu extends Component {
  render() {
    const {files} = STORE;
    return (
      <div className='Menu__div'>
        <div className='Menu'>
          {files.map(f=>
          <div className='trialDL' key={f.id}>
            <Link className='DLTitle' to={`/${f.id}`}><img className='DLImg' src={f.logo} alt={f.images}/></Link>
          </div>)}
        </div>
      </div>
    )
  }
}

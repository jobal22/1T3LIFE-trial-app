import React, { Component } from 'react';
import STORE from '../store'
import './GoodNews.css'


export default class GoodNews extends Component {
  render() {
    const {files} = STORE;
    const pdfId = this.props.match.params.pdfId;
    const file = files.filter(f => f.id === pdfId)
    const fileImages = file.map(i => i.images)
    function get1DArray(arr){
      var result = new Array();
      for (var x = 0; x < arr.length; x++){
          for (var y = 0; y < arr[x].length; y++){
          result.push(arr[x][y])
          }
      }
      return result
    }
    const fileImage = get1DArray(fileImages)

    return (
      <div>
        {file.map(f=>
        <div className='PDImgDL'>
          <a className='PDDL'href= {f.content} download={f.name}><h1>Click to Download PDF</h1></a>
        </div>
        )}
        {fileImage.map(i=>
        <div className='PDImg'>
          <img className='goodnews Pimg topImg' src={i} alt='Good News 1'/>
        </div>)}
    </div>
    )
  }
}
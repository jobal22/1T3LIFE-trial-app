import React, { Component } from 'react';
import STORE from '../store'
import './PDF.css'


export default class GoodNews extends Component {
  render() {
    const {files} = STORE;
    const pdfId = this.props.match.params.pdfId;
    const file = files.filter(f => f.id === pdfId)
    const fileImages = file.map(i => i.images)
    //Break Up Arrays
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
    const Images = fileImage.map(i=>
      <div className='PDImg'>
        <img className='imgWidth' src={i} alt={i}/>
      </div>)
    //SEARCH FOR EMPTY ARRAYS
    function findEmptyArray(array) {
      if(array.length < 1) {
        return <h1 className='noContent'>Content Coming Soon!</h1>
      } else {
        return <h1>Click to Download PDF</h1>
      }
    }
    const fileContent = findEmptyArray(Images)
    return (
      <div className='PDFComp'>
        {file.map(f=>
        <div className='PDImgDL' key={f.id}>
          <a className='PDDL'href= {f.content} download={f.name}>{fileContent}</a>
        </div>
        )}
        {fileImage.map(i=>
        <div className='PDImg' key={i.id}>
          <img className='imgWidth' src={i} alt={i}/>
        </div>)}
        {/* {Image} */}
    </div>
    )
  }
}
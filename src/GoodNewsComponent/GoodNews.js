import React, { Component, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import GoodNew from '../Files/GoodNews.pdf';
import './GoodNews.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
export default function GoodNews() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={GoodNew}
      onLoadSuccess={onDocumentLoadSuccess}
      className='Document'
      height='100'
    >
      {Array.from(
        new Array(numPages),
        (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ),
      )}
    </Document>
  );
}

// export default class GoodNews extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1,
//   }
 
//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   }
 
//   render() {
//     const { pageNumber, numPages } = this.state;
 
//     return (
//       <div className='GoodNews'>
//         <Document
//           file={GoodNew}
//           onLoadSuccess={this.onDocumentLoadSuccess}
//           className='Document'
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     );
//   }
// }
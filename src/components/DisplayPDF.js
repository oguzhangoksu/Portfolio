import React from 'react';
import { Document, Page } from 'react-pdf-js';
import Resume from '../resume/Oğuzhan-Göksu.pdf';
import Button from 'react-bootstrap/Button';

function DisplayPDF() {
  return (
    <div style={{marginTop:100}}>

      
      <iframe src={Resume} width="100%" height="500px" />
    </div>
  );
}

export default DisplayPDF;
import React, { useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import readXlsxFile from 'read-excel-file';

import './PathTwo.style.css';

const PathTwo = () => {
  const { getRootProps, getInputProps} = useDropzone();
  useEffect(() => {
    const input = document.getElementById('upload-input');
    input.addEventListener('change', () => {
      readXlsxFile(input.files[0]).then((rows) => {
        // eslint-disable-next-line no-console
        console.log(rows);
      });
    });
  }, []);
  return (
    <section className="upload-container">
      <div className="upload-title">Upload Order</div>
      <div className="upload-area">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} id="upload-input"/>
          <p>Drag &apos;n&lsquo; drop some files here, or click to select files</p>
        </div>
      </div>
    </section>
  );
};


export default PathTwo;
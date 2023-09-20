import React from 'react';
import {useDropzone} from 'react-dropzone';

const Drop = (props) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({accept : {'image/jpeg': [], 'image/png': []}});
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="cursor-pointer flex-col items-center p-[20px] w-[90%] rounded border border-black border-dashed bg-gray-200">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  );
}

export default Drop
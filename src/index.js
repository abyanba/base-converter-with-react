import React from 'react';
import ReactDOM from 'react-dom';
import BaseConverter from './BaseConverter';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="body bg-background h-screen flex justify-center items-center font-mono text-lg">
      <BaseConverter />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

import React, { useState } from 'react';
import decValidator from './decValidator';
import binValidator from './binValidator';
import octValidator from './octValidator';
import hexValidator from './hexValidator';

function BaseConverter() {
  const [decValue, setDecValue] = useState('');
  const [binValue, setBinValue] = useState('');
  const [octValue, setOctValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleDecInputChange = (e) => {
    const inputValue = e.target.value;
    if (decValidator(inputValue)) {
      setDecValue(inputValue);
      setBinValue(parseInt(inputValue, 10).toString(2));
      setOctValue(parseInt(inputValue, 10).toString(8));
      setHexValue(parseInt(inputValue, 10).toString(16));
      setErrorMsg('');
    } else if (inputValue === '') {
      setDecValue('');
      setBinValue('');
      setOctValue('');
      setHexValue('');
      setErrorMsg('');
    } else {
      setDecValue('');
      setBinValue('');
      setOctValue('');
      setHexValue('');
      setErrorMsg('Invalid Decimal Input');
    }
  };

  const handleBinInputChange = (e) => {
    const inputValue = e.target.value;
    if (binValidator(inputValue)) {
      setBinValue(inputValue);
      setDecValue(parseInt(inputValue, 2));
      setOctValue(parseInt(inputValue, 2).toString(8));
      setHexValue(parseInt(inputValue, 2).toString(16));
      setErrorMsg('');
    } else if (inputValue === '') {
      setDecValue('');
      setBinValue('');
      setOctValue('');
      setHexValue('');
      setErrorMsg('');
    } else {
      setDecValue('');
      setBinValue('');
      setOctValue('');
      setHexValue('');
      setErrorMsg('Invalid Binary Input');
    }
  };

  const handleOctInputChange = (e) => {
    const inputValue = e.target.value;
    if (octValidator(inputValue)) {
      setOctValue(inputValue);
      setDecValue(parseInt(inputValue, 8));
      setBinValue(parseInt(inputValue, 8).toString(2));
      setHexValue(parseInt(inputValue, 8).toString(16));
      setErrorMsg('');
    } else if (inputValue === '') {
      setDecValue('');
      setBinValue('');
      setOctValue('');
      setHexValue('');
      setErrorMsg('');
    } else {
      setDecValue('');
      setBinValue('');
      setOctValue('');
      setHexValue('');
      setErrorMsg('Invalid Octal Input');
    }
  };

  const handleHexInputChange = (e) => {
    const inputValue = e.target.value;
    if (hexValidator(inputValue)) {
      setHexValue(inputValue);
      setDecValue(parseInt(inputValue, 16));
      setBinValue(parseInt(inputValue, 16).toString(2));
      setOctValue(parseInt(inputValue, 16).toString(8));
      setErrorMsg('');
    } else if (inputValue === '') {
      setDecValue('');
      setBinValue('');
      setOctValue('');
      setHexValue('');
      setErrorMsg('');
    } else {
      setDecValue('');
      setBinValue('');
      setOctValue('');
      setHexValue('');
      setErrorMsg('Invalid Hexadecimal Input');
    }
  };

  return (
    <div className="container mx-auto p-10 gap-6 rounded-2xl text-white bg-gray-900 shadow-lg max-w-2xl">
      <h1 className="text-4xl font-bold mb-4 text-center">BASE CONVERTER</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <label htmlFor="dec-inp" className="text-cyan">Decimal</label>
          <input type="text" id="dec-inp" className="w-full bg-background text-blue rounded-lg text-center" value={decValue} onChange={handleDecInputChange} />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="bin-inp" className="text-green">Binary</label>
          <input type="text" id="bin-inp" className="w-full bg-background text-blue rounded-lg text-center" value={binValue} onChange={handleBinInputChange} />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="oct-inp" className="text-orange">Octal</label>
          <input type="text" id="oct-inp" className="w-full bg-background text-blue rounded-lg text-center" value={octValue} onChange={handleOctInputChange} />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="hex-inp" className="text-pink">Hexadecimal</label>
          <input type="text" id="hex-inp" className="w-full bg-background text-blue rounded-lg text-center" value={hexValue} onChange={handleHexInputChange} />
        </div>
      </div>
      <p className="text-red italic text-center m-3">{errorMsg}</p>
    </div>
  );
}

export default BaseConverter;

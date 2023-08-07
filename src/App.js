import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Record from './Allrecord';
import data from './Data';

function App() {
  return (
    <>
      <Record alldata={data}/>
    </>
  );
}

export default App;

import BasicRoutor from './web/module/BasicRoutor';
import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet';

export default function App() {
  useEffect(() => {
    document.title = '德明財經科技大學USR';
  }, []);
  return (
    <>
      <div className="App">
      <BasicRoutor />
      </div>
    </>
  );
}
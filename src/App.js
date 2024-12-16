import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BasicRoutor from './web/module/BasicRoutor';

export default function App() {
  useEffect(() => {
    document.title = '德明財經科技大學USR';
  }, []);
  
  return (
    <>
      <Helmet>
        <meta name="description" content="Welcome TMUST USR!" />
        <meta property="og:image" content="./logo2.png" />
      </Helmet>
      <div className="App">
      <BasicRoutor />
      </div>
    </>
  );
}
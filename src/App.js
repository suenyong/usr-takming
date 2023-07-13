import React from "react";
import BasicRoutor from './web/module/BasicRoutor';
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <>
      <div className="App">
      <Helmet>
        <title>德明財經科技大學USR</title>
      </Helmet>
      <BasicRoutor />
      </div>
    </>
  );
}
import React from 'react';

import logo from './logo.svg';



function App() {
  return (
    <div className="App">

<div style={{border:'solid,black,20px,max-width=100vw'}}/>
<h1 style={{ color: "red", fontSize: 60 }}>mohamed chairat </h1>

<img src={"/imageInSrc.JPG"} alt="imageInSrc" />
<video width="320" height="240" controls >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
     </video>




      
    </div>
  );
}

export default App;

import React from 'react';
import '../App.css';

function WorkingPage() {
    console.log("page Rendering");

  return(
  <div>
      <div className="navbar">
        <a href="#home" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#services" className="nav-item">Services</a>
        <a href="#contact" className="nav-item">Contact</a>
      </div>

<div className="container">
<div className="box">Box 1</div>
<div className="box">Box 2</div>
<div className="box">Box 3</div>
</div>
</div>
  );
}

export default WorkingPage;
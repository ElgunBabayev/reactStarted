import React from 'react';
import Image from "./images/test.jpg";

function Project() {
  return (
    <div>
      <div className="w3-container w3-padding-32" id="projects">
    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
  </div>

  <div className="w3-row-padding">
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
        <img src={Image} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Brick House</div>
        <img src={Image} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src={Image} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
        <img src={Image} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
  </div>

  <div className="w3-row-padding">
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
        <img src={Image} alt="House" style={{width:"99%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Brick House</div>
        <img src={Image} alt="House" style={{width:"99%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src={Image} alt="House" style={{width:"99%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
        <img src={Image} alt="House" style={{width:"99%"}}/>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Project

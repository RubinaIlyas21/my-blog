import React, { Component } from 'react';
import './modernvalues.css';
import { faEye,faArrowRight,faArrowLeft
  ,faArrowAltCircleLeft,faArrowCircleRight,faAtom,faSun,faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img3 from './4.jpg';


class ModValues extends Component {
  render(){
    return (
      <div>
        <div className="modern-container">
          <h1>modern</h1>
          <p>class for the mass</p>
          <h3>Fabric engine</h3>
          <p>Founded in 2017 fabric engine,
            targets the lower end of the domestic indian market
            providing designs indispensable to the indian decor</p>
            <h6>Read more <FontAwesomeIcon icon={faArrowRight} size="1x" /></h6>
            
     
        </div>
        <div className="img-header"><img src={img3} alt="img3"/></div>
        <h1>values</h1>
        <div className="sec-container">
        <div className="box">
          
          <FontAwesomeIcon icon={faSun} size="10x" /><br></br>
          <FontAwesomeIcon icon={faMinus} size="5x" />
          <h2>Our mission</h2>
          <p>To create beautiful fabrics that inspire and
             empower people across the globe to create 
             aesthetical interior spaces that invoke delighteful experiences.</p>
        </div>
        <div className="box">
        <FontAwesomeIcon icon={faAtom} size="10x" /><br></br>
        <FontAwesomeIcon icon={faMinus} size="5x" />
          <h2 id="font">Ascent Decor</h2>
        </div>
        <div className="box">
        <FontAwesomeIcon icon={faEye} size="10x" /><br></br>
        <FontAwesomeIcon icon={faMinus} size="5x" />

          <h2>Our vision</h2>
          
          <p>To create beautiful fabrics that inspire and
             empower people across the globe to create 
             aesthetical interior spaces that invoke delighteful experiences.</p>

        </div>
        </div>
        
      </div>
    );
  }
    
}

export default ModValues;
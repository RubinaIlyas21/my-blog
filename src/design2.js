import React, { Component } from 'react';
import { faEye,faArrowRight,faArrowLeft
    ,faArrowAltCircleLeft,faArrowCircleRight,faAtom,faSun,faMinus } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  './design2.css';
import img1 from './2.jpg';
import img2 from './3.jpg';
import img3 from './4.jpg';


class Design2 extends Component {
	render() {
		return (
            
			<div className="flex-container">
				<div className="content-wrapper">
                    <img src={img1} alt="img1"/>
                    
                    <div className="text-wrapper">
                    <div className="sticker"><h4>MAY 2020</h4></div>
                        <p>This Bengaluru based home textiles company makes Rs 75 crore turnover.</p>
                        <h5>Read more <FontAwesomeIcon icon={faArrowRight} size="1x" /></h5>
                        
                    </div>
                </div>
                <div className="content-wrapper1">
                    <img src={img2} alt="img2"/>
                    
                    <div className="text-wrapper1">
                    <div className="sticker1"><h4>MAY 2020</h4></div>
                        <p>This Bengaluru based home textiles company makes Rs 75 crore turnover.</p>
                        <h5>Read more <FontAwesomeIcon icon={faArrowRight} size="1x" /></h5>
                        
                    </div>
                </div>
                <div className="content-wrapper2">
                    <img src={img3} alt="img3"/>
                    
                    <div className="text-wrapper2">
                    <div className="sticker2"><h4>MAY 2020</h4></div>
                        <p>This Bengaluru based home textiles company makes Rs 75 crore turnover.</p>
                        <h5>Read more <FontAwesomeIcon icon={faArrowRight} size="1x" /></h5>
                        
                    </div>
                </div>
               
               </div>
               
		);
	}
}

export default Design2;
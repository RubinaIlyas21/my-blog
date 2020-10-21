import React, { Component } from 'react';
import img0 from './1.jpg';
import "./design.css";


class Design extends Component {
	render() {
		return (
			<div className="container">
                <div className="img0">
                    <img src={img0} alt="design" />
                </div>
                <div className="design-attach">
                    <h2>Our <br></br>Capabilities</h2>
                </div>
                <div className="design-container">
                    <div className="inner-design">
                    <h6>03</h6>
            <h3>Design Studio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur 
         adipiscing elit, sed do eiusmod tempor i
         ncididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation
         ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse
         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
         non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum</p>
                    </div>
                
                </div>
			
			</div>
		);
	}
}

export default Design;
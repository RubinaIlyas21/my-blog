
import React, { Component } from 'react';
import './App.css';
import Design from './design';
import Design2 from './design2';
import ModValues from './modernvalues';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ModValues/>
				<Design/>
				<Design2/>		
			</div>
		)
	}
}

export default App;
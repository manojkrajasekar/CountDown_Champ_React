import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Clock from './Clock.jsx';

class Appone extends React.Component {
	constructor(props){
	   super(props);
		this.state = { 
			deadline :'December 25, 2017',
			newDeadLine :''
		}
	}

	changeDeadline() {
		this.setState({deadline:this.state.newDeadLine})
	}

	render() {  
		return (
			<div className="App">
				<div className="App_title">
					Countdown to {this.state.deadline}
				</div>
				<Clock
					deadline ={this.state.deadline}
				/>
				<div>
					<input placeholder="New date"
					onChange={event => this.setState({newDeadLine:event.target.value})}/>
					<button onClick = {() => this.changeDeadline()}>Submit</button>
				</div>
			</div>
		);
		
	}
}

export default Appone;
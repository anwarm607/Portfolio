import React from "react";
import "./MyWorks.css";
import Code from './Code';
import Design from './Design';

class MyWorks extends React.Component {
	constructor() {
    super();
    this.state = {
    	redButtonId: 1
    }
    this.redButton = this.redButton.bind(this);
  }
  redButton (id) {
  	this.setState({redButtonId: id});
  }

	render (){
		return (
			<div className='My-works'>
				<h2>MY WORKS</h2>
				<h3 className='container sub'>Following are the projects I have worked.
				Most of these projects were created while following the curriculum at FreeCodeCamp.com except Photoshop Design</h3>
				<div className='buttons'>
					<button className={this.state.redButtonId === 1? 'code sh' : 'code'} onClick={() => this.redButton(1)}>&lt;CODE /&gt;</button>
					<button className={this.state.redButtonId === 2? 'design sh' : 'design'} onClick={() => this.redButton(2)}><i class="fas fa-paint-roller" /> DESIGN</button>
				</div>
				<div className='projects'>
				{this.state.redButtonId === 1 ?
					<Code />
					: <Design />}
				</div>
			</div>
			)
	}	
}

export default MyWorks;
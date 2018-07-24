import React from "react";
import "./MyWorks.css";

class Code extends React.Component {
	render (){
		return (
			<div className='project_list'>
				<div className='project_container'>
					<div className='left'>
						<div className='text-area'>
							<h6 className='project_heading'>Pomodoro Clock</h6>
							<p className='desc'>Pomodoro Clock is a flexible and easy to use online Pomodoro Technique Timer.</p>
							<p className='uses'>Uses: React, CSS</p>
							<div className='project_buttons'>
								<a className='live-btn' href='https://anwarm607.github.io/pomodoro_clock/' target="_blank" rel="noopener noreferrer">View</a>
								<a className='src-btn' href='https://github.com/anwarm607/pomodoro_clock' target="_blank" rel="noopener noreferrer">Source</a>
							</div>
						</div>
						<div className='image-area'>
							<img className='img1 ' src={require('./img/Projects/Pomo-Clock.png')} alt='project_image' />
						</div>
					</div>
					<div className='right'>
						<div className='image-area'>
							<img className='img2' src={require('./img/Projects/Calculator.png')} alt='project_image' />
						</div>
						<div className='text-area'>
							<h6 className='project_heading'>React Calculator</h6>
							<p className='desc'>A beautiful and simple online Calculator, Quick and Easy, made with Reactjs.</p>
							<p className='uses'>Uses: React, CSS</p>
							<div className='project_buttons'>
								<a className='live-btn' href="https://anwarm607.github.io/Calculator/" target="_blank" rel="noopener noreferrer">View</a>
								<a className='src-btn' href="https://github.com/anwarm607/Calculator" target="_blank" rel="noopener noreferrer">Source</a>
							</div>
						</div>
					</div>
				</div>

				<div className='project_container_2'>
					<div className='left'>
						<div className='text-area'>
						<h6 className='project_heading'>My To-Do</h6>
						<p className='desc_2'>A simple task managment App. It helps to manage various tasks and to track that tasks.</p>
						<p className='uses'>Uses: React, HTML, CSS</p>
						<div className='project_buttons'>
								<a className='live-btn' href="https://anwarm607.github.io/my_to-do/" target="_blank" rel="noopener noreferrer">View</a>
								<a className='src-btn' href="https://github.com/anwarm607/my_to-do" target="_blank" rel="noopener noreferrer">Source</a>
						</div>
						</div>
						<div className='image-area'>
							<img className='img1' src={require('./img/Projects/my-todo.png')} alt='project_image' />
						</div>
					</div>
					<div className='right'>
						<div className='image-area'>
							<img className='img2' src={require('./img/Projects/RQM.png')} alt='project_image' />
						</div>
						<div className='text-area'>
							<h6 className='project_heading'>Random Quote</h6>
							<p className='desc'>This random quote generator App will generates quotes of 'Success' by various sucessfull peoples.</p>
							<p className='uses'>Uses: React, CSS</p>
							<div className='project_buttons'>
								<a className='live-btn' href='https://anwarm607.github.io/quotes_gen/' target="_blank" rel="noopener noreferrer">View</a>
								<a className='src-btn' href='https://github.com/anwarm607/quotes_gen' target="_blank" rel="noopener noreferrer">Source</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
}
export default Code;
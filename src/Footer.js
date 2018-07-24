import React from "react";
import "./Footer.css";

class Footer extends React.Component {
	render () {
		return (
			<div className='footer'>
			<h1 className='footer_header'>Contact Me</h1>
			<p className='footer_sub'>Get in touch with me  <span className='highlight'> anwarm607@gmail.com</span></p>
			<p className='or'>Or find me on: </p>
			<ul className="centered">
			<a href="https://github.com/anwarm607/" target="_blank" rel="noopener noreferrer"><li><i className="fab fa-github-alt" />  GitHub</li></a>
			<a href="https://www.linkedin.com/in/anwarm607/" target="_blank" rel="noopener noreferrer"><li><i className="fab fa-linkedin" />  LinkedIn</li></a>
			<a href="https://dribbble.com/anwarm607" target="_blank" rel="noopener noreferrer"><li><i className="fab fa-dribbble" />  Dribble</li></a>
			<a href="https://codepen.io/anwarm607/" target="_blank" rel="noopener noreferrer"><li><i className="fab fa-codepen" />  CodePen</li></a>
			</ul>
			<div className='react'>
			<p>Made with <i className='fab fa-react rect'></i> at Home</p>
			</div>
			</div>
			)
	}
}
export default Footer;
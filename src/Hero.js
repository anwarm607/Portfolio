import React from "react";
import "./Hero.css";

const isSmoothScrollSupported = ((document || {}).documentElement || {}).style
  ? 'scrollBehavior' in document.documentElement.style
  : false;


const scrollToElement = (element) => {
  if (element) {
    if (isSmoothScrollSupported) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      element.scrollIntoView();
    }
  }
};

class Hero extends React.Component {
  
	scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  	}

	render (){


		return (
			<div className="hero">
			<div className="Nav-bar">
			<div className='my-container'>
				<ul className="nav navbar-right">
				<li className="home">
        		<a href="#home" className="card-link" onClick={(e) => this.scrollToPage('.hero')}>Home</a>
      			</li>
      			<li className="skills">
        		<a href="#skills" onClick={(e) => this.scrollToPage('.my-skills')}>Skills</a>
      			</li>
      			<li className="works">
        		<a href="#works" onClick={(e) => this.scrollToPage('.My-works')}>Works</a>
      			</li>
      			<li className="contact">
        		<a href="#contact" onClick={(e) => this.scrollToPage('.footer')}>Contact</a>
      			</li>
      			<hr />
				</ul>
			</div>
			</div>
			<div className="header">
				<h1><span className="color">H</span>I<span className="color">I</span>AM<span className="color">M</span>OHAMED<span className="color">A</span>NWAR</h1>
			<small>#Web_Developer</small><small>#Mechanical_Engineer</small><small>#Computer_freak</small>
			</div>
			<div class="scroll-downs">
  				<div class="mousey">
    				<div class="scroller"></div>
  				</div>
			</div>
			</div>
			)
	}
}

export default Hero;
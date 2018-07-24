import React from 'react';
import "./MySkills.css";

class MySkills extends React.Component {

	render (){
		return(
			<div className='my-skills'>
			<h2>My Skills</h2>
			<h3>Here are some of the Frontend development related skills I currently possess.</h3>
			<div>
			<div className='circle'>
			<img src={require('./img/logos/html5.svg')} alt='HTML5' className='html5'/>
			<img src={require('./img/logos/css3.svg')} alt='CSS3' className='css3' />
			<img src={require('./img/logos/javascript.svg')} alt='JS' className='JS' />
			</div>
			<div className='circle-2'>
			<img src={require('./img/logos/React.svg')} alt='React' className='React' />
			<img src={require('./img/logos/Photoshop_3.png')} alt='Photoshop' className='Photoshop' />
			<img src={require('./img/logos/bootstrap.svg')} alt='Bootstrap' className='Bootstrap' />
			</div>
			<div className='circle-3'>
			<img src={require('./img/logos/github.svg')} alt='Git' className='Git' />
			</div>
			</div>
			</div>
			)
	}

}

export default MySkills;
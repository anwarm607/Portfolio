import React from "react";

class Design extends React.Component {
	render () {
		return (
			<div>
			<div className='project_container'>
					<div className='left'>
						<div className='text-area'>
							<h6 className='project_heading'>T-Shirt Times</h6>
							<p className='desc'>A Web-Design concept of an e-commerce store homepage called T-Shirt Times.</p>
							<p className='uses'>Uses: Photoshop, Icons, Images from Unsplash.com</p>
							<div className='project_buttons'>
								<a className='live-btn' href={require('./img/T-Shirt_Time_full.png')} target="_blank" rel="noopener noreferrer">View</a>
								<a className='src-btn' href={require('./src_ps/T-Shirt_Times.rar')} target="_blank" rel="noopener noreferrer">Source</a>
							</div>
						</div>
						<div className='image-area'>
							<img className='img1 project_image' src={require('./img/Projects/T-Shirt_Time.png')} alt='project_image' />
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default Design;
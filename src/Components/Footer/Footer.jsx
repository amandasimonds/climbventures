import React from 'react';
import './Footer.css';
import video2 from '../../Assets/climbingvideo2.mp4';
import { FiSend } from 'react-icons/fi';

const Footer = () => {
	return (
		<section className="footer">
			<div className="video-div">
				<video
					src={video2}
					loop
					autoPlay
					muted
					type="video/mp4"
				></video>
			</div>

			<div className="sec-content container">
				<div className="contact-div flex">
					<div className="text">
						<small>KEEP IN TOUCH</small>
						<h2>Explore with us</h2>
					</div>
					<div className="input-div flex">
						<input type="text" placeholder="Enter Email Address" />
						<button className="btn flex" type="submit">
							<FiSend className="icon" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;

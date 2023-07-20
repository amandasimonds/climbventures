import React, { useEffect } from 'react';
import './Footer.css';
import video2 from '../../Assets/climbingvideo2.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
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
					<div data-aos="fade-up" className="text">
						<small>KEEP IN TOUCH</small>
						<h2>Explore with us</h2>
					</div>
					<div className="input-div flex">
						<input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
						<button data-aos="fade-up" className="btn flex" type="submit">
							SEND <FiSend className="icon" />
						</button>
					</div>
				</div>
				<div className="footer-card flex">
					<div className="footer-intro flex">
						<div className="logo-div">
							<a href="#" className="logo flex">
								<MdOutlineTravelExplore className="icon" />
								Climbventures.
							</a>
						</div>
						<div data-aos="fade-up" className="footer-paragraph">
							This website was made by{' '}
							<a href="https://amandaxandra.netlify.app/">
								Amanda Simonds
							</a>
							, inspired by{' '}
							<a href="https://www.youtube.com/@IsraTech1">
								IsraTech
							</a>
							. Intended for portfolio purposes. Expedition
							content from{' '}
							<a href="https://themountainguides.com">
								The Mountain Guides
							</a>
							.
						</div>

						<div data-aos="fade-up" className="footer-socials flex">
							<AiOutlineTwitter className="icon" />
							<AiFillYoutube className="icon" />
							<FaTripadvisor className="icon" />
						</div>
					</div>
					<div className="footer-links grid">
						<div data-aos="fade-up" data-aos-duration="3000" className="link-group">
							<span className="group-title">OUR AGENCY</span>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Services
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Insurance
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Agency
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Tourism
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Payment
							</li>
						</div>
						<div data-aos="fade-up" data-aos-duration="3000" className="link-group">
							<span className="group-title">PARTNERS</span>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Bookings
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Rentals
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Hotels
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Trivago
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Tripadvisor
							</li>
						</div>
						<div data-aos="fade-up" data-aos-duration="3000" className="link-group">
							<span className="group-title">ROCK CLIMBING</span>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Lessons
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Equipment
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Gyms
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Kids
							</li>
							<li className="footer-list flex">
								<FiChevronRight className="icon" /> Group
								classes
							</li>
						</div>
					</div>

					<div className="footer-copyright-div flex">
						<small>CLIMBVENTURES WEBSITE THEME</small>
						<small>CREATED BY AMANDA SIMONDS 2023</small>
						<small>INSPIRED BY ISRATECH</small>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;

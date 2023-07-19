import React from 'react';
import './Home.css';
import video from '../../Assets/climbingvideo.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { AiOutlineFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';

const Home = () => {
	return (
		<section className="home">
			<div className="overlay"></div>
			<video src={video} muted autoPlay loop type="video/mp4"></video>

			<div className="home-content container">
				<div className="text-div">
					<span className="small-text">Our Packages</span>
					<h1 className="home-title">Find your adventure</h1>
				</div>
				<div className="card-div grid">
					<div className="destination-input">
						<label htmlFor="city">Search your destination:</label>
						<div className="input flex">
							<input
								type="text"
								placeholder="Enter your city here"
							/>
							<GrLocation className="icon" />
						</div>
					</div>
					<div className="date-input">
						<label htmlFor="date">Select a date:</label>
						<div className="input flex">
							<input type="date" />
						</div>
					</div>
					<div className="price-input">
						<div className="label_total flex">
							<label htmlFor="price">Max price:</label>
							<h3 className="total">$1200</h3>
						</div>
						<div className="input flex">
							<input type="range" min="100" max="1200" />
						</div>
					</div>

					<div className="search-options flex">
						<HiFilter className="icon" />
						<span>MORE FILTERS</span>
					</div>
				</div>
				<div className="home-footer-icons flex">
					<div className="right-icons">
						<AiOutlineFacebook className="icon" />
						<AiFillInstagram className="icon" />
						<FaTripadvisor className="icon" />
						<AiOutlineFacebook className="icon" />
					</div>
					<div className="left-icons">
						<BsListTask className="icon" />
						<TbApps className="icon" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;

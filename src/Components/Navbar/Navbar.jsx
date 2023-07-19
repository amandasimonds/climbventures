import React, { useState } from 'react';
import './Navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

export const Navbar = () => {
	const [active, setActive] = useState('navbar');
	const showNav = () => {
		setActive('navbar active-navbar');
	};

	const hideNav = () => {
		setActive('navbar');
	};
	return (
		<section className="navbar-section">
			<header className="header flex">
				<div className="logo-div">
					<a href="#" className="logo flex">
						<h1>
							Climbventures.
						</h1>
					</a>
				</div>

				<div className={active}>
					<ul className="navlists flex">
						<li className="nav-item">
							<a href="#" className="nav-link">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								About
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								Shop
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								News
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								Contact
							</a>
						</li>
						<button className="btn">
							<a href="#">Book now</a>
						</button>
					</ul>
					<div onClick={hideNav} className="close-navbar">
						<AiFillCloseCircle className="icon" />
					</div>
				</div>

				<div onClick={showNav} className="toggle-navbar">
					<PiDotsNineBold className="icon" />
				</div>
			</header>
		</section>
	);
};

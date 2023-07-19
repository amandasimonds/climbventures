import React from 'react';
import './Main.css';
import mtmoran from '../../Assets/mtmoran.jpg';
import moab from '../../Assets/moab.jpg';
import whitefish from '../../Assets/whitefish.jpeg';
import longspeak from '../../Assets/longspeak.jpg';

import {
	HiOutlineClipboardCheck,
	HiOutlineLocationMarker,
} from 'react-icons/hi';

const data = [
	{
		id: 1,
		imgSrc: longspeak,
		title: 'Longs Peak',
		location: 'Colorado',
		state: 'Colorado',
		difficulty: 'Intermediate',
		price: 800,
		description:
			'The Crown Jewel of Rocky Mountain NP, Longs Peak is one of the most coveted summits in the West. At 14,259 feet above sea level and over 7 miles from the trailhead, this summit will make you earn your views. Sometimes attempted in a single day, Longs is more commonly climbed as an overnight.',
	},
	{
		id: 2,
		imgSrc: mtmoran,
		title: 'Mt. Moran Summit Experience',
		location: 'Grand Teton National Park',
		state: 'Wyoming',
		difficulty: 'Intermediate - Hard',
		price: 2200,
		description:
			'Rising dramatically from Jackson and Leigh Lakes, Mt. Moran is the most striking mountain in the northern Tetons. From Jackson Lake Lodge, it is one of the most picturesque mountains in North America. It is a unique and remote climbing experience. Since there are no maintained trails to the base of the mountain the approach is made by canoe. In early summer we climb the Skillet Glacier, an elegant snow climb leading directly to the summit.',
	},
	{
		id: 1,
		imgSrc: longspeak,
		title: 'Longs Peak',
		location: 'Colorado',
		difficulty: 'Intermediate',
		price: 800,
		description:
			'The Crown Jewel of Rocky Mountain NP, Longs Peak is one of the most coveted summits in the West. At 14,259 feet above sea level and over 7 miles from the trailhead, this summit will make you earn your views. Sometimes attempted in a single day, Longs is more commonly climbed as an overnight.',
	},
	{
		id: 3,
		imgSrc: moab,
		title: 'Moab Classic Climbs',
		location: 'Moab',
		state: 'Utah',
		difficulty: 'Beginner',
		price: 200,
		description:
			'Moab is world renown for its crack climbing. The seventies brought legends like Earl Wiggins, Charlie Fowler, Jay Smith and Kyle Copeland to Moab when it was just a speck of dust on Highway 6 after the uranium boom. These climbers wasted no time and developed routes that are still todays “Moab Classic Crack Climbs.”  Do you have your own hit list?  If not we can assess your ability and put one together for you!',
	},
	{
		id: 4,
		imgSrc: whitefish,
		title: 'Whitefish Day Rock Climbing Adventure',
		location: 'Whitefish',
		state: 'Montana',
		difficulty: 'Intermediate',
		price: 300,
		description:
			'Come explore paths less traveled as you push your limits and seek your own personal adventure.  The Mountain Guides Montana would like to take you back to a simpler time of dirt roads and quiet mountain crags.  Our full day rock climbing trips are based out of our largest and most diverse climbing area.  With more than 500 routes, Stone Hill has something for everyone.',
	},
	{
		id: 5,
		imgSrc: longspeak,
		title: 'Longs Peak',
		location: 'Colorado',
		state: 'Colorado',
		difficulty: 'Intermediate',
		price: 800,
		description:
			'The Crown Jewel of Rocky Mountain NP, Longs Peak is one of the most coveted summits in the West. At 14,259 feet above sea level and over 7 miles from the trailhead, this summit will make you earn your views. Sometimes attempted in a single day, Longs is more commonly climbed as an overnight.',
	},
	{
		id: 6,
		imgSrc: mtmoran,
		title: 'Mt. Moran Summit Experience',
		location: 'Grand Teton National Park',
		state: 'Wyoming',
		difficulty: 'Intermediate - Hard',
		price: 2200,
		description:
			'Rising dramatically from Jackson and Leigh Lakes, Mt. Moran is the most striking mountain in the northern Tetons. From Jackson Lake Lodge, it is one of the most picturesque mountains in North America. It is a unique and remote climbing experience. Since there are no maintained trails to the base of the mountain the approach is made by canoe. In early summer we climb the Skillet Glacier, an elegant snow climb leading directly to the summit.',
	},
	{
		id: 7,
		imgSrc: longspeak,
		title: 'Longs Peak',
		location: 'Colorado',
		difficulty: 'Intermediate',
		price: 800,
		description:
			'The Crown Jewel of Rocky Mountain NP, Longs Peak is one of the most coveted summits in the West. At 14,259 feet above sea level and over 7 miles from the trailhead, this summit will make you earn your views. Sometimes attempted in a single day, Longs is more commonly climbed as an overnight.',
	},
	{
		id: 8,
		imgSrc: moab,
		title: 'Moab Classic Climbs',
		location: 'Moab',
		state: 'Utah',
		difficulty: 'Beginner',
		price: 200,
		description:
			'Moab is world renown for its crack climbing. The seventies brought legends like Earl Wiggins, Charlie Fowler, Jay Smith and Kyle Copeland to Moab when it was just a speck of dust on Highway 6 after the uranium boom. These climbers wasted no time and developed routes that are still todays “Moab Classic Crack Climbs.”  Do you have your own hit list?  If not we can assess your ability and put one together for you!',
	},
	{
		id: 9,
		imgSrc: whitefish,
		title: 'Whitefish Day Rock Climbing Adventure',
		location: 'Whitefish',
		state: 'Montana',
		difficulty: 'Intermediate',
		price: 300,
		description:
			'Come explore paths less traveled as you push your limits and seek your own personal adventure.  The Mountain Guides Montana would like to take you back to a simpler time of dirt roads and quiet mountain crags.  Our full day rock climbing trips are based out of our largest and most diverse climbing area.  With more than 500 routes, Stone Hill has something for everyone.',
	},
];

const Main = () => {
	return (
		<section className="main container section">
			<div className="sec-title">
				<h3 className="title">Most Popular</h3>
			</div>

			<div className="sec-content grid">
				{data.map((item) => {
					return (
						<div key={item.id} className="expedition">
							<div className="image-div">
								<img src={item.imgSrc} alt={item.title} />
							</div>
							<div className="card-info">
								<h4 className="title">{item.title}</h4>
								<span className="location flex">
									<HiOutlineLocationMarker className="icon" />
									<span className="name">
										{item.location}
									</span>
								</span>
								<div className="details flex">
									<div className="difficulty">
										{item.difficulty}
									</div>
									<div className="price">${item.price}</div>
								</div>
								<div className="description">
									{item.description}
								</div>
								<button className="btn flex">
									DETAILS{' '}
									<HiOutlineClipboardCheck className="icon" />
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Main;

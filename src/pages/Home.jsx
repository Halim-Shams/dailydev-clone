import React from 'react';
import Card from '../components/Card';

const Home = () => {
	return (
		<div className='flex flex-col gap-12'>
			<p className='text-2xl font-semibold text-slate-100 mx-2'>Hi, Halim 👋</p>
			<div className='grid grid-cols-3 gap-8'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;

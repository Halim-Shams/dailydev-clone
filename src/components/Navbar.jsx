import React from 'react';
import Searchbox from './Searchbox';
import Avatar from './Avatar';
import Button from './Button';

const Navbar = () => {
	return (
		<div className='z-10 text-white border-b border-slate-700 py-2 pl-4 pr-8 absolute w-full bg-slate-800 flex items-center justify-between'>
			<img
				className='w-28'
				src='https://cdn.prod.website-files.com/5e0a5d9d743608d0f3ea6753/5f1d8b1b9c7814aae6b69044_Daily%20Full%20logo.svg'
				alt='logo'
			/>
			<Searchbox />
			<div className='flex items-center gap-4'>
				<Button text='New post' />
				<Avatar />
			</div>
		</div>
	);
};

export default Navbar;

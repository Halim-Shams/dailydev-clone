import React from 'react';

const Body = ({children}) => {
	return (
		<div className='text-white w-full min-h-screen px-36 pt-24 bg-slate-700'>
			{children}
		</div>
	);
};

export default Body;

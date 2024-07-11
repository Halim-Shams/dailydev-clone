import React from 'react';

const Body = ({children}) => {
	return (
		<div className='text-white w-full max-h-screen px-36 py-24 bg-slate-800 overflow-y-scroll'>
			{children}
		</div>
	);
};

export default Body;

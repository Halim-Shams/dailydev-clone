import React from 'react';

const Button = ({text}) => {
	return (
		<button className='bg-slate-100 text-slate-700 text-[15px] font-semibold px-5 py-2 rounded-xl hover:bg-pink-100'>
			{text}
		</button>
	);
};

export default Button;

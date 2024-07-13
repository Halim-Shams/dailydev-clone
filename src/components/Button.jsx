import React from 'react';

const Button = ({text, color, font, outline}) => {
	return (
		<button
			className={`${
				outline
					? 'bg-transparent border border-slate-100 hover:bg-pink-400/10 hover:shadow-lg hover:shadow-black'
					: 'bg-slate-100'
			} text-slate-${color ? color : '700'} text-[15px] font-${
				font ? font : 'semibold'
			} px-5 py-2 rounded-xl hover:bg-pink-100 transition-all`}>
			{text}
		</button>
	);
};

export default Button;

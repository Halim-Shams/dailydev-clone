import React from 'react';

const ShortcutKey = ({tag}) => {
	return (
		<div className='text-slate-300/70 bg-transparent border border-slate-500 text-[12px] font-mono font-light rounded-lg px-1.5 py-0.5'>
			{tag}
		</div>
	);
};

export default ShortcutKey;

import React from 'react';

const ShortcutKey = ({shortcut}) => {
	return (
		<div className='bg-slate-700/80 border border-slate-500 text-[12px] font-mono font-light rounded-lg px-1.5 py-0.5'>
			{shortcut}
		</div>
	);
};

export default ShortcutKey;

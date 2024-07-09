import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import ShortcutKey from './ShortcutKey';

const Searchbox = () => {
	return (
		<form className='focus:border focus:border-slate-500/50 bg-slate-600 w-[34rem] rounded-2xl overflow-hidden flex items-center gap-3 px-4'>
			<BiSearchAlt className='text-slate-300/70 text-3xl' />
			<input
				className='text-lg text-white bg-transparent outline-none py-2.5 w-full placeholder:text-slate-400'
				type='text'
				placeholder='Search'
			/>
			<div className='flex items-center gap-1'>
				<ShortcutKey shortcut='Ctrl' />
				<p className='text-[12px] font-mono font-light'>+</p>
				<ShortcutKey shortcut='K' />
			</div>
		</form>
	);
};

export default Searchbox;

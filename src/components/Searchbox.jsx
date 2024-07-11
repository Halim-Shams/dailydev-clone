import React, {useState} from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import ShortcutKey from './ShortcutKey';

const Searchbox = () => {
	const [focus, setFocus] = useState(false);

	return (
		<form
			className={`border-2 border-transparent focus-within:border-2 focus-within:border-slate-500/50 bg-slate-600 w-[34rem] rounded-2xl overflow-hidden flex items-center gap-3 px-4 relative`}>
			<BiSearchAlt className='text-slate-300/70 text-2xl absolute' />
			<input
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				className={`text-lg text-white bg-transparent outline-none py-2 ml-9 w-full placeholder:text-slate-400`}
				type='text'
				placeholder={focus ? 'Search posts or ask a question...' : 'Search'}
			/>
			{focus ? null : (
				<div className='flex items-center gap-1'>
					<ShortcutKey shortcut='Ctrl' />
					<p className='text-[12px] font-mono font-light'>+</p>
					<ShortcutKey shortcut='K' />
				</div>
			)}
		</form>
	);
};

export default Searchbox;

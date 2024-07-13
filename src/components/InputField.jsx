import React from 'react';

const InputField = ({placeholder, type, children}) => {
	return (
		<form className='hover:border-l-[3px] hover:border-slate-300 focus-within:border-l-[3px] focus-within:border-y-slate-300 focus-within:border-r-slate-300 focus-within:border-slate-300 border-l-[3px] border border-transparent bg-slate-300/10 flex items-center gap-2 w-full rounded-xl py-2.5 px-4 overflow-hidden'>
			{children}
			<input
				className='bg-transparent w-full outline-none text-slate-100'
				placeholder={placeholder}
				type={type}
			/>
		</form>
	);
};

export default InputField;

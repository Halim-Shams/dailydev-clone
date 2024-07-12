import React from 'react';
import {CiMail} from 'react-icons/ci';

const InputField = () => {
	return (
		<div className='bg-red-100 flex items-center gap-2'>
			<CiMail className='fill-slate-100' />
			<input className='bg-green-100' placeholder='Email' type='text' />
		</div>
	);
};

export default InputField;

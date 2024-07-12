import React from 'react';
import InputField from '../components/InputField';

const Login = () => {
	return (
		<div className='bg-cover bg-center h-screen relative bg-[url("https://images2.alphacoders.com/134/thumb-1920-1349286.png")] overflow-hidden'>
			<InputField />
			<div className='z-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent absolute h-screen w-screen'></div>
		</div>
	);
};

export default Login;

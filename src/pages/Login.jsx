import React from 'react';
import InputField from '../components/InputField';
import {CiMail} from 'react-icons/ci';
import {MdAlternateEmail} from 'react-icons/md';
import Button from '../components/Button';

const Login = () => {
	return (
		<div className='bg-cover bg-center h-screen relative bg-[url("https://images2.alphacoders.com/134/thumb-1920-1349286.png")]'>
			<div className='flex px-40 pt-16'>
				<div className='flex-1 z-20'>
					<div className='w-[28rem] flex flex-col gap-8'>
						<div className='flex flex-col gap-1'>
							<img
								className='w-40'
								src='https://cdn.prod.website-files.com/5e0a5d9d743608d0f3ea6753/5f1d8b1b9c7814aae6b69044_Daily%20Full%20logo.svg'
								alt='logo'
							/>
							<p className='text-4xl text-pink-500 font-semibold w-full'>
								Where developers suffer together
							</p>
							<p className='text-slate-100 text-2xl my-4'>
								We know how hard it is to be a developer. It doesn't have to be.
								Personalized news feed, dev community and search, much better
								than what's out there. Maybe ;)
							</p>
						</div>
						<div className='flex flex-col gap-3'>
							<InputField placeholder='Username' type='text'>
								<MdAlternateEmail className='fill-slate-400 w-5 h-5' />
							</InputField>
							<InputField placeholder='Email' type='email'>
								<CiMail className='fill-slate-300 w-5 h-5' />
							</InputField>
						</div>
						<Button text='Sign up - Free forever ➡️' color='800' font='bold' />
					</div>
				</div>
				<div className='flex-1 z-10 self-start flex items-center gap-2 place-content-end'>
					<p className='text-slate-400'>Already using daily.dev?</p>
					<Button text='Log in' color='300' outline />
				</div>
			</div>
			<div className='bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent absolute inset-0 z-0'></div>
		</div>
	);
};

export default Login;

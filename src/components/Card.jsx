import React from 'react';
import Tag from './Tag';
import Date from './Date';
import {LuMousePointer2} from 'react-icons/lu';

const Card = () => {
	return (
		<div className='bg-slate-600 border-2 border-slate-500/50 rounded-2xl text-slate-100 p-1.5'>
			<div className='p-2.5'>
				<div className='w-8 h-8 bg-slate-700 rounded-full overflow-hidden'>
					<img
						className='w-full h-full object-cover'
						src='https://media.licdn.com/dms/image/C4E03AQH4iSNrs5Ox5Q/profile-displayphoto-shrink_800_800/0/1654417313606?e=2147483647&v=beta&t=VCPgNfXW8mUgvF9SclOzpZwrSm4Hbsqu8UHlHyr7tOE'
						alt='logo'
					/>
				</div>
				<p className='text-xl font-bold leading-tight'>
					How to reduce unused JavaScript in your code?
				</p>
				<div className='flex gap-2 items-center'>
					<Tag tag='#webdev' />
					<Tag tag='#javascript' />
					<Tag tag='+3 tags' />
				</div>
				<Date date='Jul 20' reading_time='6m' />
			</div>
			<div className='bg-slate-700 rounded-xl w-full h-36 overflow-hidden'>
				<img
					className='w-full h-full object-cover'
					src='https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/03be5d99fd3bb1beb9d42c2b16b9ba66?_a=AQAEuiZ'
					alt='post'
				/>
			</div>
		</div>
	);
};

export default Card;

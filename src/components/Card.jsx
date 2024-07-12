import React from 'react';
import Tag from './Tag';
import Date from './Date';
import {IoIosArrowUp, IoIosLink} from 'react-icons/io';
import {CiBookmark} from 'react-icons/ci';
import {IoBookmarkOutline} from 'react-icons/io5';

const Card = () => {
	return (
		<div className='bg-slate-700 border border-slate-500/50 rounded-2xl text-slate-100 px-1.5 py-2 shadow-lg hover:cursor-pointer hover:border-slate-500'>
			<div className='p-2.5 flex flex-col gap-4'>
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
			<div className='flex flex-col gap-3'>
				<div className='bg-slate-700 rounded-xl w-full h-36 overflow-hidden'>
					<img
						className='w-full h-full object-cover'
						src='https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/03be5d99fd3bb1beb9d42c2b16b9ba66?_a=AQAEuiZ'
						alt='post'
					/>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex gap-0.5 items-center'>
						<IoIosArrowUp className='peer text-slate-300/70 hover:text-green-400 w-7 h-7 hover:bg-green-500/30 rounded-lg p-1' />
						<p className='text-[17px] font-semibold text-slate-300/70 peer-hover:text-green-400'>
							98
						</p>
					</div>
					<IoBookmarkOutline className='text-slate-300/70 hover:text-orange-400 w-7 h-7 hover:bg-orange-500/30 rounded-lg p-1' />
					<IoIosLink className='text-slate-300/70 hover:text-purple-400 w-7 h-7 hover:bg-purple-500/30 rounded-lg p-1' />
				</div>
			</div>
		</div>
	);
};

export default Card;

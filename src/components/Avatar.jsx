import React from 'react';

const Avatar = () => {
	return (
		<div className='bg-slate-600 w-9 h-9 rounded-lg overflow-hidden'>
			<img
				className='w-full h-full object-center scale-110'
				src='https://media.licdn.com/dms/image/C4E03AQH4iSNrs5Ox5Q/profile-displayphoto-shrink_800_800/0/1654417313606?e=2147483647&v=beta&t=VCPgNfXW8mUgvF9SclOzpZwrSm4Hbsqu8UHlHyr7tOE'
				alt='avatar'
			/>
		</div>
	);
};

export default Avatar;

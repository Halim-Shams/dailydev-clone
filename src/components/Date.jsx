import React from 'react';

const Date = ({date, reading_time}) => {
	return (
		<div className='flex gap-4 items-center px-2 text-[13px] text-slate-300'>
			<p className='relative'>
				{date}
				<span className='text-xl font-bold leading-none absolute -right-2.5 bottom-1 z-0'>
					.
				</span>
			</p>
			<p>{reading_time} read time</p>
		</div>
	);
};

export default Date;

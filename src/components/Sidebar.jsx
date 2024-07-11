import React from 'react';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
	return (
		<div className='text-white border-r border-slate-700 w-72 h-screen pt-24 bg-slate-800 flex flex-col'>
			<SidebarLink to='/' name='My feed' />
			<SidebarLink to='/about' name='About' />
		</div>
	);
};

export default Sidebar;

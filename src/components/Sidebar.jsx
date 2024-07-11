import React from 'react';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
	return (
		<div className='text-white border-r border-slate-600 w-72 h-screen pt-24 bg-slate-700 flex flex-col'>
			<SidebarLink to='/' name='My feed' />
			<SidebarLink to='/about' name='About' />
		</div>
	);
};

export default Sidebar;

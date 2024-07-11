import React from 'react';
import {NavLink} from 'react-router-dom';

const SidebarLink = ({name, to}) => {
	return (
		<NavLink
			className={({isActive}) =>
				isActive
					? 'text-slate-50 bg-slate-600 text-sm pl-3 py-1'
					: 'text-slate-300/70 text-sm hover:bg-slate-600 pl-3 py-1'
			}
			to={to}>
			{name}
		</NavLink>
	);
};

export default SidebarLink;

import {Outlet} from 'react-router-dom';
import Body from './Body';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const SharedLayout = () => {
	return (
		<div className='relative'>
			<Navbar />
			<div className='flex'>
				<Sidebar />
				<Body>
					<Outlet />
				</Body>
			</div>
		</div>
	);
};

export default SharedLayout;

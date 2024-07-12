import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Login from './pages/Login';

const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

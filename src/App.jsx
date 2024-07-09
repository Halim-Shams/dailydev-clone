import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';

const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;

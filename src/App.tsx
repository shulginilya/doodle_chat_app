import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatContainer from '@/containers/ChatContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
	<>
		<Header />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ChatContainer />} />
			</Routes>
		</BrowserRouter>
		<Footer />
	</>
);

export default App;

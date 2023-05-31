import Header from '@/components/Header';
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
	</>
);

export default App;

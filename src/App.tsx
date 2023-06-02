import ChatContainer from '@/containers/ChatContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ChatContainer />} />
			</Routes>
		</BrowserRouter>
	</>
);

export default App;

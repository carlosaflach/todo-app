import { Header } from './Components/Header';
import { NewTask } from './Components/NewTask';
import './global.css';

export const App = () => {
	return (
		<div>
			<Header />
			<main>
				<NewTask />
			</main>
		</div>
	);
};

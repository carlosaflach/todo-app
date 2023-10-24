import { Header } from './Components/Header';
import { CreateTodo } from './Components/CreateTodo';
import './global.css';

export const App = () => {
	return (
		<div>
			<Header />
			<main>
				<CreateTodo />
			</main>
		</div>
	);
};

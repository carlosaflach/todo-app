import { Header } from './Components/Header';
import { CreateTodo } from './Components/CreateTodo';
import './global.css';
import { Tasks } from './Components/Tasks';

export const App = () => {
	return (
		<div>
			<Header />
			<main>
				<CreateTodo />
				<Tasks />
			</main>
		</div>
	);
};

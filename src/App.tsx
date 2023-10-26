import { Header } from './Components/Header';
import { CreateTodo } from './Components/CreateTodo';
import './global.css';
import { Todos } from './Components/Todos';
import { useState } from 'react';

export interface ITodo {
	id: string;
	task: string;
	isChecked: boolean;
}

export const App = () => {
	const [todos, setTodos] = useState<ITodo[] | []>([]);

	return (
		<div>
			<Header />
			<main>
				<CreateTodo onCreatingTodo={setTodos} />
				<Todos todos={todos} onSettingTodos={setTodos} />
			</main>
		</div>
	);
};

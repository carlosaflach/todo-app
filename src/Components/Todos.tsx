import { TodoItem } from './TodoItem';
import styles from './Todos.module.css';
// import { v4 as uuidv4 } from 'uuid';
import Clipboard from '../assets/Clipboard.png';
import { ITodo } from '../App';
import { FC } from 'react';

interface ITodosProps {
	todos: ITodo[];
	onSettingTodos: React.Dispatch<React.SetStateAction<ITodo[] | []>>;
}

export const Todos: FC<ITodosProps> = ({ todos, onSettingTodos }) => {
	const handleCheckingTodo = (id: string) => {
		const newState = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isChecked: !todo.isChecked };
			}
			return todo;
		});
		onSettingTodos(newState);
	};

	const handleRemoveTodo = (id: string) => {
		const newState = todos.filter((todo) => todo.id !== id);
		onSettingTodos(newState);
	};

	const todosCreated = todos.length;

	const todosChecked = todos.reduce((acc, curr) => {
		if (curr.isChecked) {
			acc += 1;
			return acc;
		}
		return acc;
	}, 0);

	return (
		<div className={styles.wrapper}>
			<section className={styles.info}>
				<div className={styles.created}>
					<p>Tarefas Criadas</p>
					<span className={styles.counter}>{todosCreated}</span>
				</div>
				<div className={styles.done}>
					<p>Concluidas</p>
					<span
						className={
							styles.counter
						}>{`${todosChecked} de ${todosCreated}`}</span>
				</div>
			</section>
			<section className={styles.tasks}>
				{todos.length > 0 ? (
					todos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							onCheckingTodo={handleCheckingTodo}
							onRemovingTodo={handleRemoveTodo}
						/>
					))
				) : (
					<div className={styles.empty}>
						<img src={Clipboard} alt='Clipboard Image' />
						<p>Você ainda não tem tarefas cadastradas</p>
						<p>Crie tarefas e organize seus itens a fazer</p>
					</div>
				)}
			</section>
		</div>
	);
};

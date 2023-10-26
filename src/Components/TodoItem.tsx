import { FC } from 'react';
import styles from './TodoItem.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';
import { ITodo } from '../App';

export interface TaskItemProps {
	todo: ITodo;
	onCheckingTodo: (id: string) => void;
}

export const TodoItem: FC<TaskItemProps> = ({ todo, onCheckingTodo }) => {
	return (
		<div key={todo.id} className={styles.taskItem}>
			<button
				className={todo.isChecked ? styles.checked : styles.notChecked}
				onClick={() => onCheckingTodo(todo.id)}>
				{todo.isChecked ? (
					<CheckCircle size={24} weight='fill' />
				) : (
					<Circle size={24} />
				)}
			</button>
			<p className={todo.isChecked ? styles.todoChecked : ''}>{todo.task}</p>
			<button className={styles.delete}>
				<Trash size={24} />
			</button>
		</div>
	);
};

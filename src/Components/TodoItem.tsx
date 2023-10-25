import { FC } from 'react';
import styles from './TodoItem.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';
import { ITodo } from '../App';

export interface TaskItemProps {
	todo: ITodo;
}

export const TodoItem: FC<TaskItemProps> = ({ todo }) => {
	return (
		<div key={todo.id} className={styles.taskItem}>
			<button className={todo.isChecked ? styles.checked : styles.notChecked}>
				{todo.isChecked ? (
					<CheckCircle size={24} weight='fill' />
				) : (
					<Circle size={24} />
				)}
			</button>
			<p>{todo.task}</p>
			<button className={styles.delete}>
				<Trash size={24} />
			</button>
		</div>
	);
};

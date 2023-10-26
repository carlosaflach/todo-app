import { FC } from 'react';
import styles from './TodoItem.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';
import { ITodo } from '../App';

export interface TaskItemProps {
	todo: ITodo;
	onCheckingTodo: (id: string) => void;
	onRemovingTodo: (id: string) => void;
}

export const TodoItem: FC<TaskItemProps> = ({
	todo: { id, isChecked, task },
	onCheckingTodo,
	onRemovingTodo,
}) => {
	return (
		<div className={styles.taskItem}>
			<button
				className={isChecked ? styles.checked : styles.notChecked}
				onClick={() => onCheckingTodo(id)}>
				{isChecked ? (
					<CheckCircle size={24} weight='fill' />
				) : (
					<Circle size={24} />
				)}
			</button>
			<p className={isChecked ? styles.todoChecked : ''}>{task}</p>
			<button className={styles.delete} onClick={() => onRemovingTodo(id)}>
				<Trash size={24} />
			</button>
		</div>
	);
};

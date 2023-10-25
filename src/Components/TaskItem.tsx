import { FC } from 'react';
import styles from './TaskItem.module.css';
import { ITask } from './Tasks';
import { Trash, Circle, CheckCircle } from 'phosphor-react';

export interface TaskItemProps {
	task: ITask;
}

export const TaskItem: FC<TaskItemProps> = ({ task }) => {
	return (
		<div key={task.id} className={styles.taskItem}>
			<button className={task.isChecked ? styles.checked : styles.notChecked}>
				{task.isChecked ? (
					<CheckCircle size={24} weight='fill' />
				) : (
					<Circle size={24} />
				)}
			</button>
			<p>{task.task}</p>
			<button className={styles.delete}>
				<Trash size={24} />
			</button>
		</div>
	);
};

import { FC } from 'react';
import styles from './TaskItem.module.css';
import { ITask } from './Tasks';
import { Trash } from 'phosphor-react';

export interface TaskItemProps {
	task: ITask;
}

export const TaskItem: FC<TaskItemProps> = ({ task }) => {
	return (
		<div key={task.id} className={styles.taskItem}>
			<input type='checkbox' checked={task.isChecked} />
			<p>{task.task}</p>
			<button>
				<Trash />
			</button>
		</div>
	);
};

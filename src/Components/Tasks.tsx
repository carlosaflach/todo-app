import { TaskItem } from './TaskItem';
import styles from './Tasks.module.css';
import { v4 as uuidv4 } from 'uuid';

export interface ITask {
	id: string;
	task: string;
	isChecked: boolean;
}

export const Tasks = () => {
	const tasks: ITask[] = [
		{
			id: uuidv4(),
			task: 'Task teste',
			isChecked: true,
		},
		{
			id: uuidv4(),
			task: 'Task Teste 2',
			isChecked: false,
		},
	];

	return (
		<div className={styles.wrapper}>
			<section className={styles.info}>
				<div className={styles.created}>
					<p>Tarefas Criadas</p>
					<span className={styles.counter}>counter</span>
				</div>
				<div className={styles.done}>
					<p>Concluidas</p>
					<span className={styles.counter}>counter</span>
				</div>
			</section>
			<section className={styles.tasks}>
				{tasks.map((task) => (
					<TaskItem task={task} />
				))}
			</section>
		</div>
	);
};

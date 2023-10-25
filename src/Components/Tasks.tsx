import { TaskItem } from './TaskItem';
import styles from './Tasks.module.css';
import { v4 as uuidv4 } from 'uuid';
import Clipboard from '../assets/Clipboard.png';

export interface ITask {
	id: string;
	task: string;
	isChecked: boolean;
}

export const Tasks = () => {
	const tasks: ITask[] | [] = [];

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
				{tasks.length > 0 ? (
					tasks.map((task) => <TaskItem task={task} />)
				) : (
					<div className={styles.empty}>
						<img src={Clipboard} alt='' />
						<p>Você ainda não tem tarefas cadastradas</p>
						<p>Crie tarefas e organize seus itens a fazer</p>
					</div>
				)}
			</section>
		</div>
	);
};

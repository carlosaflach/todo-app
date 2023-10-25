import { TodoItem } from './TodoItem';
import styles from './Todos.module.css';
// import { v4 as uuidv4 } from 'uuid';
import Clipboard from '../assets/Clipboard.png';
import { ITodo } from '../App';
import { FC } from 'react';

interface ITodosProps {
	todos: ITodo[];
}

export const Todos: FC<ITodosProps> = ({ todos }) => {
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
				{todos.length > 0 ? (
					todos.map((todo) => <TodoItem todo={todo} />)
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

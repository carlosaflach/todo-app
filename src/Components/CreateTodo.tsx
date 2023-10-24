import styles from './CreateTodo.module.css';
import Plus from '../assets/plus.svg?react';

export const CreateTodo = () => {
	return (
		<div className={styles.container}>
			<input placeholder='Adicione uma nova tarefa' type='text' />
			<button>
				Criar <Plus />
			</button>
		</div>
	);
};

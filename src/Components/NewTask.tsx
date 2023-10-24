import styles from './NewTask.module.css';
import Plus from '../assets/plus.svg?react';

export const NewTask = () => {
	return (
		<div className={styles.container}>
			<input placeholder='Adicione uma nova tarefa' type='text' />
			<button>
				Criar <Plus />
			</button>
		</div>
	);
};

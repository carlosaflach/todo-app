import styles from './NewTask.module.css';

export const NewTask = () => {
	return (
		<div className={styles.container}>
			<input placeholder='Adicione uma nova tarefa' type='text' />
		</div>
	);
};

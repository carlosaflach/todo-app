import styles from './CreateTodo.module.css';
import Plus from '../assets/plus.svg?react';
import React, { ChangeEvent, FC, useState } from 'react';
import { ITodo } from '../App';
import { v4 as uuidv4 } from 'uuid';

interface ICreateTodo {
	onCreatingTodo: React.Dispatch<React.SetStateAction<[] | ITodo[]>>;
}

export const CreateTodo: FC<ICreateTodo> = ({ onCreatingTodo }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleCreateTodo = () => {
		onCreatingTodo((prevState) => [
			...prevState,
			{ id: uuidv4(), isChecked: false, task: inputValue },
		]);

		setInputValue('');
	};

	return (
		<div className={styles.container}>
			<input
				placeholder='Adicione uma nova tarefa'
				type='text'
				value={inputValue}
				onChange={handleInputText}
			/>
			<button onClick={handleCreateTodo}>
				Criar <Plus />
			</button>
		</div>
	);
};

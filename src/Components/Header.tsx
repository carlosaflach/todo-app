import styles from './Header.module.css';
import Rocket from '../assets/rocket.svg?react';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<div className={styles.logoIcon}>
					<Rocket />
				</div>
				<div className={styles.logoText}>
					<p>
						to<span>do</span>
					</p>
				</div>
			</div>
		</header>
	);
};

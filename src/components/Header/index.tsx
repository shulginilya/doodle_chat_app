import { getUsername } from '@/utils/commonUtils'; 
import styles from './header.module.scss';

const Header: React.FC = () => (
	<header data-testid="header" className={styles.header}>
		<div className={styles.header__cnt}>
			<div className={styles.header__cnt__title}>Doodle Chat App</div>
			<span className={styles.header__cnt__username}>{getUsername()}</span>
		</div>
	</header>
);

export default Header;

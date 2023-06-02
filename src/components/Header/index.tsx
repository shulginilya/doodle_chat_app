import { getUsername } from '@/utils/commonUtils'; 
import styles from './header.module.scss';

interface HeadeerType {
	refreshChat: () => void;
};

const Header: React.FC<HeadeerType> = ({
	refreshChat
}) => (
	<header data-testid="header" className={styles.header}>
		<div className={styles.header__cnt}>
			<div className={styles.header__cnt__control}>
				<button className={styles.header__cnt__control__btn} onClick={refreshChat}>Refresh</button>
			</div>
			<span data-testid="username_title" className={styles.header__cnt__username}>Username: {getUsername()}</span>
		</div>
	</header>
);

export default Header;

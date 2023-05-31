import styles from './header.module.scss';

const Header: React.FC = () => {
	return (
        <header data-testid="header" className={styles.header}>Doodle Chat App</header>
	);
};

export default Header;

import { Footer } from 'src/components/Footer';
import { Navbar } from 'src/components/Nav';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
	return (
		<div className={styles.page_container}>
			<div className={styles.content_wrap}>
				<Navbar />
				{children}
			</div>
			<Footer />
		</div>
	);
};

export { Layout };

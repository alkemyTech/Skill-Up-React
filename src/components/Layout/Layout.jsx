import { Footer } from 'src/components/Footer';
import { Navbar } from 'src/components/Nav';
import styles from './Layout.module.css';
import { useComponentVisible } from 'src/hooks/useComponentVisible';

const Layout = ({ children }) => {
	const { ref, isVisible, setIsVisible } = useComponentVisible(false);
	return (
		<div className={styles.page_container} ref={ref}>
			<div className={styles.content_wrap}>
				<Navbar isVisible={isVisible} setIsVisible={setIsVisible} />
				{children}
			</div>
			<Footer />
		</div>
	);
};

export { Layout };

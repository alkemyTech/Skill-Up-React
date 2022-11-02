import { Footer } from '../Footer';
import { Navbar } from '../Nav';
import '../../App.css';

const Layout = ({ children }) => {
	return (
		<div className='page-container'>
			<div className='content-wrap'>
				<Navbar />
				{children}
			</div>
			<Footer />
		</div>
	);
};

export { Layout };

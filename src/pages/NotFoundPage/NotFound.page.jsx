import { Link } from 'react-router-dom';
import { Button } from 'src/components/Button';

export default function NotFoundPage() {
	return (
		<div className="mt-14 flex w-full flex-col items-center gap-2">
			<img src="https://advermedia.ua/wp-content/uploads/2018/04/content5_3.png" alt="404" />
			<Link to="/" className="mt-10">
				<Button variant="primary">Back to homepage</Button>
			</Link>
		</div>
	);
}

import React from 'react';
import { Button } from 'src/components/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="flex flex-col items-center gap-2 w-full mt-14">
			<img  src="https://advermedia.ua/wp-content/uploads/2018/04/content5_3.png" alt="404" />
			<Link to="/" className='mt-10' ><Button variant="primary">Back to homepage</Button></Link>
		</div>
	);
};

export default NotFound;

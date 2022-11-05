import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { clearUserList } from 'src/features/users/userSlice';
import { clearCredit } from 'src/features/credit/creditSlice';

const ButtonLogout = ({ handlerLogin, variant, close }) => {
	const dispatch = useDispatch();

	const handlerLogout = () => {
		localStorage.clear();
		dispatch(clearUserList());
		dispatch(clearCredit());
		handlerLogin();
	};
	return (
		<>
			<Button variant={variant} onClick={handlerLogout} data-close={close}>
				Logout
			</Button>
		</>
	);
};

export { ButtonLogout };


import { useDispatch } from 'react-redux';
import { clearUserList } from 'src/features/users/userSlice';
import { clearCredit } from 'src/features/credit/creditSlice';
import { Button } from 'src/components/Button';

const ButtonLogout = ({ handlerLogin, colorScheme, close }) => {
	const dispatch = useDispatch();

	const handlerLogout = () => {
		localStorage.clear();
		dispatch(clearUserList());
		dispatch(clearCredit());
		handlerLogin();
	};
	return (
		<Button colorScheme={colorScheme} onClick={handlerLogout} data-close={close}>
			Logout
		</Button>
	);
};

export { ButtonLogout };

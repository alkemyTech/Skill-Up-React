// hooks
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// components

// utils
import { resetUser } from '../../store/states/user';
import { PRIVATE } from '../../router/PathUrl';
// styles
import { ContentAppBar } from './Appbar.style';

const links = [
    {
        label: 'Top up',
        to: `${PRIVATE.root}/${PRIVATE.topUp}`
    },
    {
        label: 'Payment',
        to: `${PRIVATE.root}/${PRIVATE.payment}`
    },
    {
        label: 'Transactions',
        to: `${PRIVATE.root}/${PRIVATE.transactions}`
    },
    {
        label: 'Profile',
        to: `${PRIVATE.root}/${PRIVATE.profile}`
    },
    {
        label: 'Contact',
        to: `${PRIVATE.root}/${PRIVATE.contact}`
    }
];

function Header() {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(resetUser());
    };

    return (
        <ContentAppBar className="navBarDesktop">
            <div className="logo">
                <h4 className="f-24 t-white fw-5">
                    <Link to={`${PRIVATE.root}/${PRIVATE.home}`}>Alkemy Bank</Link>
                </h4>
            </div>
            <nav className="nav-menu d-flex center">
                <ul className="d-flex center">
                    {links.map((item) => (
                        <li key={item.label} className="f-14">
                            <Link to={item.to}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button type="button" className="f-14 t-white signout" onClick={handleSignOut}>
                Sign Out
            </button>
        </ContentAppBar>
    );
}
export default Header;

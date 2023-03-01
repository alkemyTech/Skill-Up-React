import { NavLink } from 'react-router-dom';
import { CenterNavButtonSvg, ContentAppBarMobile } from './Appbar.style';
import Card from '../../assets/icons/card.svg';
import CardActive from '../../assets/icons/card-active.svg';
import Profile from '../../assets/icons/profile.svg';
import ProfileActive from '../../assets/icons/profile-active.svg';
import Transaction from '../../assets/icons/transaction.svg';
import TransactionActive from '../../assets/icons/transaction-active.svg';
import Payment from '../../assets/icons/payment.svg';
import PaymentActive from '../../assets/icons/payment-active.svg';

import { PRIVATE } from '../../router/PathUrl';

function AppBarMobile() {
    return (
        <ContentAppBarMobile className="mobile-container">
            <NavLink
                className={({ isActive }) => (isActive ? 'active-menu icon' : 'icon')}
                to={`${PRIVATE.root}/${PRIVATE.topUp}`}>
                <img className="icon-active" src={CardActive} alt="" />
                <img className="icon-default" src={Card} alt="" />
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active-menu icon' : 'icon')}
                to={`${PRIVATE.root}/${PRIVATE.payment}`}>
                <img className="icon-active" src={PaymentActive} alt="" />
                <img className="icon-default" src={Payment} alt="" />
            </NavLink>
            <NavLink className="center centerNavButton" to={`${PRIVATE.root}/${PRIVATE.home}`}>
                <div className="wrapper">
                    <CenterNavButtonSvg />
                </div>
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active-menu icon' : 'icon')}
                to={`${PRIVATE.root}/${PRIVATE.transactions}`}>
                <img className="icon-active" src={TransactionActive} alt="" />
                <img className="icon-default" src={Transaction} alt="" />
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active-menu icon' : 'icon')}
                to={`${PRIVATE.root}/${PRIVATE.profile}`}>
                <img className="icon-active" src={ProfileActive} alt="" />
                <img className="icon-default" src={Profile} alt="" />
            </NavLink>
        </ContentAppBarMobile>
    );
}

export default AppBarMobile;

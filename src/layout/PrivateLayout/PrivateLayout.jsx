// hooks
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Appbar/Header';
import AppBarMobile from '../../components/Appbar/AppBarMobile';
import Footer from '../../components/Footer/Footer';
// styles
import { ContentPrivateLayout } from './Private.styles';

function PrivateLayout() {
    return (
        <ContentPrivateLayout>
            <Header />
            <div className="content-pages">
                <Outlet />
            </div>
            <Footer />
            <AppBarMobile />
        </ContentPrivateLayout>
    );
}

export default PrivateLayout;

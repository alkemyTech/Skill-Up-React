// hooks
import React from 'react';
// components
import CashBalance from './Components/CashBalance/CashBalance';
import AvatarUser from '../../../components/AvatarUser/AvatarUser';
import LastestTransactions from './Components/LastestTransactions/LastestTransactions';
import DecorationLayout from '../../../layout/DecorationLayout/DecorationLayout';
// styles
import { ContentHome } from './Home.styles';

export default function Home() {
    return (
        <DecorationLayout>
            <ContentHome>
                <AvatarUser />
                <CashBalance />
                <LastestTransactions />
            </ContentHome>
        </DecorationLayout>
    );
}

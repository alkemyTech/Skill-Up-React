/* eslint-disable no-nested-ternary */
// hooks
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePage } from '../../../../../store/states/page';
// components
import CardTransaction from '../../../../../components/CardTransaction/CardTransaction';
// utils
import { PRIVATE } from '../../../../../router/PathUrl';
// services
import { useGetTransactionsQuery } from '../../../../../services/dataApi';

import { ContentLastestTransactions } from './LastestTransactions.styles';

function LastestTransactions() {
    const { data, isLoading } = useGetTransactionsQuery(1);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoading) {
            dispatch(updatePage({ isLoading: true }));
        } else {
            dispatch(updatePage({ isLoading: false }));
        }
    }, [isLoading]);

    return (
        <ContentLastestTransactions>
            <div className="top d-flex between">
                <h5 className="label">Lastest transactions</h5>
                <Link to={`${PRIVATE.root}/${PRIVATE.transactions}`}>
                    <h5 className="label">SEE ALL {'>'}</h5>
                </Link>
            </div>
            <div className="list-cards">
                {!data && isLoading ? null : data.data.length !== 0 && !isLoading ? (
                    data.data.map((transaction, i) => {
                        if (i < 5) {
                            return (
                                <CardTransaction key={transaction.id} transaction={transaction} />
                            );
                        }
                        return null;
                    })
                ) : (
                    <span className="t-light d-block t-center">No transactions</span>
                )}
            </div>
        </ContentLastestTransactions>
    );
}

export default LastestTransactions;

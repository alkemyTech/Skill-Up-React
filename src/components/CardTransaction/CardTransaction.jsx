import React from 'react';
import { formatDate } from '../../utilities/formatDate';
import { ContentCardTransaction } from './CardTransaction.styles';

function CardTransaction({ transaction }) {
    const isBill = (type) => {
        let className;
        if (type.toLowerCase() === 'payment') {
            className = 'c-danger';
        }
        if (type.toLowerCase() === 'topup') {
            className = 'c-default';
        }
        return className;
    };

    return (
        <ContentCardTransaction>
            <div className="article">
                <h4 className="text">{transaction.concept} </h4>
                <span className="date t-light">{formatDate(transaction.date)}</span>
            </div>
            <div className="amount">
                <h4 className={`text ${isBill(transaction.type)} `}>$ {transaction.amount}</h4>
            </div>
        </ContentCardTransaction>
    );
}

export default CardTransaction;

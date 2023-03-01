import { Pagination, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// compontents
import CardTransaction from '../../../components/CardTransaction/CardTransaction';
// import Swal from 'sweetalert2';
import { useGetTransactionsQuery } from '../../../services/dataApi';
import { updatePage } from '../../../store/states/page';
import { ContentTransactions } from './transacctions.style';

export default function Transactions() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error, isSuccess } = useGetTransactionsQuery(page);
    let content;

    useEffect(() => {
        if (isLoading) {
            dispatch(updatePage({ isLoading: true }));
            content = null;
        } else {
            dispatch(updatePage({ isLoading: false }));
        }
    }, [isLoading]);

    function handlePage(e, value) {
        setPage(value);
    }
    if (isSuccess) {
        content = data.data.map((tr) => {
            return <CardTransaction key={tr.id} transaction={tr} />;
        });
    }

    if (isError) {
        return <p>{error}</p>;
    }

    return (
        <ContentTransactions className="transcontainer">
            <h2 className="f-24">Transactions</h2>
            {content}
            <Stack>
                {data && (
                    <Pagination
                        count={data.nextPage ? page + 1 : page}
                        page={page}
                        size="large"
                        onChange={(e, value) => handlePage(e, value)}
                        hideNextButton={data.nextPage === null}
                        hidePrevButton={data.previousPage === null}
                    />
                )}
            </Stack>
        </ContentTransactions>
    );
}

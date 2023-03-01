import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { useGetTransactionsQuery } from '../../services/dataApi';
import { PRIVATE } from '../../router/PathUrl';

export default function Buttons() {
    const [page, setPage] = useState(1);

    const { data } = useGetTransactionsQuery(page);

    const navigate = useNavigate();
    const navigation = (url) => {
        // aca va la funcion para navehgar
        navigate(url);
    };

    console.log(data);

    return (
        <div style={{ marginTop: '40px' }}>
            {' '}
            <ButtonGroup variant="contained" aria-label="primary button group">
                <Button
                    onClick={() => navigation(PRIVATE.topUpBalance)}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    Cargar Saldo
                </Button>
                <Button
                    onClick={() => navigation(PRIVATE.bills)}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    Gastos
                </Button>
                <Button
                    onClick={() => navigation(PRIVATE.transactions)}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    Movimientos
                </Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" aria-label="primary button group">
                <Button
                    onClick={() => {
                        setPage((prevState) => (prevState > 1 ? prevState - 1 : prevState));
                    }}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    PrevPage
                </Button>
                <Button
                    onClick={async () => {
                        setPage((prevState) => (data.nextPage ? prevState + 1 : prevState));
                    }}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    NextPage
                </Button>
            </ButtonGroup>
        </div>
    );
}

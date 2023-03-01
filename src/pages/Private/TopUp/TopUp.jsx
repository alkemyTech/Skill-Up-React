import { useState } from 'react';
import Swal from 'sweetalert2';
import { FormLabel, Input, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { ContentTopUpBalance } from './TopUp.style';
import { useDepositCashMutation } from '../../../services/dataApi.js';

function TopUp() {
    const [amount, setAmount] = useState('');
    const [concept, setConcept] = useState('');
    const [newDeposit] = useDepositCashMutation();
    const UserState = useSelector((store) => store.user);
    console.log('render top');

    function handleSubmit(e) {
        e.preventDefault();
        const id = UserState.account_id;

        if (amount <= 0) {
            Swal.fire('', 'Debe ingresar un número positivo', 'error');
            return;
        }
        if (!concept) {
            Swal.fire('', 'Por favor ingrese un concepto de carga', 'error');
            return;
        }
        newDeposit({ id, concept, amount })
            .unwrap()
            .then((fulfilled) => {
                switch (fulfilled.status) {
                    case 404:
                        Swal.fire('', fulfilled.error, 'error');
                        break;
                    case 200:
                        Swal.fire('', fulfilled.error, 'success');
                        break;
                    default:
                        break;
                }
            })
            .catch((rejected) => Swal.fire('', rejected.error, 'error'));
    }

    return (
        <ContentTopUpBalance>
            <div className="top d-flex between">
                <h4 className="f-24">Top up</h4>
            </div>
            <div className="card">
                <form className="d-flex-column billsForm">
                    {' '}
                    <FormLabel>Monto:</FormLabel>
                    <Input
                        type="number"
                        name="amount"
                        id="amount"
                        value={amount}
                        placeholder="$ 0.00"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <FormLabel>Concepto:</FormLabel>
                    <TextField
                        aria-label="With textarea"
                        value={concept}
                        onChange={(e) => setConcept(e.target.value)}
                    />
                    <button type="submit" className="btn primary" onClick={handleSubmit}>
                        Depositar
                    </button>
                </form>
            </div>
        </ContentTopUpBalance>
    );
}

export default TopUp;

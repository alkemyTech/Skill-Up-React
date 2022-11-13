import React from 'react';
import { LayoutPage } from 'src/components/LayoutPage';
import { Heading } from 'src/components/Heading';
import EmailTransfer from './EmailTransfer';
import AccountTransfer from './AccountTransfer';

const TransferPage = () => {
	return (
		<LayoutPage>
			<Heading size="headline3" className="mb-10 text-center text-ct-primary-600">
				{' '}
				Transfer
			</Heading>
			<div className="m-5 mt-5 flex flex-col justify-around md:mt-0 lg:flex-row">
				<div className="flex flex-col items-center justify-center text-center">
					<Heading size="headline4">Deposit to an account ID</Heading>
					<AccountTransfer />
				</div>
				<div className="mt-5 flex flex-col items-center justify-center text-center md:mt-0">
					<Heading size="headline4">Deposit to an user email</Heading>
					<EmailTransfer />
				</div>
			</div>
		</LayoutPage>
	);
};

export default TransferPage;

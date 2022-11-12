import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import styles from './Alert.module.css';

export const Alert = ({ trigger, title, description, confirmButton, cancelButton }) => {
	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialog.Overlay
					className={`${styles.Alert_overlay} fixed inset-0 bg-ct-neutral-medium-800/40 backdrop-blur-[2px]`}
				/>
				<AlertDialog.Content
					className={`${styles.Alert_content} fixed top-1/2 left-1/2 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded border border-ct-special1-700/70 bg-white p-4`}
				>
					<AlertDialog.Title asChild className="pb-6">
						{title}
					</AlertDialog.Title>

					<AlertDialog.Description asChild>{description}</AlertDialog.Description>

					<div className="mt-5 flex justify-end gap-5">
						<AlertDialog.Cancel asChild>{cancelButton}</AlertDialog.Cancel>
						<AlertDialog.Action asChild>{confirmButton}</AlertDialog.Action>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
};

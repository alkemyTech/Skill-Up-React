import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { IconButton } from 'src/components/IconButton';
import { Select } from 'src/components/Select';
import { range } from 'src/utils/range';

export const Pagination = ({
	className = '',
	totalPages,
	currentPage,
	onChangePage,
	changeItemsPerPage,
	itemsPerPag,
}) => {
	return (
		<div
			data-testid="pagination"
			className={`${className} grid grid-cols-[auto_1fr_auto] gap-2 rounded-md border border-ct-neutral-dark-400 p-2`}
		>
			<IconButton
				className=" bg-ct-neutral-medium-700 text-ct-neutral-ligth-300"
				disabled={!(currentPage > 1)}
				onClick={() => onChangePage(currentPage - 1)}
				icon={MdNavigateBefore}
			/>

			<div className="grid grid-cols-[1fr_auto] gap-3">
				<Select
					value={currentPage}
					onChange={(e) => onChangePage(parseInt(e.target.value, 10))}
					className="text-ct-primary-400 outline-ct-neutral-ligth-400"
				>
					{range(totalPages, 1).map((page) => (
						<option
							key={page}
							value={page}
							className={`outline-ct-neutral-ligth-400 ${
								currentPage === page
									? 'bg-gradient-to-l from-ct-primary-400 to-ct-secondary-400 bg-clip-text text-transparent'
									: 'text-ct-neutral-medium-100'
							}`}
						>
							Page {page} of {totalPages}
						</option>
					))}
				</Select>

				<Select
					value={itemsPerPag}
					onChange={changeItemsPerPage}
					className="text-ct-primary-400 outline-ct-neutral-ligth-400"
				>
					{[5, 10].map((v) => (
						<option
							key={v}
							value={v}
							className={`outline-ct-neutral-ligth-400 ${
								itemsPerPag === v
									? 'bg-gradient-to-l from-ct-primary-400 to-ct-secondary-400 bg-clip-text text-transparent'
									: 'text-ct-neutral-medium-100'
							}`}
						>
							Per page {v}
						</option>
					))}
				</Select>
			</div>

			<IconButton
				className="bg-ct-neutral-medium-700 text-ct-neutral-ligth-300"
				disabled={currentPage >= totalPages}
				onClick={() => onChangePage(currentPage + 1)}
				icon={MdNavigateNext}
			/>
		</div>
	);
};

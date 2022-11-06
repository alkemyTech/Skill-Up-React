export const Button = ({ variant, children, disabled, style, ...props }) => {
	return (
		<>
			{variant === 'primary' ? (
				<button
					{...props}
					className={`cursor-pointer lg bg-ct-primary-500 py-2 px-4 rounded-md border border-ct-primary-500 text-white text-[16px] max-w-full hover:bg-opacity-75 disabled:bg-ct-primary-300 disabled:border-ct-primary-300 disabled:cursor-not-allowed transition-color duration-300 ${style}`}
					disabled={disabled}
				>
					{children}
				</button>
			) : variant === 'secondary' ? (
				<button
					{...props}
					className={`cursor-pointer bg-transparent py-2 px-4 rounded-md border border-white text-white text-[16px] max-w-full hover:bg-white hover:bg-opacity-5 transition-color duration-300 ${style}`}
					disabled={disabled}
				>
					{children}
				</button>
			) : variant === 'tertiary' ? (
				<button
					{...props}
					className={`cursor-pointer bg-transparent py-2 px-4 rounded-md border border-ct-primary-500 text-ct-primary-500 text-[16px] max-w-full hover:bg-ct-primary-500 hover:bg-opacity-5 disabled:border-ct-primary-300 disabled:text-ct-primary-300 disabled:cursor-not-allowed transition-color duration-300 ${style}`}
					disabled={disabled}
				>
					{children}
				</button>
			) : variant === 'mini' ? (
				<button
					{...props}
					className="cursor-default lg:cursor-pointer bg-transparent py-2 px-4 rounded-md border border-white text-white text-[12px] max-w-fit hover:bg-white hover:bg-opacity-5 transition-color duration-300"
				>
					{children}
				</button>
			) : (
				''
			)}
		</>
	);
};


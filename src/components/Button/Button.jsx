import { themeColorScheme } from 'src/ui/themeColorScheme';

const buttonVariant = /**@type {const} */ ({
	solid: 'solid',
	outline: 'outline',
	ghost: 'ghost',
});

/**
 * @typedef {Object} CustomProps
 * @property {typeof themeColorScheme[keyof themeColorScheme] } [props.colorScheme]
 * @property {typeof buttonVariant[keyof buttonVariant] } [props.variant]
 * @param {React.ComponentProps<"button"> & CustomProps} props
 */
export const Button = ({
	variant = buttonVariant.solid,
	colorScheme = themeColorScheme.primary,
	children,
	className,
	...props
}) => {
	return (
		<button
			{...props}
			className={`${className} ${
				variant === buttonVariant.solid
					? colorScheme === themeColorScheme.primary
						? 'bg-ct-primary-400 text-ct-neutral-light-50'
						: colorScheme === themeColorScheme.secondary
						? 'bg-ct-secondary-400 text-ct-neutral-dark-700'
						: colorScheme === themeColorScheme.tertiary
						? 'bg-ct-tertiary-400 text-ct-neutral-dark-700'
						: colorScheme === themeColorScheme.success
						? 'bg-ct-success-400 text-ct-neutral-dark-700'
						: colorScheme === themeColorScheme.warning
						? 'bg-ct-warning-400 text-ct-neutral-dark-700'
						: colorScheme === themeColorScheme.danger
						? 'bg-ct-danger-400 text-ct-neutral-dark-700'
						: ''
					: variant === buttonVariant.outline
					? colorScheme === themeColorScheme.primary
						? 'border border-ct-primary-100 text-ct-primary-400 hover:bg-ct-primary-400/10'
						: colorScheme === themeColorScheme.secondary
						? 'border border-ct-secondary-100 text-ct-secondary-400 hover:bg-ct-secondary-400/10'
						: colorScheme === themeColorScheme.tertiary
						? 'border border-ct-tertiary-100 text-ct-tertiary-400 hover:bg-ct-tertiary-400/10'
						: colorScheme === themeColorScheme.success
						? 'border border-ct-success-100 text-ct-success-400 hover:bg-ct-success-400/10'
						: colorScheme === themeColorScheme.warning
						? 'border border-ct-warning-100 text-ct-warning-400 hover:bg-ct-warning-400/10'
						: colorScheme === themeColorScheme.danger
						? 'border border-ct-danger-100 text-ct-danger-400 hover:bg-ct-danger-400/10'
						: ''
					: variant === buttonVariant.ghost
					? colorScheme === themeColorScheme.primary
						? 'text-ct-primary-400 hover:bg-ct-primary-400/10'
						: colorScheme === themeColorScheme.secondary
						? 'text-ct-secondary-400 hover:bg-ct-secondary-400/10'
						: colorScheme === themeColorScheme.tertiary
						? 'text-ct-tertiary-400 hover:bg-ct-tertiary-400/10'
						: colorScheme === themeColorScheme.success
						? 'text-ct-success-400 hover:bg-ct-success-400/10'
						: colorScheme === themeColorScheme.warning
						? 'text-ct-warning-400 hover:bg-ct-warning-400/10'
						: colorScheme === themeColorScheme.danger
						? 'text-ct-danger-400 hover:bg-ct-danger-400/10'
						: ''
					: ''
			} grid items-center justify-center rounded-md px-4 py-2 font-poppins text-base font-medium outline-ct-special1-500 transition-all duration-150 md:text-lg`}
		>
			{children}
		</button>
		// <>
		// 	{variant === 'primary' ? (
		// 		<button
		// 			{...props}
		// 			className={`lg transition-color max-w-full cursor-pointer rounded-md border border-ct-primary-500 bg-ct-primary-500 py-2 px-4 text-[16px] text-white duration-300 hover:bg-opacity-75 disabled:cursor-not-allowed disabled:border-ct-primary-300 disabled:bg-ct-primary-300 ${style}`}
		// 			disabled={disabled}
		// 		>
		// 			{children}
		// 		</button>
		// 	) : variant === 'secondary' ? (
		// 		<button
		// 			{...props}
		// 			className={`transition-color max-w-full cursor-pointer rounded-md border border-white bg-transparent py-2 px-4 text-[16px] text-white duration-300 hover:bg-white hover:bg-opacity-5 ${style}`}
		// 			disabled={disabled}
		// 		>
		// 			{children}
		// 		</button>
		// 	) : variant === 'tertiary' ? (
		// 		<button
		// 			{...props}
		// 			className={`transition-color max-w-full cursor-pointer rounded-md border border-ct-primary-500 bg-transparent py-2 px-4 text-[16px] text-ct-primary-500 duration-300 hover:bg-ct-primary-500 hover:bg-opacity-5 disabled:cursor-not-allowed disabled:border-ct-primary-300 disabled:text-ct-primary-300 ${style}`}
		// 			disabled={disabled}
		// 		>
		// 			{children}
		// 		</button>
		// 	) : variant === 'mini' ? (
		// 		<button
		// 			{...props}
		// 			className="transition-color max-w-fit cursor-default rounded-md border border-white bg-transparent py-2 px-4 text-[12px] text-white duration-300 hover:bg-white hover:bg-opacity-5 lg:cursor-pointer"
		// 		>
		// 			{children}
		// 		</button>
		// 	) : (
		// 		<button {...props}> {children}</button>
		// 	)}
		// </>
	);
};

export const Title = ({ type, children }) => {
	return (
		<>
			{type === 'h1' ? (
				<h1 className="text-6xl text-white">{children}</h1>
			) : type === 'h2' ? (
				<h2 className="text-5xl text-white">{children}</h2>
			) : type === 'h3' ? (
				<h3 className="text-4xl text-white">{children}</h3>
			) : type === 'h4' ? (
				<h4 className="text-3xl text-white">{children}</h4>
			) : type === 'h5' ? (
				<h5 className="text-2xl text-white">{children}</h5>
			) : type === 'h6' ? (
				<h6 className="text-xl text-white">{children}</h6>
			) : (
				''
			)}
		</>
	);
};


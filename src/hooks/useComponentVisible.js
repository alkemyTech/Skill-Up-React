import { useState, useRef, useEffect } from 'react';

const useComponentVisible = (initialIsVisible) => {
	const [isVisible, setIsVisible] = useState(initialIsVisible);
	const ref = useRef(null);
	const handlerClickOutside = (e) => {
		if (ref.current && !e.target.getAttribute('data-close')) {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handlerClickOutside, true);
		return () => {
			document.removeEventListener('click', handlerClickOutside, true);
		};
	});

	return { ref, isVisible, setIsVisible };
};

export { useComponentVisible };


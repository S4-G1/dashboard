import { readable } from 'svelte/store';

export const time = readable(new Date().getTime(), (set) => {
	const interval = setInterval(() => {
		set(new Date().getTime());
	}, 200);

	return function stop() {
		clearInterval(interval);
	};
});

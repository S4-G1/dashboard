const seconds_in_a_minute = 60;
const seconds_in_an_hour = seconds_in_a_minute * 60;

export function format(ms) {
	let s = Number.parseInt(ms / 1000);
	let [hours, r] = divmod(s, seconds_in_an_hour);
	s = r;
	let [minutes, b] = divmod(s, seconds_in_a_minute);
	s = b;
	return `${pad(hours)}:${pad(minutes)}:${pad(s)}`;
}

function pad(number, places = 2) {
	return String(number).padStart(places, '0');
}

function divmod(x, y) {
	return [Math.floor(x / y), x % y];
}

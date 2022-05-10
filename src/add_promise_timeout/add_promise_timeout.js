/**
 * Adds a timeout of `ms` milliseconds to the provided promise.
 *
 * @param {int} ms          The number of milliseconds before the promise should timeout.
 * @param {Promise} promise The promise.
 *
 * @returns {Promise} A new Promise object.
 */
export function add_promise_timeout(ms, promise) {
	let timeout = new Promise((resolve, reject) => {
		let id = setTimeout(() => {
			clearTimeout(id);
			reject('Timed out in ' + ms + 'ms.');
		}, ms);
	});

	return Promise.race([promise, timeout]);
}

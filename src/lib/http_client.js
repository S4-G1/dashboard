export class HTTPClient {
	private api_base;

	public constructor(api_base, options_builder, postprocessor) {
		this.api_base = api_base;
	}

	private async function send_http_request(ambigious_uri, http_method, body) {
		const complete_url = `${this.api_base}${ambigious_uri}`
		if (http_method == 'GET') {
			const res = await fetch(complete_url, {
				method: http_method
			})
		} else {
			const res = await fetch(complete_url, {
				method: http_method,
				body: JSON.stringify(body)
			})
		}
		
		const json = await res.json()
		return JSON.stringify(json)
	}

	async function post_request(ambigious_uri, body) {
		return await send_http_request(ambigious_uri, 'POST', body);
	}

	async function get_request(ambigious_uri) {
		return await send_http_request(ambigious_uri, 'GET');
	}

	async function delete_request(ambigious_uri) {
		return await send_http_request(ambigious_uri, 'DELETE');
	}
}

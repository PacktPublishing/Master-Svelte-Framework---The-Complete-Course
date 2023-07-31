/** @type {import('./$types').RequestHandler} */
export function GET(requestHandler) {
	return new Response(JSON.stringify({ hello: 'world' }), {
		status: 200,
		statusText: 'Fetch'
	});
}

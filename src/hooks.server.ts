import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	
	// Add CORS headers if needed
	if (event.url.pathname.startsWith('/_app/')) {
		response.headers.set('Access-Control-Allow-Origin', '*');
	}
	
	return response;
};
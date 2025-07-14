import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ platform }) => {
	return json({
		status: 'ok',
		timestamp: new Date().toISOString(),
		environment: 'cloudflare-workers',
		platform: platform ? 'cloudflare' : 'local'
	});
};
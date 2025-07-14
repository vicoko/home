import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		return json({
			message: 'Test endpoint working',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return json({
			error: error instanceof Error ? error.message : 'Unknown error'
		}, { status: 500 });
	}
};
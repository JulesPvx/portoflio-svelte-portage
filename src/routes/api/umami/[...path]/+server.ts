import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, fetch, getClientAddress }) => {
    try {
        const body = await request.text();

        const headers = new Headers();
        headers.set('Content-Type', 'application/json');

        const userAgent = request.headers.get('user-agent');
        if (userAgent) headers.set('User-Agent', userAgent);

        const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || getClientAddress();
        if (clientIp) headers.set('X-Forwarded-For', clientIp);

        const response = await fetch('http://umami-app:3000/api/send', {
            method: 'POST',
            headers,
            body
        });

        return new Response(response.body, { status: response.status });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal proxy error' }), { status: 500 });
    }
};
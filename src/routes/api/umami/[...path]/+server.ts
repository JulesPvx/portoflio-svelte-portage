import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ params, request, fetch }) => {
    try {
        const body = await request.text();

        // Pass headers along to maintain accurate tracking analytics
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');

        const userAgent = request.headers.get('user-agent');
        if (userAgent) headers.set('User-Agent', userAgent);

        // Forward client IP so metrics don't show all visitors as localhost
        const forwardedFor = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip');
        if (forwardedFor) headers.set('X-Forwarded-For', forwardedFor);

        const response = await fetch(`https://umami.julespvx.fr/${params.path}`, {
            method: 'POST',
            headers,
            body
        });

        return new Response(response.body, { status: response.status });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal tracking proxy error' }), { status: 500 });
    }
};
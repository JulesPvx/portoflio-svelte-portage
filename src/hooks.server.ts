import type {Handle} from '@sveltejs/kit';
import {paraglideMiddleware} from '$paraglide/server';

const NO_REDIRECT_PATHS = [
    '/api/*',
    '/static/*',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml',
    '/humans.txt',
    '/.well-known/*'
];

function isExcluded(pathname: string) {
    for (const pattern of NO_REDIRECT_PATHS) {
        if (pattern.endsWith('*')) {
            const prefix = pattern.slice(0, -1);
            if (pathname.startsWith(prefix)) return true;
        } else {
            if (pathname === pattern) return true;
            // allow matching with or without trailing slash
            if (pathname === pattern + '/') return true;
            if (pathname + '/' === pattern) return true;
        }
    }
    return false;
}

// creating a handle to use the paraglide middleware
const paraglideHandle: Handle = ({event, resolve}) => {
    const pathname = event.url.pathname;

    // If the current request matches an excluded path, skip paraglide entirely
    // which prevents any redirect behavior from occurring for these routes.
    if (isExcluded(pathname)) {
        return resolve(event);
    }

    return paraglideMiddleware(event.request, ({request: localizedRequest, locale}) => {
        event.request = localizedRequest;
        return resolve(event, {
            transformPageChunk: ({html}) => {
                return html.replace('%paraglide.lang%', locale);
            }
        });
    });
};

export const handle: Handle = paraglideHandle;
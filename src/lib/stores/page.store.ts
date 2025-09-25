import {writable} from 'svelte/store';

export const pageColor = writable<string | null>(null);

export interface ColoredLink {
    x: number;
    y: number;
    url: string;
    color: string;
    icon: string;
    onContainer: string | undefined;
}

export const openLink = writable<ColoredLink | null>(null);

export function setPageColor(color: string) {
    pageColor.set(color);
}

export function resetPageColor() {
    pageColor.set(null);
}
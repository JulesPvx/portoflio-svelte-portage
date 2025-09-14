import {writable} from 'svelte/store';

export const pageColor = writable<string | null>(null);

export function setPageColor(color: string) {
    pageColor.set(color);
}

export function resetPageColor() {
    pageColor.set(null);
}
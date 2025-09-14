export function hexToHSL(H: string): [number, number, number] {
	// Convert hex to RGB first
	let r = 0, g = 0, b = 0;
	if (H.length == 4) {
		r = parseInt(H[1] + H[1], 16);
		g = parseInt(H[2] + H[2], 16);
		b = parseInt(H[3] + H[3], 16);
	} else if (H.length == 7) {
		r = parseInt(H[1] + H[2], 16);
		g = parseInt(H[3] + H[4], 16);
		b = parseInt(H[5] + H[6], 16);
	}
	// Then to HSL
	r /= 255;
	g /= 255;
	b /= 255;
	const max = Math.max(r, g, b), min = Math.min(r, g, b);
	let h = 0, s, l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}
	return [h * 360, s * 100, l * 100];
}

export function adjustHSL(hsl: [number, number, number], saturationChange: number, lightnessChange: number): [number, number, number] {
	return [
		hsl[0], // Hue remains the same
		Math.max(0, Math.min(100, saturationChange)), // Ensure saturation is between 0 and 100
		Math.max(0, Math.min(100, lightnessChange)) // Ensure lightness is between 0 and 100
	];
}
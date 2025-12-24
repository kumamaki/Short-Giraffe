/**
 * iTerm2 Plist Generator
 * Converts color definitions to Apple plist XML format
 */

export interface RGBColor {
	red: number;
	green: number;
	blue: number;
	alpha?: number;
}

/**
 * Converts a hex color string to RGB float values (0.0-1.0)
 * Supports formats: #RGB, #RRGGBB, #RRGGBBAA
 */
export function hexToRgb(hex: string): RGBColor {
	// Remove # prefix if present
	const cleaned = hex.replace(/^#/, "");

	let r: number;
	let g: number;
	let b: number;
	let a = 1.0;

	if (cleaned.length === 3) {
		// #RGB → #RRGGBB
		r = Number.parseInt(cleaned[0] + cleaned[0], 16) / 255;
		g = Number.parseInt(cleaned[1] + cleaned[1], 16) / 255;
		b = Number.parseInt(cleaned[2] + cleaned[2], 16) / 255;
	} else if (cleaned.length === 6) {
		// #RRGGBB
		r = Number.parseInt(cleaned.slice(0, 2), 16) / 255;
		g = Number.parseInt(cleaned.slice(2, 4), 16) / 255;
		b = Number.parseInt(cleaned.slice(4, 6), 16) / 255;
	} else if (cleaned.length === 8) {
		// #RRGGBBAA
		r = Number.parseInt(cleaned.slice(0, 2), 16) / 255;
		g = Number.parseInt(cleaned.slice(2, 4), 16) / 255;
		b = Number.parseInt(cleaned.slice(4, 6), 16) / 255;
		a = Number.parseInt(cleaned.slice(6, 8), 16) / 255;
	} else {
		throw new Error(`Invalid hex color format: ${hex}`);
	}

	return { red: r, green: g, blue: b, alpha: a };
}

/**
 * Generates a single color dict entry for the plist
 */
function colorToPlistDict(color: RGBColor, indent: string): string {
	const lines = [
		`${indent}<dict>`,
		`${indent}\t<key>Alpha Component</key>`,
		`${indent}\t<real>${color.alpha ?? 1}</real>`,
		`${indent}\t<key>Blue Component</key>`,
		`${indent}\t<real>${color.blue}</real>`,
		`${indent}\t<key>Color Space</key>`,
		`${indent}\t<string>sRGB</string>`,
		`${indent}\t<key>Green Component</key>`,
		`${indent}\t<real>${color.green}</real>`,
		`${indent}\t<key>Red Component</key>`,
		`${indent}\t<real>${color.red}</real>`,
		`${indent}</dict>`,
	];
	return lines.join("\n");
}

/**
 * Generates a complete iTerm2 .itermcolors plist file
 */
export function generateItermPlist(colors: Record<string, RGBColor>): string {
	const header = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>`;

	const footer = `</dict>
</plist>
`;

	const entries: string[] = [];

	for (const [key, color] of Object.entries(colors)) {
		entries.push(`\t<key>${key}</key>`);
		entries.push(colorToPlistDict(color, "\t"));
	}

	return `${header}\n${entries.join("\n")}\n${footer}`;
}

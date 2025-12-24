/**
 * iTerm2 Color Mapping
 * Maps semantic palette colors to iTerm2 color keys
 */

import type { Semantic } from "../palette";
import { hexToRgb, type RGBColor } from "./plist";

/**
 * Creates the iTerm2 color mapping from semantic palette
 *
 * iTerm2 uses 26 color keys:
 * - Ansi 0-15: Standard terminal colors (8 normal + 8 bright)
 * - Interface colors: Background, Foreground, Cursor, Selection, etc.
 */
export function createItermColors(semantic: Semantic): Record<string, RGBColor> {
	return {
		// ANSI Colors 0-7 (Normal)
		"Ansi 0 Color": hexToRgb(semantic.terminalBlack),
		"Ansi 1 Color": hexToRgb(semantic.terminalRed),
		"Ansi 2 Color": hexToRgb(semantic.terminalGreen),
		"Ansi 3 Color": hexToRgb(semantic.terminalYellow),
		"Ansi 4 Color": hexToRgb(semantic.terminalBlue),
		"Ansi 5 Color": hexToRgb(semantic.terminalMagenta),
		"Ansi 6 Color": hexToRgb(semantic.terminalCyan),
		"Ansi 7 Color": hexToRgb(semantic.terminalWhite),

		// ANSI Colors 8-15 (Bright)
		"Ansi 8 Color": hexToRgb(semantic.terminalBrightBlack),
		"Ansi 9 Color": hexToRgb(semantic.terminalBrightRed),
		"Ansi 10 Color": hexToRgb(semantic.terminalBrightGreen),
		"Ansi 11 Color": hexToRgb(semantic.terminalBrightYellow),
		"Ansi 12 Color": hexToRgb(semantic.terminalBrightBlue),
		"Ansi 13 Color": hexToRgb(semantic.terminalBrightMagenta),
		"Ansi 14 Color": hexToRgb(semantic.terminalBrightCyan),
		"Ansi 15 Color": hexToRgb(semantic.terminalBrightWhite),

		// Interface Colors
		"Background Color": hexToRgb(semantic.terminalBackground),
		"Foreground Color": hexToRgb(semantic.terminalForeground),
		"Cursor Color": hexToRgb(semantic.editorCursor),
		"Cursor Text Color": hexToRgb(semantic.terminalBackground),
		"Selection Color": hexToRgb(semantic.editorSelection),
		"Selected Text Color": hexToRgb(semantic.editorForeground),
		"Bold Color": hexToRgb(semantic.terminalBrightWhite),
		"Link Color": hexToRgb(semantic.editorLink),
		"Badge Color": hexToRgb(semantic.badgeBackground),
		"Cursor Guide Color": hexToRgb(semantic.editorLineHighlight),
	};
}

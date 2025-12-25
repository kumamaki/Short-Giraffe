/**
 * Ghostty Terminal Theme Generator
 * Generates config-style theme files for Ghostty terminal
 */

import type { Semantic } from "../palette";

/**
 * Creates a Ghostty theme config string from semantic palette
 *
 * Ghostty themes use a simple key=value format:
 * - palette = N=#RRGGBB for ANSI colors 0-15
 * - background, foreground, cursor-color, etc. for UI colors
 */
export function createGhosttyTheme(semantic: Semantic): string {
	return `palette = 0=${semantic.terminalBlack}
palette = 1=${semantic.terminalRed}
palette = 2=${semantic.terminalGreen}
palette = 3=${semantic.terminalYellow}
palette = 4=${semantic.terminalBlue}
palette = 5=${semantic.terminalMagenta}
palette = 6=${semantic.terminalCyan}
palette = 7=${semantic.terminalWhite}
palette = 8=${semantic.terminalBrightBlack}
palette = 9=${semantic.terminalBrightRed}
palette = 10=${semantic.terminalBrightGreen}
palette = 11=${semantic.terminalBrightYellow}
palette = 12=${semantic.terminalBrightBlue}
palette = 13=${semantic.terminalBrightMagenta}
palette = 14=${semantic.terminalBrightCyan}
palette = 15=${semantic.terminalBrightWhite}
background = ${semantic.terminalBackground}
foreground = ${semantic.terminalForeground}
cursor-color = ${semantic.editorCursor}
cursor-text = ${semantic.terminalBackground}
selection-background = ${semantic.editorSelection}
selection-foreground = ${semantic.editorForeground}
`;
}

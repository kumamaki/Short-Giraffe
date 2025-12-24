/**
 * Warp Terminal Theme Generator
 * Generates YAML theme files for Warp terminal
 */

import type { Semantic } from "../palette";

/**
 * Creates a Warp theme YAML string from semantic palette
 *
 * Warp themes use:
 * - accent: UI highlight color
 * - background: Terminal background
 * - foreground: Main text color
 * - cursor: Cursor color (optional, defaults to accent)
 * - details: 'darker' or 'lighter'
 * - terminal_colors: normal (0-7) and bright (8-15) ANSI colors
 */
export function createWarpTheme(semantic: Semantic): string {
	return `accent: '${semantic.badgeBackground}'
background: '${semantic.terminalBackground}'
cursor: '${semantic.editorCursor}'
details: darker
foreground: '${semantic.terminalForeground}'
terminal_colors:
  bright:
    black: '${semantic.terminalBrightBlack}'
    blue: '${semantic.terminalBrightBlue}'
    cyan: '${semantic.terminalBrightCyan}'
    green: '${semantic.terminalBrightGreen}'
    magenta: '${semantic.terminalBrightMagenta}'
    red: '${semantic.terminalBrightRed}'
    white: '${semantic.terminalBrightWhite}'
    yellow: '${semantic.terminalBrightYellow}'
  normal:
    black: '${semantic.terminalBlack}'
    blue: '${semantic.terminalBlue}'
    cyan: '${semantic.terminalCyan}'
    green: '${semantic.terminalGreen}'
    magenta: '${semantic.terminalMagenta}'
    red: '${semantic.terminalRed}'
    white: '${semantic.terminalWhite}'
    yellow: '${semantic.terminalYellow}'
`;
}

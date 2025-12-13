/**
 * Zed Style Properties
 * UI colors for Zed editor
 */

import { primitives } from "../palette";
import type { ZedPlayer } from "../types";

// Zed UI style (non-syntax properties)
export const zedStyle: Record<string, string> = {
	background: primitives.gray850,
	"surface.background": primitives.gray950,
	border: primitives.gray675,
	"border.focused": primitives.accentLight,
	"border.selected": primitives.accentLight,
	"panel.background": primitives.gray925,
	created: primitives.cyan,
	deleted: primitives.pink, // Unified to VS Code value
	conflict: primitives.pink, // Unified to VS Code value
	ignored: primitives.gray250,
	modified: primitives.accentLight,
	"status_bar.background": primitives.gray825,
	"warning.background": primitives.warningBg,
	"warning.border": primitives.warningBg,
	"error.background": primitives.errorBg,
	"error.border": primitives.errorBg,
	hint: primitives.gray250,
	"hint.background": primitives.hintBg,
	"hint.border": primitives.hintBg,
	"editor.document_highlight.read_background": primitives.gray375,
	text: primitives.textZedPrimary,
	"text.muted": primitives.gray75,
	"text.placeholder": primitives.gray75,
	"text.disabled": primitives.gray250,
	"text.accent": primitives.accentLight,
	"editor.background": primitives.gray825,
	"editor.foreground": primitives.textZedPrimary,
	"editor.line_number": primitives.gray400,
	"editor.invisible": primitives.gray400,
	"editor.indent_guide": `${primitives.terminalWhiteBright}10`,
	"editor.wrap_guide": primitives.gray400,
	"editor.active_line.background": primitives.gray675,
	"editor.highlighted_line.background": primitives.gray600,
	"editor.gutter.background": primitives.gray825,
	"elevated_surface.background": primitives.gray950,
	"element.background": primitives.gray675,
	"element.hover": primitives.gray600,
	"ghost_element.hover": primitives.gray675,
	"tab.active_background": primitives.gray675,
	"tab.inactive_background": primitives.gray850,
	"tab_bar.background": primitives.gray825,
	"title_bar.background": primitives.gray950,
	"toolbar.background": primitives.gray825,
	predictive: primitives.gray75,
};

// Collaborative player colors
export const zedPlayers: ZedPlayer[] = [
	{
		cursor: primitives.playerBlue,
		background: primitives.playerBlue,
		selection: `${primitives.playerBlue.slice(0, 7)}3d`,
	},
	{
		cursor: primitives.playerRed,
		background: primitives.playerRed,
		selection: `${primitives.playerRed.slice(0, 7)}3d`,
	},
	{
		cursor: primitives.playerOrange,
		background: primitives.playerOrange,
		selection: `${primitives.playerOrange.slice(0, 7)}3d`,
	},
	{
		cursor: primitives.playerPurple,
		background: primitives.playerPurple,
		selection: `${primitives.playerPurple.slice(0, 7)}3d`,
	},
	{
		cursor: primitives.playerCyan,
		background: primitives.playerCyan,
		selection: `${primitives.playerCyan.slice(0, 7)}3d`,
	},
	{
		cursor: primitives.playerPink,
		background: primitives.playerPink,
		selection: `${primitives.playerPink.slice(0, 7)}3d`,
	},
	{
		cursor: primitives.playerYellow,
		background: primitives.playerYellow,
		selection: `${primitives.playerYellow.slice(0, 7)}3d`,
	},
	{
		cursor: primitives.playerGreen,
		background: primitives.playerGreen,
		selection: `${primitives.playerGreen.slice(0, 7)}3d`,
	},
];

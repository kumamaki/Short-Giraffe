/**
 * Zed Style Properties
 * UI colors for Zed editor
 */

import { semantic } from "../palette";
import type { ZedPlayer } from "../types";

// Zed UI style (non-syntax properties)
export const zedStyle: Record<string, string> = {
	background: semantic.zedBackground,
	"surface.background": semantic.zedSurface,
	border: semantic.zedBorder,
	"border.focused": semantic.zedBorderFocused,
	"border.selected": semantic.zedBorderFocused,
	"panel.background": semantic.zedPanel,
	created: semantic.zedCreated,
	deleted: semantic.zedDeleted,
	conflict: semantic.zedConflict,
	ignored: semantic.zedIgnored,
	modified: semantic.zedModified,
	"status_bar.background": semantic.zedStatusBar,
	"warning.background": semantic.zedWarningBg,
	"warning.border": semantic.zedWarningBg,
	"error.background": semantic.zedErrorBg,
	"error.border": semantic.zedErrorBg,
	hint: semantic.zedHint,
	"hint.background": semantic.zedHintBg,
	"hint.border": semantic.zedHintBg,
	"editor.document_highlight.read_background": semantic.zedDocHighlight,
	text: semantic.zedText,
	"text.muted": semantic.zedTextMuted,
	"text.placeholder": semantic.zedTextMuted,
	"text.disabled": semantic.zedTextDisabled,
	"text.accent": semantic.zedTextAccent,
	"editor.background": semantic.zedEditorBackground,
	"editor.foreground": semantic.zedEditorForeground,
	"editor.line_number": semantic.zedEditorLineNumber,
	"editor.invisible": semantic.zedEditorLineNumber,
	"editor.indent_guide": semantic.zedEditorIndentGuide,
	"editor.wrap_guide": semantic.zedEditorLineNumber,
	"editor.active_line.background": semantic.zedEditorActiveLine,
	"editor.highlighted_line.background": semantic.zedEditorHighlightedLine,
	"editor.gutter.background": semantic.zedEditorGutter,
	"elevated_surface.background": semantic.zedElevatedSurface,
	"element.background": semantic.zedElement,
	"element.hover": semantic.zedElementHover,
	"ghost_element.hover": semantic.zedGhostElementHover,
	"tab.active_background": semantic.zedTabActive,
	"tab.inactive_background": semantic.zedTabInactive,
	"tab_bar.background": semantic.zedTabBar,
	"title_bar.background": semantic.zedTitleBar,
	"toolbar.background": semantic.zedToolbar,
	predictive: semantic.zedPredictive,
};

// Collaborative player colors
export const zedPlayers: ZedPlayer[] = [
	{
		cursor: semantic.playerBlue,
		background: semantic.playerBlue,
		selection: `${semantic.playerBlue.slice(0, 7)}3d`,
	},
	{
		cursor: semantic.playerRed,
		background: semantic.playerRed,
		selection: `${semantic.playerRed.slice(0, 7)}3d`,
	},
	{
		cursor: semantic.playerOrange,
		background: semantic.playerOrange,
		selection: `${semantic.playerOrange.slice(0, 7)}3d`,
	},
	{
		cursor: semantic.playerPurple,
		background: semantic.playerPurple,
		selection: `${semantic.playerPurple.slice(0, 7)}3d`,
	},
	{
		cursor: semantic.playerCyan,
		background: semantic.playerCyan,
		selection: `${semantic.playerCyan.slice(0, 7)}3d`,
	},
	{
		cursor: semantic.playerPink,
		background: semantic.playerPink,
		selection: `${semantic.playerPink.slice(0, 7)}3d`,
	},
	{
		cursor: semantic.playerYellow,
		background: semantic.playerYellow,
		selection: `${semantic.playerYellow.slice(0, 7)}3d`,
	},
	{
		cursor: semantic.playerGreen,
		background: semantic.playerGreen,
		selection: `${semantic.playerGreen.slice(0, 7)}3d`,
	},
];

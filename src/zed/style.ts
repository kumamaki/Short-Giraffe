/**
 * Zed Style Properties
 * UI colors for Zed editor
 */

import { semantic } from "../palette";
import type { ZedPlayer } from "../types";

// Zed UI style (non-syntax properties)
export const zedStyle: Record<string, string> = {
	// -------------------------------------------------------------------------
	// Base surfaces
	// -------------------------------------------------------------------------
	background: semantic.zedBackground,
	"surface.background": semantic.zedSurface,
	"elevated_surface.background": semantic.zedElevatedSurface,
	"panel.background": semantic.zedPanel,
	"panel.focused_border": semantic.zedPanelFocusedBorder,
	"pane.focused_border": semantic.zedPaneFocusedBorder,

	// -------------------------------------------------------------------------
	// Borders
	// -------------------------------------------------------------------------
	border: semantic.zedBorder,
	"border.focused": semantic.zedBorderFocused,
	"border.selected": semantic.zedBorderFocused,
	"border.transparent": semantic.zedBorderTransparent,
	"border.variant": semantic.zedBorderVariant,
	"border.disabled": semantic.zedBorderDisabled,

	// -------------------------------------------------------------------------
	// Text
	// -------------------------------------------------------------------------
	text: semantic.zedText,
	"text.muted": semantic.zedTextMuted,
	"text.placeholder": semantic.zedTextMuted,
	"text.disabled": semantic.zedTextDisabled,
	"text.accent": semantic.zedTextAccent,
	"link_text.hover": semantic.zedLinkTextHover,

	// -------------------------------------------------------------------------
	// Icons
	// -------------------------------------------------------------------------
	icon: semantic.zedIcon,
	"icon.accent": semantic.zedIconAccent,
	"icon.disabled": semantic.zedIconDisabled,
	"icon.muted": semantic.zedIconMuted,
	"icon.placeholder": semantic.zedIconPlaceholder,

	// -------------------------------------------------------------------------
	// Elements
	// -------------------------------------------------------------------------
	"element.background": semantic.zedElement,
	"element.hover": semantic.zedElementHover,
	"element.active": semantic.zedElementActive,
	"element.disabled": semantic.zedElementDisabled,
	"element.selected": semantic.zedElementSelected,
	"ghost_element.hover": semantic.zedGhostElementHover,
	"ghost_element.active": semantic.zedGhostElementActive,
	"ghost_element.selected": semantic.zedGhostElementSelected,
	"ghost_element.disabled": semantic.zedGhostElementDisabled,

	// -------------------------------------------------------------------------
	// Editor
	// -------------------------------------------------------------------------
	"editor.background": semantic.zedEditorBackground,
	"editor.foreground": semantic.zedEditorForeground,
	"editor.line_number": semantic.zedEditorLineNumber,
	"editor.active_line_number": semantic.zedEditorActiveLineNumber,
	"editor.invisible": semantic.zedEditorLineNumber,
	"editor.indent_guide": semantic.zedEditorIndentGuide,
	"editor.wrap_guide": semantic.zedEditorLineNumber,
	"editor.active_line.background": semantic.zedEditorActiveLine,
	"editor.highlighted_line.background": semantic.zedEditorHighlightedLine,
	"editor.gutter.background": semantic.zedEditorGutter,
	"editor.document_highlight.read_background": semantic.zedDocHighlight,
	"editor.document_highlight.write_background": semantic.zedEditorDocHighlightWrite,
	"editor.subheader.background": semantic.zedEditorSubheaderBackground,

	// -------------------------------------------------------------------------
	// Tabs
	// -------------------------------------------------------------------------
	"tab.active_background": semantic.zedTabActive,
	"tab.inactive_background": semantic.zedTabInactive,
	"tab_bar.background": semantic.zedTabBar,

	// -------------------------------------------------------------------------
	// Title bar & toolbars
	// -------------------------------------------------------------------------
	"title_bar.background": semantic.zedTitleBar,
	"toolbar.background": semantic.zedToolbar,
	"status_bar.background": semantic.zedStatusBar,

	// -------------------------------------------------------------------------
	// Git status colors
	// -------------------------------------------------------------------------
	created: semantic.zedCreated,
	deleted: semantic.zedDeleted,
	conflict: semantic.zedConflict,
	ignored: semantic.zedIgnored,
	modified: semantic.zedModified,
	renamed: semantic.zedRenamed,
	hidden: semantic.zedHidden,
	unreachable: semantic.zedUnreachable,

	// -------------------------------------------------------------------------
	// Status indicators
	// -------------------------------------------------------------------------
	"warning.background": semantic.zedWarningBg,
	"warning.border": semantic.zedWarningBg,
	"error.background": semantic.zedErrorBg,
	"error.border": semantic.zedErrorBg,
	hint: semantic.zedHint,
	"hint.background": semantic.zedHintBg,
	"hint.border": semantic.zedHintBg,
	"success.background": semantic.zedSuccessBackground,
	"success.border": semantic.zedSuccessBorder,
	"info.background": semantic.zedInfoBackground,
	"info.border": semantic.zedInfoBorder,
	"hidden.background": semantic.zedHiddenBackground,
	"hidden.border": semantic.zedHiddenBorder,
	"renamed.background": semantic.zedRenamedBackground,
	"renamed.border": semantic.zedRenamedBorder,
	"unreachable.background": semantic.zedUnreachableBackground,
	"unreachable.border": semantic.zedUnreachableBorder,

	// -------------------------------------------------------------------------
	// Scrollbar
	// -------------------------------------------------------------------------
	"scrollbar.thumb.border": semantic.zedScrollbarThumbBorder,
	"scrollbar.thumb.hover_background": semantic.zedScrollbarThumbHover,
	"scrollbar.track.background": semantic.zedScrollbarTrackBackground,
	"scrollbar.track.border": semantic.zedScrollbarTrackBorder,

	// -------------------------------------------------------------------------
	// Terminal colors
	// -------------------------------------------------------------------------
	"terminal.background": semantic.zedTerminalBackground,
	"terminal.foreground": semantic.zedTerminalForeground,
	"terminal.ansi.black": semantic.zedTerminalBlack,
	"terminal.ansi.red": semantic.zedTerminalRed,
	"terminal.ansi.green": semantic.zedTerminalGreen,
	"terminal.ansi.yellow": semantic.zedTerminalYellow,
	"terminal.ansi.blue": semantic.zedTerminalBlue,
	"terminal.ansi.magenta": semantic.zedTerminalMagenta,
	"terminal.ansi.cyan": semantic.zedTerminalCyan,
	"terminal.ansi.white": semantic.zedTerminalWhite,
	"terminal.ansi.bright_black": semantic.zedTerminalBrightBlack,
	"terminal.ansi.bright_red": semantic.zedTerminalBrightRed,
	"terminal.ansi.bright_green": semantic.zedTerminalBrightGreen,
	"terminal.ansi.bright_yellow": semantic.zedTerminalBrightYellow,
	"terminal.ansi.bright_blue": semantic.zedTerminalBrightBlue,
	"terminal.ansi.bright_magenta": semantic.zedTerminalBrightMagenta,
	"terminal.ansi.bright_cyan": semantic.zedTerminalBrightCyan,
	"terminal.ansi.bright_white": semantic.zedTerminalBrightWhite,
	"terminal.ansi.dim_black": semantic.zedTerminalDimBlack,
	"terminal.ansi.dim_red": semantic.zedTerminalDimRed,
	"terminal.ansi.dim_green": semantic.zedTerminalDimGreen,
	"terminal.ansi.dim_yellow": semantic.zedTerminalDimYellow,
	"terminal.ansi.dim_blue": semantic.zedTerminalDimBlue,
	"terminal.ansi.dim_magenta": semantic.zedTerminalDimMagenta,
	"terminal.ansi.dim_cyan": semantic.zedTerminalDimCyan,
	"terminal.ansi.dim_white": semantic.zedTerminalDimWhite,

	// -------------------------------------------------------------------------
	// Misc
	// -------------------------------------------------------------------------
	predictive: semantic.zedPredictive,
	"drop_target.background": semantic.zedDropTarget,
	"search.match_background": semantic.zedSearchMatch,
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

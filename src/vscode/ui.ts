/**
 * VS Code UI Colors
 * Maps all 207+ UI color properties to palette values
 */

import { primitives } from "../palette";

export const vscodeColors: Record<string, string> = {
	// -------------------------------------------------------------------------
	// Base colors
	// -------------------------------------------------------------------------
	"sash.hoverBorder": primitives.accent,
	"icon.foreground": primitives.gray50,
	errorForeground: primitives.errorDark,
	focusBorder: primitives.gray275,
	foreground: primitives.textPrimaryAlt,
	"widget.shadow": primitives.gray775,
	"selection.background": `${primitives.gray500}fd`,

	// -------------------------------------------------------------------------
	// Text
	// -------------------------------------------------------------------------
	"textBlockQuote.background": primitives.gray550,
	"textLink.foreground": primitives.cyan,
	"textPreformat.foreground": primitives.blueGit,
	"textLink.activeForeground": primitives.blueLink,

	// -------------------------------------------------------------------------
	// Buttons
	// -------------------------------------------------------------------------
	"button.background": primitives.gray300,
	"button.border": primitives.gray300,
	"button.foreground": primitives.textPrimaryAlt,
	"button.hoverBackground": primitives.gray300,
	"button.secondaryBackground": primitives.gray300,
	"button.secondaryForeground": primitives.gray50,

	// -------------------------------------------------------------------------
	// Checkbox
	// -------------------------------------------------------------------------
	"checkbox.background": primitives.gray725,
	"checkbox.foreground": primitives.textPrimaryAlt,

	// -------------------------------------------------------------------------
	// Dropdown
	// -------------------------------------------------------------------------
	"dropdown.background": primitives.gray800,
	"dropdown.foreground": primitives.gray100,
	"dropdown.border": primitives.gray350,

	// -------------------------------------------------------------------------
	// Input
	// -------------------------------------------------------------------------
	"input.background": primitives.gray800,
	"input.border": primitives.gray300,
	"input.foreground": primitives.gray100,
	"input.placeholderForeground": primitives.gray225,
	"inputOption.activeBorder": primitives.accent,
	"inputValidation.errorBackground": primitives.gray725,
	"inputValidation.errorBorder": primitives.errorBright,
	"inputValidation.infoBackground": primitives.gray725,
	"inputValidation.infoBorder": primitives.infoCyan,
	"inputValidation.warningBackground": primitives.gray725,
	"inputValidation.warningBorder": primitives.warningYellow,

	// -------------------------------------------------------------------------
	// Scrollbar
	// -------------------------------------------------------------------------
	"scrollbar.shadow": primitives.gray575,
	"scrollbarSlider.background": primitives.black20,
	"scrollbarSlider.hoverBackground": primitives.black30,
	"scrollbarSlider.activeBackground": primitives.black40,

	// -------------------------------------------------------------------------
	// Minimap
	// -------------------------------------------------------------------------
	"minimapSlider.background": primitives.black30,
	"minimapSlider.hoverBackground": primitives.black40,
	"minimapSlider.activeBackground": primitives.black50,

	// -------------------------------------------------------------------------
	// Badge
	// -------------------------------------------------------------------------
	"badge.background": primitives.accent,
	"badge.foreground": primitives.gray725,

	// -------------------------------------------------------------------------
	// Progress bar
	// -------------------------------------------------------------------------
	"progressBar.background": primitives.accent,

	// -------------------------------------------------------------------------
	// Lists
	// -------------------------------------------------------------------------
	"list.activeSelectionBackground": primitives.gray575,
	"list.activeSelectionForeground": primitives.textPrimary,
	"list.focusBackground": primitives.gray650,
	"list.focusForeground": primitives.accent,
	"list.highlightForeground": primitives.accent,
	"list.hoverBackground": primitives.gray650,
	"list.hoverForeground": primitives.orange,
	"list.inactiveSelectionBackground": primitives.gray650,
	"list.inactiveSelectionForeground": primitives.textLight,
	"list.invalidItemForeground": primitives.gray225,

	// -------------------------------------------------------------------------
	// Activity bar
	// -------------------------------------------------------------------------
	"activityBar.background": primitives.gray900,
	"activityBar.foreground": primitives.accent,
	"activityBar.border": primitives.gray900,
	"activityBar.inactiveForeground": primitives.gray300,
	"activityBarBadge.background": primitives.accent,
	"activityBarBadge.foreground": primitives.gray725,

	// -------------------------------------------------------------------------
	// Sidebar
	// -------------------------------------------------------------------------
	"sideBar.background": primitives.gray750,
	"sideBar.foreground": primitives.gray50,
	"sideBar.border": primitives.gray900,
	"sideBarTitle.foreground": primitives.accentLight,
	"sideBarSectionHeader.background": primitives.gray750,
	"sideBarSectionHeader.foreground": primitives.accentLight,

	// -------------------------------------------------------------------------
	// Editor groups
	// -------------------------------------------------------------------------
	"editorGroup.border": primitives.gray900,
	"editorGroup.emptyBackground": primitives.gray650,
	"editorGroupHeader.noTabsBackground": primitives.gray725,
	"editorGroupHeader.tabsBackground": primitives.gray725,
	"editorGroupHeader.tabsBorder": primitives.gray700,
	"editorGroup.dropBackground": `${primitives.gray900}20`,

	// -------------------------------------------------------------------------
	// Tabs
	// -------------------------------------------------------------------------
	"tab.activeBackground": primitives.gray575,
	"tab.activeForeground": primitives.accent,
	"tab.border": primitives.gray725,
	"tab.activeBorderTop": primitives.accent,
	"tab.unfocusedActiveBorderTop": primitives.textPrimaryAlt,
	"tab.inactiveBackground": primitives.gray725,
	"tab.inactiveForeground": primitives.gray175,
	"tab.unfocusedInactiveBackground": primitives.gray725,
	"tab.unfocusedActiveBackground": primitives.gray725,
	"tab.unfocusedActiveForeground": primitives.gray175,
	"tab.unfocusedInactiveForeground": primitives.gray175,

	// -------------------------------------------------------------------------
	// Editor
	// -------------------------------------------------------------------------
	"editor.background": primitives.gray725,
	"editor.foreground": primitives.textPrimary,
	"editorLineNumber.foreground": primitives.gray300,
	"editorLineNumber.activeForeground": primitives.gray100,
	"editorCursor.foreground": primitives.accent,
	"editor.selectionBackground": primitives.gray500,
	"editor.inactiveSelectionBackground": primitives.gray525,
	"editor.selectionHighlightBackground": primitives.gray575,
	"editor.selectionHighlightBorder": primitives.gray425,
	"editor.wordHighlightBackground": primitives.gray525,
	"editor.wordHighlightStrongBackground": `${primitives.accent}33`,
	"editor.findMatchBackground": `${primitives.accent}0d`,
	"editor.findMatchBorder": primitives.accent,
	"editor.findMatchHighlightBackground": `${primitives.accent}0d`,
	"editor.findMatchHighlightBorder": `${primitives.accent}59`,
	"editor.findRangeHighlightBackground": primitives.gray525,
	"editor.findRangeHighlightBorder": `${primitives.gray725}00`,
	"editor.lineHighlightBackground": primitives.gray575,
	"editorInlayHint.foreground": `${primitives.blueSky}BB`,
	"editorInlayHint.background": primitives.transparent,
	"editorLink.activeForeground": primitives.cyan,
	"editor.rangeHighlightBackground": primitives.gray700,
	"editorWhitespace.foreground": `${primitives.gray175}66`,
	"editorIndentGuide.background": primitives.gray575,
	"editorIndentGuide.activeBackground": `${primitives.gray175}b3`,
	"editorRuler.foreground": primitives.gray575,
	"editorCodeLens.foreground": primitives.gray200,
	"editorBracketMatch.background": primitives.gray575,
	"editorBracketMatch.border": `${primitives.gray175}99`,

	// -------------------------------------------------------------------------
	// Editor overview ruler
	// -------------------------------------------------------------------------
	"editorOverviewRuler.border": primitives.gray700,
	"editorOverviewRuler.modifiedForeground": `${primitives.blueMod}99`,
	"editorOverviewRuler.addedForeground": `${primitives.success}99`,
	"editorOverviewRuler.deletedForeground": primitives.errorGutter,
	"editorOverviewRuler.errorForeground": primitives.errorBright,
	"editorOverviewRuler.warningForeground": primitives.accent,

	// -------------------------------------------------------------------------
	// Diff editor
	// -------------------------------------------------------------------------
	"diffEditor.insertedTextBackground": primitives.successDiff,
	"diffEditor.removedTextBackground": primitives.errorDiff,

	// -------------------------------------------------------------------------
	// Editor widget
	// -------------------------------------------------------------------------
	"editorWidget.background": primitives.gray550,
	"editorSuggestWidget.background": primitives.gray475,
	"editorSuggestWidget.border": primitives.gray875,
	"editorSuggestWidget.highlightForeground": primitives.error,
	"editorSuggestWidget.selectedBackground": primitives.successHighlight,
	"editorSuggestWidget.selectedForeground": primitives.textPrimary,
	"editorHoverWidget.background": primitives.gray550,
	"editorHoverWidget.border": primitives.gray875,

	// -------------------------------------------------------------------------
	// Debug
	// -------------------------------------------------------------------------
	"debugExceptionWidget.border": primitives.gray700,
	"debugExceptionWidget.background": primitives.gray550,
	"editorMarkerNavigation.background": primitives.gray550,

	// -------------------------------------------------------------------------
	// Peek view
	// -------------------------------------------------------------------------
	"peekView.border": primitives.gray700,
	"peekViewEditor.background": primitives.gray550,
	"peekViewEditor.matchHighlightBackground": `${primitives.accent}33`,
	"peekViewResult.background": primitives.gray550,
	"peekViewResult.fileForeground": primitives.gray175,
	"peekViewResult.matchHighlightBackground": `${primitives.accent}33`,
	"peekViewTitle.background": primitives.gray550,
	"peekViewTitleDescription.foreground": primitives.gray175,
	"peekViewTitleLabel.foreground": primitives.gray175,

	// -------------------------------------------------------------------------
	// Panel
	// -------------------------------------------------------------------------
	"panel.background": primitives.gray725,
	"panel.border": primitives.gray450,
	"panelTitle.activeBorder": primitives.gray325,
	"panelTitle.activeForeground": primitives.gray25,
	"panelTitle.inactiveForeground": primitives.gray175,

	// -------------------------------------------------------------------------
	// Notifications
	// -------------------------------------------------------------------------
	"notifications.background": primitives.gray625,

	// -------------------------------------------------------------------------
	// Status bar
	// -------------------------------------------------------------------------
	"statusBar.background": primitives.accentLight,
	"statusBar.foreground": primitives.gray800,
	"statusBar.border": primitives.gray700,
	"statusBar.debuggingBackground": primitives.accent,
	"statusBar.debuggingForeground": primitives.gray725,
	"statusBar.noFolderBackground": primitives.gray550,
	"statusBarItem.activeBackground": primitives.black50,
	"statusBarItem.hoverBackground": primitives.accentMuted,
	"statusBarItem.prominentBackground": primitives.accent,
	"statusBarItem.prominentHoverBackground": primitives.black30,

	// -------------------------------------------------------------------------
	// Title bar
	// -------------------------------------------------------------------------
	"titleBar.activeBackground": primitives.gray750,
	"titleBar.activeForeground": primitives.gray25,
	"titleBar.inactiveBackground": primitives.gray725,
	"titleBar.inactiveForeground": primitives.gray175,
	"titleBar.border": primitives.gray700,

	// -------------------------------------------------------------------------
	// Extension buttons
	// -------------------------------------------------------------------------
	"extensionButton.prominentForeground": primitives.gray725,
	"extensionButton.prominentBackground": primitives.accent,
	"extensionButton.prominentHoverBackground": "#fac761",

	// -------------------------------------------------------------------------
	// Debug toolbar
	// -------------------------------------------------------------------------
	"debugToolBar.background": primitives.gray550,

	// -------------------------------------------------------------------------
	// Walkthrough
	// -------------------------------------------------------------------------
	"walkThrough.embeddedEditorBackground": primitives.gray550,

	// -------------------------------------------------------------------------
	// Settings
	// -------------------------------------------------------------------------
	"settings.headerForeground": primitives.gray25,
	"settings.modifiedItemIndicator": primitives.blueMod,

	// -------------------------------------------------------------------------
	// Terminal
	// -------------------------------------------------------------------------
	"terminal.background": primitives.gray725,
	"terminal.foreground": primitives.gray25,
	"terminal.ansiBlack": primitives.gray700,
	"terminal.ansiRed": primitives.errorTerminal,
	"terminal.ansiGreen": primitives.success,
	"terminal.ansiYellow": primitives.warningTerminal,
	"terminal.ansiBlue": primitives.blueInfo,
	"terminal.ansiMagenta": primitives.terminalMagenta,
	"terminal.ansiCyan": primitives.terminalCyan,
	"terminal.ansiWhite": primitives.terminalWhite,
	"terminal.ansiBrightBlack": primitives.terminalBlackBright,
	"terminal.ansiBrightRed": primitives.errorTerminalBright,
	"terminal.ansiBrightGreen": primitives.successBright,
	"terminal.ansiBrightYellow": primitives.warningYellow,
	"terminal.ansiBrightBlue": primitives.infoBright,
	"terminal.ansiBrightMagenta": primitives.terminalMagentaBright,
	"terminal.ansiBrightCyan": primitives.terminalCyanBright,
	"terminal.ansiBrightWhite": primitives.terminalWhiteBright,

	// -------------------------------------------------------------------------
	// Editor errors/warnings
	// -------------------------------------------------------------------------
	"editorError.foreground": primitives.error,
	"editorWarning.foreground": primitives.accentMuted,
	"editorInfo.foreground": primitives.gray300,

	// -------------------------------------------------------------------------
	// Git decorations
	// -------------------------------------------------------------------------
	"gitDecoration.modifiedResourceForeground": primitives.blueGit,
	"gitDecoration.addedResourceForeground": primitives.blueGit,
	"gitDecoration.stageModifiedResourceForeground": primitives.blueGit,
	"gitDecoration.deletedResourceForeground": primitives.pink,
	"gitDecoration.untrackedResourceForeground": primitives.cyan,
	"gitDecoration.ignoredResourceForeground": primitives.gray100,
	"gitDecoration.conflictingResourceForeground": primitives.textYellow,
	"gitDecoration.submoduleResourceForeground": primitives.purpleSubmodule,

	// -------------------------------------------------------------------------
	// Editor gutter
	// -------------------------------------------------------------------------
	"editorGutter.background": primitives.gray725,
	"editorGutter.modifiedBackground": primitives.accentDark,
	"editorGutter.addedBackground": `${primitives.success}99`,
	"editorGutter.deletedBackground": primitives.errorGutter,

	// -------------------------------------------------------------------------
	// Quick input
	// -------------------------------------------------------------------------
	"quickInput.background": primitives.gray575,
	"pickerGroup.border": primitives.gray100,
	"pickerGroup.foreground": primitives.gray100,
	"quickInputList.focusBackground": primitives.gray575,
	"quickInputList.focusForeground": primitives.accentMuted,
	"quickInputList.focusIconForeground": primitives.cyan,
};

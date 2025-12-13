/**
 * VS Code UI Colors
 * Maps all 207+ UI color properties to semantic values
 */

import { semantic } from "../palette";

export const vscodeColors: Record<string, string> = {
	// -------------------------------------------------------------------------
	// Base colors
	// -------------------------------------------------------------------------
	"sash.hoverBorder": semantic.sashHover,
	"icon.foreground": semantic.iconForeground,
	errorForeground: semantic.errorForeground,
	focusBorder: semantic.focusBorder,
	foreground: semantic.foreground,
	"widget.shadow": semantic.widgetShadow,
	"selection.background": semantic.selectionBackground,

	// -------------------------------------------------------------------------
	// Text
	// -------------------------------------------------------------------------
	"textBlockQuote.background": semantic.textBlockQuote,
	"textLink.foreground": semantic.textLink,
	"textPreformat.foreground": semantic.textPreformat,
	"textLink.activeForeground": semantic.textLinkActive,

	// -------------------------------------------------------------------------
	// Buttons
	// -------------------------------------------------------------------------
	"button.background": semantic.buttonBackground,
	"button.border": semantic.buttonBorder,
	"button.foreground": semantic.buttonForeground,
	"button.hoverBackground": semantic.buttonHover,
	"button.secondaryBackground": semantic.buttonSecondary,
	"button.secondaryForeground": semantic.buttonSecondaryForeground,

	// -------------------------------------------------------------------------
	// Checkbox
	// -------------------------------------------------------------------------
	"checkbox.background": semantic.checkboxBackground,
	"checkbox.foreground": semantic.checkboxForeground,

	// -------------------------------------------------------------------------
	// Dropdown
	// -------------------------------------------------------------------------
	"dropdown.background": semantic.dropdownBackground,
	"dropdown.foreground": semantic.dropdownForeground,
	"dropdown.border": semantic.dropdownBorder,

	// -------------------------------------------------------------------------
	// Input
	// -------------------------------------------------------------------------
	"input.background": semantic.inputBackground,
	"input.border": semantic.inputBorder,
	"input.foreground": semantic.inputForeground,
	"input.placeholderForeground": semantic.inputPlaceholder,
	"inputOption.activeBorder": semantic.inputOptionActive,
	"inputValidation.errorBackground": semantic.inputValidationError,
	"inputValidation.errorBorder": semantic.inputValidationErrorBorder,
	"inputValidation.infoBackground": semantic.inputValidationInfo,
	"inputValidation.infoBorder": semantic.inputValidationInfoBorder,
	"inputValidation.warningBackground": semantic.inputValidationWarning,
	"inputValidation.warningBorder": semantic.inputValidationWarningBorder,

	// -------------------------------------------------------------------------
	// Scrollbar
	// -------------------------------------------------------------------------
	"scrollbar.shadow": semantic.scrollbarShadow,
	"scrollbarSlider.background": semantic.scrollbarSlider,
	"scrollbarSlider.hoverBackground": semantic.scrollbarSliderHover,
	"scrollbarSlider.activeBackground": semantic.scrollbarSliderActive,

	// -------------------------------------------------------------------------
	// Minimap
	// -------------------------------------------------------------------------
	"minimapSlider.background": semantic.minimapSlider,
	"minimapSlider.hoverBackground": semantic.minimapSliderHover,
	"minimapSlider.activeBackground": semantic.minimapSliderActive,

	// -------------------------------------------------------------------------
	// Badge
	// -------------------------------------------------------------------------
	"badge.background": semantic.badgeBackground,
	"badge.foreground": semantic.badgeForeground,

	// -------------------------------------------------------------------------
	// Progress bar
	// -------------------------------------------------------------------------
	"progressBar.background": semantic.progressBar,

	// -------------------------------------------------------------------------
	// Lists
	// -------------------------------------------------------------------------
	"list.activeSelectionBackground": semantic.listActiveSelection,
	"list.activeSelectionForeground": semantic.listActiveSelectionForeground,
	"list.focusBackground": semantic.listFocusBackground,
	"list.focusForeground": semantic.listFocusForeground,
	"list.highlightForeground": semantic.listHighlight,
	"list.hoverBackground": semantic.listHoverBackground,
	"list.hoverForeground": semantic.listHoverForeground,
	"list.inactiveSelectionBackground": semantic.listInactiveSelection,
	"list.inactiveSelectionForeground": semantic.listInactiveSelectionForeground,
	"list.invalidItemForeground": semantic.listInvalidItem,

	// -------------------------------------------------------------------------
	// Activity bar
	// -------------------------------------------------------------------------
	"activityBar.background": semantic.activityBarBackground,
	"activityBar.foreground": semantic.activityBarForeground,
	"activityBar.border": semantic.activityBarBorder,
	"activityBar.inactiveForeground": semantic.activityBarInactive,
	"activityBarBadge.background": semantic.activityBarBadge,
	"activityBarBadge.foreground": semantic.activityBarBadgeForeground,

	// -------------------------------------------------------------------------
	// Sidebar
	// -------------------------------------------------------------------------
	"sideBar.background": semantic.sidebarBackground,
	"sideBar.foreground": semantic.sidebarForeground,
	"sideBar.border": semantic.sidebarBorder,
	"sideBarTitle.foreground": semantic.sidebarTitle,
	"sideBarSectionHeader.background": semantic.sidebarBackground,
	"sideBarSectionHeader.foreground": semantic.sidebarSectionHeader,

	// -------------------------------------------------------------------------
	// Editor groups
	// -------------------------------------------------------------------------
	"editorGroup.border": semantic.tabGroupBorder,
	"editorGroup.emptyBackground": semantic.tabGroupEmpty,
	"editorGroupHeader.noTabsBackground": semantic.editorBackground,
	"editorGroupHeader.tabsBackground": semantic.editorBackground,
	"editorGroupHeader.tabsBorder": semantic.tabGroupHeaderBorder,
	"editorGroup.dropBackground": semantic.tabGroupDrop,

	// -------------------------------------------------------------------------
	// Tabs
	// -------------------------------------------------------------------------
	"tab.activeBackground": semantic.tabActiveBackground,
	"tab.activeForeground": semantic.tabActiveForeground,
	"tab.border": semantic.tabBorder,
	"tab.activeBorderTop": semantic.tabActiveBorderTop,
	"tab.unfocusedActiveBorderTop": semantic.tabUnfocusedActiveBorderTop,
	"tab.inactiveBackground": semantic.tabInactiveBackground,
	"tab.inactiveForeground": semantic.tabInactiveForeground,
	"tab.unfocusedInactiveBackground": semantic.tabInactiveBackground,
	"tab.unfocusedActiveBackground": semantic.tabInactiveBackground,
	"tab.unfocusedActiveForeground": semantic.tabInactiveForeground,
	"tab.unfocusedInactiveForeground": semantic.tabInactiveForeground,

	// -------------------------------------------------------------------------
	// Editor
	// -------------------------------------------------------------------------
	"editor.background": semantic.editorBackground,
	"editor.foreground": semantic.editorForeground,
	"editorLineNumber.foreground": semantic.editorLineNumber,
	"editorLineNumber.activeForeground": semantic.editorLineNumberActive,
	"editorCursor.foreground": semantic.editorCursor,
	"editor.selectionBackground": semantic.editorSelection,
	"editor.inactiveSelectionBackground": semantic.editorSelectionInactive,
	"editor.selectionHighlightBackground": semantic.editorSelectionHighlight,
	"editor.selectionHighlightBorder": semantic.editorSelectionHighlightBorder,
	"editor.wordHighlightBackground": semantic.editorWordHighlight,
	"editor.wordHighlightStrongBackground": semantic.editorWordHighlightStrong,
	"editor.findMatchBackground": semantic.editorFindMatch,
	"editor.findMatchBorder": semantic.editorFindMatchBorder,
	"editor.findMatchHighlightBackground": semantic.editorFindMatchHighlight,
	"editor.findMatchHighlightBorder": semantic.editorFindMatchHighlightBorder,
	"editor.findRangeHighlightBackground": semantic.editorFindRange,
	"editor.findRangeHighlightBorder": `${semantic.editorBackground}00`,
	"editor.lineHighlightBackground": semantic.editorLineHighlight,
	"editorInlayHint.foreground": semantic.editorInlayHint,
	"editorInlayHint.background": semantic.editorInlayHintBg,
	"editorLink.activeForeground": semantic.editorLink,
	"editor.rangeHighlightBackground": semantic.editorRangeHighlight,
	"editorWhitespace.foreground": semantic.editorWhitespace,
	"editorIndentGuide.background": semantic.editorIndentGuide,
	"editorIndentGuide.activeBackground": semantic.editorIndentGuideActive,
	"editorRuler.foreground": semantic.editorRuler,
	"editorCodeLens.foreground": semantic.editorCodeLens,
	"editorBracketMatch.background": semantic.editorBracketMatch,
	"editorBracketMatch.border": semantic.editorBracketMatchBorder,

	// -------------------------------------------------------------------------
	// Editor overview ruler
	// -------------------------------------------------------------------------
	"editorOverviewRuler.border": semantic.overviewRulerBorder,
	"editorOverviewRuler.modifiedForeground": semantic.overviewRulerModified,
	"editorOverviewRuler.addedForeground": semantic.overviewRulerAdded,
	"editorOverviewRuler.deletedForeground": semantic.overviewRulerDeleted,
	"editorOverviewRuler.errorForeground": semantic.overviewRulerError,
	"editorOverviewRuler.warningForeground": semantic.overviewRulerWarning,

	// -------------------------------------------------------------------------
	// Diff editor
	// -------------------------------------------------------------------------
	"diffEditor.insertedTextBackground": semantic.diffInserted,
	"diffEditor.removedTextBackground": semantic.diffRemoved,

	// -------------------------------------------------------------------------
	// Editor widget
	// -------------------------------------------------------------------------
	"editorWidget.background": semantic.widgetBackground,
	"editorSuggestWidget.background": semantic.suggestWidgetBackground,
	"editorSuggestWidget.border": semantic.suggestWidgetBorder,
	"editorSuggestWidget.highlightForeground": semantic.suggestWidgetHighlight,
	"editorSuggestWidget.selectedBackground": semantic.suggestWidgetSelected,
	"editorSuggestWidget.selectedForeground": semantic.editorForeground,
	"editorHoverWidget.background": semantic.widgetBackground,
	"editorHoverWidget.border": semantic.widgetBorder,

	// -------------------------------------------------------------------------
	// Debug
	// -------------------------------------------------------------------------
	"debugExceptionWidget.border": semantic.debugExceptionBorder,
	"debugExceptionWidget.background": semantic.debugExceptionBackground,
	"editorMarkerNavigation.background": semantic.widgetBackground,

	// -------------------------------------------------------------------------
	// Peek view
	// -------------------------------------------------------------------------
	"peekView.border": semantic.peekViewBorder,
	"peekViewEditor.background": semantic.peekViewBackground,
	"peekViewEditor.matchHighlightBackground": semantic.peekViewMatchHighlight,
	"peekViewResult.background": semantic.peekViewResult,
	"peekViewResult.fileForeground": semantic.peekViewResultFile,
	"peekViewResult.matchHighlightBackground": semantic.peekViewMatchHighlight,
	"peekViewTitle.background": semantic.peekViewTitle,
	"peekViewTitleDescription.foreground": semantic.peekViewTitleDescription,
	"peekViewTitleLabel.foreground": semantic.peekViewTitleLabel,

	// -------------------------------------------------------------------------
	// Panel
	// -------------------------------------------------------------------------
	"panel.background": semantic.panelBackground,
	"panel.border": semantic.panelBorder,
	"panelTitle.activeBorder": semantic.panelTitleActiveBorder,
	"panelTitle.activeForeground": semantic.panelTitleActive,
	"panelTitle.inactiveForeground": semantic.panelTitleInactive,

	// -------------------------------------------------------------------------
	// Notifications
	// -------------------------------------------------------------------------
	"notifications.background": semantic.notificationBackground,

	// -------------------------------------------------------------------------
	// Status bar
	// -------------------------------------------------------------------------
	"statusBar.background": semantic.statusBarBackground,
	"statusBar.foreground": semantic.statusBarForeground,
	"statusBar.border": semantic.statusBarBorder,
	"statusBar.debuggingBackground": semantic.statusBarDebuggingBackground,
	"statusBar.debuggingForeground": semantic.statusBarDebuggingForeground,
	"statusBar.noFolderBackground": semantic.statusBarNoFolder,
	"statusBarItem.activeBackground": semantic.statusBarItemActive,
	"statusBarItem.hoverBackground": semantic.statusBarItemHover,
	"statusBarItem.prominentBackground": semantic.statusBarItemProminent,
	"statusBarItem.prominentHoverBackground": semantic.statusBarItemProminentHover,

	// -------------------------------------------------------------------------
	// Title bar
	// -------------------------------------------------------------------------
	"titleBar.activeBackground": semantic.titleBarActive,
	"titleBar.activeForeground": semantic.titleBarActiveForeground,
	"titleBar.inactiveBackground": semantic.titleBarInactive,
	"titleBar.inactiveForeground": semantic.titleBarInactiveForeground,
	"titleBar.border": semantic.titleBarBorder,

	// -------------------------------------------------------------------------
	// Extension buttons
	// -------------------------------------------------------------------------
	"extensionButton.prominentForeground": semantic.extensionButtonForeground,
	"extensionButton.prominentBackground": semantic.extensionButtonBackground,
	"extensionButton.prominentHoverBackground": semantic.extensionButtonHover,

	// -------------------------------------------------------------------------
	// Debug toolbar
	// -------------------------------------------------------------------------
	"debugToolBar.background": semantic.debugToolbar,

	// -------------------------------------------------------------------------
	// Walkthrough
	// -------------------------------------------------------------------------
	"walkThrough.embeddedEditorBackground": semantic.widgetBackground,

	// -------------------------------------------------------------------------
	// Settings
	// -------------------------------------------------------------------------
	"settings.headerForeground": semantic.settingsHeader,
	"settings.modifiedItemIndicator": semantic.settingsModified,

	// -------------------------------------------------------------------------
	// Terminal
	// -------------------------------------------------------------------------
	"terminal.background": semantic.terminalBackground,
	"terminal.foreground": semantic.terminalForeground,
	"terminal.ansiBlack": semantic.terminalBlack,
	"terminal.ansiRed": semantic.terminalRed,
	"terminal.ansiGreen": semantic.terminalGreen,
	"terminal.ansiYellow": semantic.terminalYellow,
	"terminal.ansiBlue": semantic.terminalBlue,
	"terminal.ansiMagenta": semantic.terminalMagenta,
	"terminal.ansiCyan": semantic.terminalCyan,
	"terminal.ansiWhite": semantic.terminalWhite,
	"terminal.ansiBrightBlack": semantic.terminalBrightBlack,
	"terminal.ansiBrightRed": semantic.terminalBrightRed,
	"terminal.ansiBrightGreen": semantic.terminalBrightGreen,
	"terminal.ansiBrightYellow": semantic.terminalBrightYellow,
	"terminal.ansiBrightBlue": semantic.terminalBrightBlue,
	"terminal.ansiBrightMagenta": semantic.terminalBrightMagenta,
	"terminal.ansiBrightCyan": semantic.terminalBrightCyan,
	"terminal.ansiBrightWhite": semantic.terminalBrightWhite,

	// -------------------------------------------------------------------------
	// Editor errors/warnings
	// -------------------------------------------------------------------------
	"editorError.foreground": semantic.errorBright,
	"editorWarning.foreground": semantic.warningForeground,
	"editorInfo.foreground": semantic.infoForeground,

	// -------------------------------------------------------------------------
	// Git decorations
	// -------------------------------------------------------------------------
	"gitDecoration.modifiedResourceForeground": semantic.gitModified,
	"gitDecoration.addedResourceForeground": semantic.gitAdded,
	"gitDecoration.stageModifiedResourceForeground": semantic.gitStageModified,
	"gitDecoration.deletedResourceForeground": semantic.gitDeleted,
	"gitDecoration.untrackedResourceForeground": semantic.gitUntracked,
	"gitDecoration.ignoredResourceForeground": semantic.gitIgnored,
	"gitDecoration.conflictingResourceForeground": semantic.gitConflict,
	"gitDecoration.submoduleResourceForeground": semantic.gitSubmodule,

	// -------------------------------------------------------------------------
	// Editor gutter
	// -------------------------------------------------------------------------
	"editorGutter.background": semantic.gutterBackground,
	"editorGutter.modifiedBackground": semantic.gutterModified,
	"editorGutter.addedBackground": semantic.gutterAdded,
	"editorGutter.deletedBackground": semantic.gutterDeleted,

	// -------------------------------------------------------------------------
	// Quick input
	// -------------------------------------------------------------------------
	"quickInput.background": semantic.quickInputBackground,
	"pickerGroup.border": semantic.pickerGroupBorder,
	"pickerGroup.foreground": semantic.pickerGroupForeground,
	"quickInputList.focusBackground": semantic.quickInputFocusBackground,
	"quickInputList.focusForeground": semantic.quickInputFocusForeground,
	"quickInputList.focusIconForeground": semantic.quickInputFocusIcon,
};

/**
 * VS Code UI Colors
 * Maps all 207+ UI color properties to semantic values
 */

import type { Semantic } from "../palette";

export function createVscodeColors(semantic: Semantic): Record<string, string> {
	return {
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
	"extensionButton.background": semantic.extensionButtonBackground,
	"extensionButton.foreground": semantic.extensionButtonForeground,
	"extensionButton.hoverBackground": semantic.extensionButtonHover,
	"extensionButton.separator": semantic.extensionButtonSeparator,
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

	// -------------------------------------------------------------------------
	// Sticky scroll
	// -------------------------------------------------------------------------
	"editorStickyScroll.background": semantic.stickyScrollBackground,
	"editorStickyScroll.border": semantic.stickyScrollBorder,
	"editorStickyScroll.shadow": semantic.stickyScrollShadow,
	"editorStickyScrollHover.background": semantic.stickyScrollHover,

	// -------------------------------------------------------------------------
	// Ghost text / Copilot
	// -------------------------------------------------------------------------
	"editorGhostText.foreground": semantic.ghostTextForeground,
	"editorGhostText.background": semantic.ghostTextBackground,
	"editorGhostText.border": semantic.ghostTextBorder,

	// -------------------------------------------------------------------------
	// Inline chat & AI features
	// -------------------------------------------------------------------------
	"inlineChat.background": semantic.inlineChatBackground,
	"inlineChat.border": semantic.inlineChatBorder,
	"inlineChat.shadow": semantic.inlineChatShadow,
	"inlineChat.regionHighlight": semantic.inlineChatRegionHighlight,

	// -------------------------------------------------------------------------
	// Command center
	// -------------------------------------------------------------------------
	"commandCenter.background": semantic.commandCenterBackground,
	"commandCenter.foreground": semantic.commandCenterForeground,
	"commandCenter.border": semantic.commandCenterBorder,
	"commandCenter.activeForeground": semantic.commandCenterActiveForeground,
	"commandCenter.activeBorder": semantic.commandCenterActiveBorder,
	"commandCenter.inactiveForeground": semantic.commandCenterInactiveForeground,

	// -------------------------------------------------------------------------
	// Breadcrumbs
	// -------------------------------------------------------------------------
	"breadcrumb.foreground": semantic.breadcrumbForeground,
	"breadcrumb.background": semantic.breadcrumbBackground,
	"breadcrumb.focusForeground": semantic.breadcrumbFocusForeground,
	"breadcrumb.activeSelectionForeground": semantic.breadcrumbActiveSelection,
	"breadcrumbPicker.background": semantic.breadcrumbPickerBackground,

	// -------------------------------------------------------------------------
	// Menu
	// -------------------------------------------------------------------------
	"menu.background": semantic.menuBackground,
	"menu.foreground": semantic.menuForeground,
	"menu.border": semantic.menuBorder,
	"menu.selectionBackground": semantic.menuSelectionBackground,
	"menu.selectionForeground": semantic.menuSelectionForeground,
	"menu.selectionBorder": semantic.menuSelectionBorder,
	"menu.separatorBackground": semantic.menuSeparator,
	"menubar.selectionBackground": semantic.menubarSelectionBackground,
	"menubar.selectionForeground": semantic.menubarSelectionForeground,
	"menubar.selectionBorder": semantic.menubarSelectionBorder,

	// -------------------------------------------------------------------------
	// Testing
	// -------------------------------------------------------------------------
	"testing.iconPassed": semantic.testingPassed,
	"testing.iconFailed": semantic.testingFailed,
	"testing.iconSkipped": semantic.testingSkipped,
	"testing.iconErrored": semantic.testingErrored,
	"testing.iconQueued": semantic.testingQueued,
	"testing.iconUnset": semantic.testingUnset,
	"testing.runAction": semantic.testingRunAction,
	"testing.peekBorder": semantic.testingPeekBorder,
	"testing.peekHeaderBackground": semantic.testingPeekHeaderBackground,
	"testing.message.error.decorationForeground": semantic.testingMessageError,
	"testing.message.error.lineBackground": semantic.testingMessageErrorBackground,
	"testing.message.info.decorationForeground": semantic.testingMessageInfo,
	"testing.message.info.lineBackground": semantic.testingMessageInfoBackground,
	"testing.coveredBackground": semantic.testingCoveredBackground,
	"testing.coveredGutterBackground": semantic.testingCoveredGutter,
	"testing.uncoveredBackground": semantic.testingUncoveredBackground,
	"testing.uncoveredGutterBackground": semantic.testingUncoveredGutter,

	// -------------------------------------------------------------------------
	// Merge conflicts
	// -------------------------------------------------------------------------
	"merge.currentHeaderBackground": semantic.mergeCurrentHeader,
	"merge.currentContentBackground": semantic.mergeCurrentContent,
	"merge.incomingHeaderBackground": semantic.mergeIncomingHeader,
	"merge.incomingContentBackground": semantic.mergeIncomingContent,
	"merge.commonHeaderBackground": semantic.mergeCommonHeader,
	"merge.commonContentBackground": semantic.mergeCommonContent,
	"merge.border": semantic.mergeBorder,
	"mergeEditor.change.background": semantic.mergeEditorChangeBackground,
	"mergeEditor.change.word.background": semantic.mergeEditorChangeWordBackground,
	"mergeEditor.conflict.unhandledFocused.border": semantic.mergeEditorConflictFocusedBorder,
	"mergeEditor.conflict.unhandledUnfocused.border": semantic.mergeEditorConflictUnfocusedBorder,

	// -------------------------------------------------------------------------
	// Notifications (extended)
	// -------------------------------------------------------------------------
	"notificationCenter.border": semantic.notificationCenterBorder,
	"notificationCenterHeader.foreground": semantic.notificationHeaderForeground,
	"notificationCenterHeader.background": semantic.notificationHeaderBackground,
	"notificationToast.border": semantic.notificationToastBorder,
	"notifications.foreground": semantic.notificationForeground,
	"notifications.border": semantic.notificationBorder,
	"notificationLink.foreground": semantic.notificationLinkForeground,
	"notificationsErrorIcon.foreground": semantic.notificationErrorIcon,
	"notificationsWarningIcon.foreground": semantic.notificationWarningIcon,
	"notificationsInfoIcon.foreground": semantic.notificationInfoIcon,

	// -------------------------------------------------------------------------
	// Bracket colorization
	// -------------------------------------------------------------------------
	"editorBracketHighlight.foreground1": semantic.bracketColor1,
	"editorBracketHighlight.foreground2": semantic.bracketColor2,
	"editorBracketHighlight.foreground3": semantic.bracketColor3,
	"editorBracketHighlight.foreground4": semantic.bracketColor4,
	"editorBracketHighlight.foreground5": semantic.bracketColor5,
	"editorBracketHighlight.foreground6": semantic.bracketColor6,
	"editorBracketHighlight.unexpectedBracket.foreground": semantic.bracketUnexpected,
	"editorBracketPairGuide.activeBackground1": semantic.bracketGuideActive1,
	"editorBracketPairGuide.activeBackground2": semantic.bracketGuideActive2,
	"editorBracketPairGuide.activeBackground3": semantic.bracketGuideActive3,
	"editorBracketPairGuide.activeBackground4": semantic.bracketGuideActive4,
	"editorBracketPairGuide.activeBackground5": semantic.bracketGuideActive5,
	"editorBracketPairGuide.activeBackground6": semantic.bracketGuideActive6,
	"editorBracketPairGuide.background1": semantic.bracketGuideInactive1,
	"editorBracketPairGuide.background2": semantic.bracketGuideInactive2,
	"editorBracketPairGuide.background3": semantic.bracketGuideInactive3,
	"editorBracketPairGuide.background4": semantic.bracketGuideInactive4,
	"editorBracketPairGuide.background5": semantic.bracketGuideInactive5,
	"editorBracketPairGuide.background6": semantic.bracketGuideInactive6,

	// -------------------------------------------------------------------------
	// Debug tokens
	// -------------------------------------------------------------------------
	"debugTokenExpression.name": semantic.debugTokenName,
	"debugTokenExpression.value": semantic.debugTokenValue,
	"debugTokenExpression.string": semantic.debugTokenString,
	"debugTokenExpression.boolean": semantic.debugTokenBoolean,
	"debugTokenExpression.number": semantic.debugTokenNumber,
	"debugTokenExpression.error": semantic.debugTokenError,
	"debugView.exceptionLabelBackground": semantic.debugExceptionLabelBackground,
	"debugView.exceptionLabelForeground": semantic.debugExceptionLabelForeground,
	"debugView.stateLabelBackground": semantic.debugStateLabelBackground,
	"debugView.stateLabelForeground": semantic.debugStateLabelForeground,
	"debugView.valueChangedHighlight": semantic.debugValueChanged,
	"debugIcon.breakpointForeground": semantic.debugBreakpointIcon,
	"debugIcon.breakpointDisabledForeground": semantic.debugBreakpointDisabled,
	"debugIcon.breakpointUnverifiedForeground": semantic.debugBreakpointUnverified,
	"debugIcon.startForeground": semantic.debugStartIcon,
	"debugIcon.pauseForeground": semantic.debugPauseIcon,
	"debugIcon.stopForeground": semantic.debugStopIcon,
	"debugIcon.disconnectForeground": semantic.debugDisconnectIcon,
	"debugIcon.restartForeground": semantic.debugRestartIcon,
	"debugIcon.stepOverForeground": semantic.debugStepIcon,
	"debugIcon.stepIntoForeground": semantic.debugStepIcon,
	"debugIcon.stepOutForeground": semantic.debugStepIcon,
	"debugIcon.stepBackForeground": semantic.debugStepIcon,
	"debugIcon.continueForeground": semantic.debugContinueIcon,
	"debugConsole.infoForeground": semantic.debugConsoleInfo,
	"debugConsole.warningForeground": semantic.debugConsoleWarning,
	"debugConsole.errorForeground": semantic.debugConsoleError,
	"debugConsole.sourceForeground": semantic.debugConsoleSource,
	"debugConsoleInputIcon.foreground": semantic.debugConsoleInputIcon,

	// -------------------------------------------------------------------------
	// Terminal decorations
	// -------------------------------------------------------------------------
	"terminalCommandDecoration.defaultBackground": semantic.terminalDecorationDefault,
	"terminalCommandDecoration.successBackground": semantic.terminalDecorationSuccess,
	"terminalCommandDecoration.errorBackground": semantic.terminalDecorationError,
	"terminal.tab.activeBorder": semantic.terminalTabActiveBorder,
	"terminal.findMatchBackground": semantic.terminalFindMatch,
	"terminal.findMatchBorder": semantic.terminalFindMatchBorder,
	"terminal.findMatchHighlightBackground": semantic.terminalFindMatchHighlight,
	"terminal.findMatchHighlightBorder": semantic.terminalFindMatchHighlightBorder,
	"terminalOverviewRuler.cursorForeground": semantic.terminalOverviewCursor,
	"terminalOverviewRuler.findMatchForeground": semantic.terminalOverviewFindMatch,
	"terminalStickyScroll.background": semantic.terminalStickyScrollBackground,
	"terminalStickyScroll.border": semantic.terminalStickyScrollBorder,
	"terminalStickyScrollHover.background": semantic.terminalStickyScrollHover,

	// -------------------------------------------------------------------------
	// Notebook
	// -------------------------------------------------------------------------
	"notebook.cellBackground": semantic.notebookCellBackground,
	"notebook.cellBorderColor": semantic.notebookCellBorder,
	"notebook.cellStatusBarItemHoverBackground": semantic.notebookCellStatusBarHover,
	"notebook.focusedCellBorder": semantic.notebookFocusedCellBorder,
	"notebook.focusedEditorBorder": semantic.notebookFocusedEditorBorder,
	"notebook.inactiveFocusedCellBorder": semantic.notebookInactiveFocusedCellBorder,
	"notebook.selectedCellBackground": semantic.notebookSelectedCellBackground,
	"notebook.selectedCellBorder": semantic.notebookSelectedCellBorder,
	"notebook.cellToolbarSeparator": semantic.notebookCellToolbarSeparator,
	"notebook.editorBackground": semantic.notebookEditorBackground,
	"notebook.outputContainerBackgroundColor": semantic.notebookOutputBackground,
	"notebook.outputContainerBorderColor": semantic.notebookOutputBorder,
	"notebookScrollbarSlider.background": semantic.notebookScrollbarSlider,
	"notebookScrollbarSlider.hoverBackground": semantic.notebookScrollbarSliderHover,
	"notebookScrollbarSlider.activeBackground": semantic.notebookScrollbarSliderActive,
	"notebookStatusRunningIcon.foreground": semantic.notebookRunningIcon,
	"notebookStatusSuccessIcon.foreground": semantic.notebookSuccessIcon,
	"notebookStatusErrorIcon.foreground": semantic.notebookErrorIcon,

	// -------------------------------------------------------------------------
	// Radio & checkbox
	// -------------------------------------------------------------------------
	"radio.activeBackground": semantic.radioActiveBackground,
	"radio.activeBorder": semantic.radioActiveBorder,
	"radio.activeForeground": semantic.radioActiveForeground,
	"radio.inactiveBackground": semantic.radioInactiveBackground,
	"radio.inactiveBorder": semantic.radioInactiveBorder,
	"radio.inactiveForeground": semantic.radioInactiveForeground,
	"radio.inactiveHoverBackground": semantic.radioInactiveHoverBackground,
	"checkbox.border": semantic.checkboxBorder,
	"checkbox.selectBackground": semantic.checkboxSelectBackground,
	"checkbox.selectBorder": semantic.checkboxSelectBorder,

	// -------------------------------------------------------------------------
	// Git decorations (extensions)
	// -------------------------------------------------------------------------
	"gitDecoration.renamedResourceForeground": semantic.gitRenamed,
	"gitDecoration.copiedResourceForeground": semantic.gitCopied,

	// -------------------------------------------------------------------------
	// Keybinding labels
	// -------------------------------------------------------------------------
	"keybindingLabel.background": semantic.keybindingBackground,
	"keybindingLabel.foreground": semantic.keybindingForeground,
	"keybindingLabel.border": semantic.keybindingBorder,
	"keybindingLabel.bottomBorder": semantic.keybindingBottomBorder,

	// -------------------------------------------------------------------------
	// Banner
	// -------------------------------------------------------------------------
	"banner.background": semantic.bannerBackground,
	"banner.foreground": semantic.bannerForeground,
	"banner.iconForeground": semantic.bannerIconForeground,

	// -------------------------------------------------------------------------
	// Welcome page
	// -------------------------------------------------------------------------
	"welcomePage.background": semantic.welcomePageBackground,
	"welcomePage.tileBackground": semantic.welcomePageTileBackground,
	"welcomePage.tileHoverBackground": semantic.welcomePageTileHoverBackground,
	"welcomePage.tileBorder": semantic.welcomePageTileBorder,
	"welcomePage.progress.background": semantic.welcomePageProgressBackground,
	"welcomePage.progress.foreground": semantic.welcomePageProgressForeground,

	// -------------------------------------------------------------------------
	// Walkthrough
	// -------------------------------------------------------------------------
	"walkthrough.stepTitle.foreground": semantic.walkthroughStepTitle,

	// -------------------------------------------------------------------------
	// Search editor
	// -------------------------------------------------------------------------
	"searchEditor.findMatchBackground": semantic.searchEditorFindMatch,
	"searchEditor.findMatchBorder": semantic.searchEditorFindMatchBorder,
	"searchEditor.textInputBorder": semantic.searchEditorTextInputBorder,

	// -------------------------------------------------------------------------
	// Symbol icons
	// -------------------------------------------------------------------------
	"symbolIcon.arrayForeground": semantic.symbolIconArray,
	"symbolIcon.booleanForeground": semantic.symbolIconBoolean,
	"symbolIcon.classForeground": semantic.symbolIconClass,
	"symbolIcon.colorForeground": semantic.symbolIconColor,
	"symbolIcon.constantForeground": semantic.symbolIconConstant,
	"symbolIcon.constructorForeground": semantic.symbolIconConstructor,
	"symbolIcon.enumeratorForeground": semantic.symbolIconEnumerator,
	"symbolIcon.enumeratorMemberForeground": semantic.symbolIconEnumeratorMember,
	"symbolIcon.eventForeground": semantic.symbolIconEvent,
	"symbolIcon.fieldForeground": semantic.symbolIconField,
	"symbolIcon.fileForeground": semantic.symbolIconFile,
	"symbolIcon.folderForeground": semantic.symbolIconFolder,
	"symbolIcon.functionForeground": semantic.symbolIconFunction,
	"symbolIcon.interfaceForeground": semantic.symbolIconInterface,
	"symbolIcon.keyForeground": semantic.symbolIconKey,
	"symbolIcon.keywordForeground": semantic.symbolIconKeyword,
	"symbolIcon.methodForeground": semantic.symbolIconMethod,
	"symbolIcon.moduleForeground": semantic.symbolIconModule,
	"symbolIcon.namespaceForeground": semantic.symbolIconNamespace,
	"symbolIcon.nullForeground": semantic.symbolIconNull,
	"symbolIcon.numberForeground": semantic.symbolIconNumber,
	"symbolIcon.objectForeground": semantic.symbolIconObject,
	"symbolIcon.operatorForeground": semantic.symbolIconOperator,
	"symbolIcon.packageForeground": semantic.symbolIconPackage,
	"symbolIcon.propertyForeground": semantic.symbolIconProperty,
	"symbolIcon.referenceForeground": semantic.symbolIconReference,
	"symbolIcon.snippetForeground": semantic.symbolIconSnippet,
	"symbolIcon.stringForeground": semantic.symbolIconString,
	"symbolIcon.structForeground": semantic.symbolIconStruct,
	"symbolIcon.textForeground": semantic.symbolIconText,
	"symbolIcon.typeParameterForeground": semantic.symbolIconTypeParameter,
	"symbolIcon.unitForeground": semantic.symbolIconUnit,
	"symbolIcon.variableForeground": semantic.symbolIconVariable,

	// -------------------------------------------------------------------------
	// Charts
	// -------------------------------------------------------------------------
	"charts.foreground": semantic.chartsForeground,
	"charts.lines": semantic.chartsLines,
	"charts.red": semantic.chartsRed,
	"charts.blue": semantic.chartsBlue,
	"charts.yellow": semantic.chartsYellow,
	"charts.orange": semantic.chartsOrange,
	"charts.green": semantic.chartsGreen,
	"charts.purple": semantic.chartsPurple,

	// -------------------------------------------------------------------------
	// Ports
	// -------------------------------------------------------------------------
	"ports.iconRunningProcessForeground": semantic.portsRunningProcess,

	// -------------------------------------------------------------------------
	// Comments view
	// -------------------------------------------------------------------------
	"commentsView.resolvedIcon": semantic.commentsResolvedIcon,
	"commentsView.unresolvedIcon": semantic.commentsUnresolvedIcon,

	// -------------------------------------------------------------------------
	// Action bar
	// -------------------------------------------------------------------------
	"actionBar.toggledBackground": semantic.actionBarToggled,

	// -------------------------------------------------------------------------
	// Simple find widget
	// -------------------------------------------------------------------------
	"simpleFindWidget.sashBorder": semantic.simpleFindWidgetBorder,

	// -------------------------------------------------------------------------
	// SCM
	// -------------------------------------------------------------------------
	"scm.historyItemAdditionsForeground": semantic.scmHistoryAdditions,
	"scm.historyItemDeletionsForeground": semantic.scmHistoryDeletions,
	"scm.historyItemStatisticsBorder": semantic.scmHistoryStatisticsBorder,
	"scm.historyItemSelectedStatisticsBorder": semantic.scmHistorySelectedStatisticsBorder,
	};
}

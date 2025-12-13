/**
 * Short Giraffe High Contrast Variant
 * Maximum readability with WCAG AAA contrast ratios
 *
 * Design philosophy:
 * - Near-black backgrounds for maximum text contrast
 * - Visible borders (the #1 accessibility failure in dark themes)
 * - Brighter syntax colors from existing palette
 * - Preserved warm orange/coral aesthetic
 */

import { colors } from "../palette";
import type { Variant } from "./index";

export const highContrast: Variant = {
	id: "high-contrast",
	name: "Short Giraffe High Contrast",
	overrides: {
		// =========================================================================
		// VS CODE BACKGROUNDS (All → gray950/near-black)
		// =========================================================================
		editorBackground: colors.gray950,
		gutterBackground: colors.gray950,
		panelBackground: colors.gray950,
		terminalBackground: colors.gray950,
		sidebarBackground: colors.gray950,
		titleBarActive: colors.gray950,
		titleBarInactive: colors.gray950,
		activityBarBackground: colors.gray925,
		activityBarBorder: colors.gray950,
		tabInactiveBackground: colors.gray950,
		tabActiveBackground: colors.gray800,
		stickyScrollBackground: colors.gray950,
		stickyScrollGutter: colors.gray950,
		breadcrumbBackground: colors.gray950,
		welcomePageBackground: colors.gray950,
		notebookCellBackground: colors.gray950,
		notebookEditorBackground: colors.gray950,
		terminalStickyScrollBackground: colors.gray950,
		inlineEditGutterBackground: colors.gray950,

		// =========================================================================
		// VS CODE BORDERS (Visible grays - actually see the borders!)
		// =========================================================================
		sidebarBorder: colors.gray400,
		titleBarBorder: colors.gray400,
		panelBorder: colors.gray350,
		tabBorder: colors.gray500,
		overviewRulerBorder: colors.gray400,
		stickyScrollBorder: colors.gray400,
		focusBorder: colors.orange400,
		widgetBorder: colors.gray400,
		tabGroupBorder: colors.gray400,
		tabGroupHeaderBorder: colors.gray400,

		// =========================================================================
		// VS CODE TEXT (Maximum brightness - white instead of cream)
		// =========================================================================
		foreground: colors.white,
		editorForeground: colors.white,
		sidebarForeground: colors.white,
		tabActiveForeground: colors.white,
		listActiveSelectionForeground: colors.white,
		panelTitleActive: colors.white,
		settingsHeader: colors.white,
		buttonForeground: colors.white,
		menuForeground: colors.white,
		notificationForeground: colors.white,

		// =========================================================================
		// VS CODE WIDGETS (Darker for contrast)
		// =========================================================================
		widgetBackground: colors.gray775,
		suggestWidgetBackground: colors.gray700,
		quickInputBackground: colors.gray775,
		quickInputFocusBackground: colors.gray775,
		menuBackground: colors.gray775,
		breadcrumbPickerBackground: colors.gray775,
		dropdownBackground: colors.gray875,
		inputBackground: colors.gray875,
		notificationBackground: colors.gray700,
		notificationHeaderBackground: colors.gray700,
		peekViewBackground: colors.gray775,
		peekViewResult: colors.gray775,
		peekViewTitle: colors.gray775,
		debugToolbar: colors.gray775,
		debugExceptionBackground: colors.gray775,
		inlineChatBackground: colors.gray775,
		bannerBackground: colors.gray775,
		debugStateLabelBackground: colors.gray775,

		// =========================================================================
		// VS CODE LISTS & SELECTIONS (More visible)
		// =========================================================================
		listActiveSelection: colors.gray700,
		listFocusBackground: colors.gray700,
		listHoverBackground: colors.gray775,
		listInactiveSelection: colors.gray775,
		editorLineHighlight: colors.gray800,
		editorSelection: colors.gray700,

		// =========================================================================
		// VS CODE SYNTAX (Brighter variants from existing palette)
		// =========================================================================
		syntaxKeyword: colors.yellow400,
		syntaxKeywordItalic: colors.yellow400,
		syntaxOperator: colors.yellow400,
		syntaxFunction: colors.cyan400,
		syntaxVariable: colors.blue300,
		syntaxParameter: colors.blue200,
		syntaxClass: colors.blue200,
		syntaxType: colors.purple200,
		syntaxComment: colors.gray150,
		syntaxPunctuation: colors.gray100,
		syntaxNumber: colors.orange300,
		syntaxBuiltinObject: colors.orange300,

		// =========================================================================
		// VS CODE SEMANTIC TOKENS (Brighter)
		// =========================================================================
		semanticVariable: colors.blue300,
		semanticFunction: colors.cyan400,
		semanticType: colors.purple200,
		semanticTypeParameter: colors.purple200,
		semanticProperty: colors.cream300,
		semanticInterface: colors.purple200,
		semanticClass: colors.purple200,
		semanticEnum: colors.orange300,

		// =========================================================================
		// ZED BACKGROUNDS (All → gray950)
		// =========================================================================
		zedBackground: colors.gray950,
		zedPanel: colors.gray950,
		zedStatusBar: colors.gray950,
		zedTitleBar: colors.gray950,
		zedToolbar: colors.gray950,
		zedTabBar: colors.gray950,
		zedEditorBackground: colors.gray950,
		zedEditorGutter: colors.gray950,
		zedSurface: colors.gray925,
		zedElevatedSurface: colors.gray925,
		zedTerminalBackground: colors.gray925,

		// =========================================================================
		// ZED BORDERS (Visible)
		// =========================================================================
		zedBorder: colors.gray400,
		zedBorderVariant: colors.gray400,
		zedBorderFocused: colors.orange400,
		zedPanelFocusedBorder: colors.orange400,
		zedPaneFocusedBorder: colors.orange400,

		// =========================================================================
		// ZED ELEMENTS (Adjusted for dark bg)
		// =========================================================================
		zedElement: colors.gray700,
		zedElementHover: colors.gray650,
		zedElementActive: colors.gray650,
		zedElementSelected: colors.gray700,
		zedGhostElementHover: colors.gray700,
		zedGhostElementActive: colors.gray650,
		zedGhostElementSelected: colors.gray700,
		zedTabActive: colors.gray700,
		zedTabInactive: colors.gray900,
		zedEditorActiveLine: colors.gray800,
		zedEditorHighlightedLine: colors.gray750,

		// =========================================================================
		// ZED TEXT (Maximum brightness)
		// =========================================================================
		zedText: colors.white,
		zedTextMuted: colors.gray75,
		zedEditorForeground: colors.white,

		// =========================================================================
		// ZED SYNTAX (Brighter variants)
		// =========================================================================
		zedSyntaxKeyword: colors.yellow400,
		zedSyntaxOperator: colors.yellow400,
		zedSyntaxNumber: colors.yellow400,
		zedSyntaxBoolean: colors.yellow400,
		zedSyntaxConstant: colors.yellow400,
		zedSyntaxFunction: colors.cyan400,
		zedSyntaxConstructor: colors.cyan400,
		zedSyntaxVariable: colors.blue300,
		zedSyntaxVariableSpecial: colors.blue200,
		zedSyntaxType: colors.purple200,
		zedSyntaxComment: colors.gray150,
		zedSyntaxPunctuation: colors.gray300,
		zedSyntaxPunctuationBracket: colors.gray100,
	},
};

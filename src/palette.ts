/**
 * Short Giraffe Color Palette
 * Single source of truth for both VS Code and Zed themes
 *
 * Structure:
 * - `colors`: Raw hex values organized by hue + shade scale
 * - `semantic`: Purpose-driven names for ALL usages
 */

// =============================================================================
// COLORS - Raw hex values organized by hue with shade scale
// =============================================================================

export const colors = {
	// -------------------------------------------------------------------------
	// Grays (darkest 950 → lightest 25)
	// -------------------------------------------------------------------------
	gray950: "#0C0E13",
	gray925: "#0d1016",
	gray900: "#0F131A",
	gray875: "#101521",
	gray850: "#13161D",
	gray825: "#141821",
	gray800: "#141A25",
	gray775: "#141925",
	gray750: "#151b25",
	gray725: "#191F2B",
	gray700: "#191e2a",
	gray675: "#1B1F28",
	gray650: "#1d2431",
	gray625: "#1d2433",
	gray600: "#222630",
	gray575: "#222833",
	gray550: "#232834",
	gray525: "#262f3e",
	gray500: "#2a3546",
	gray475: "#2E3543",
	gray450: "#303743",
	gray425: "#313e52",
	gray400: "#333842",
	gray375: "#373D4A",
	gray350: "#373e4c",
	gray325: "#404651",
	gray300: "#414B5D",
	gray275: "#505867",
	gray250: "#535A69",
	gray225: "#586070",
	gray200: "#5c6773",
	gray175: "#707a8c",
	gray150: "#7581A0",
	gray125: "#7E8694",
	gray100: "#A3A5AA",
	gray75: "#a6a7ab",
	gray50: "#CAD0DC",
	gray25: "#cbccc6",

	// -------------------------------------------------------------------------
	// Corals / Oranges (primary accent hue)
	// -------------------------------------------------------------------------
	coral700: "#C98B83",
	coral600: "#E1936C",
	coral500: "#F29E74",
	coral400: "#FFB69E",
	coral300: "#FFB46A",
	coral200: "#F7C0A5",
	coral100: "#FFB480",

	// -------------------------------------------------------------------------
	// Yellows
	// -------------------------------------------------------------------------
	yellow600: "#fad07b",
	yellow500: "#F5DA7A",
	yellow400: "#FFE074",
	yellow300: "#FFCC6A",
	yellow200: "#ffd580",
	yellow100: "#ffeb95cc",

	// -------------------------------------------------------------------------
	// Pinks
	// -------------------------------------------------------------------------
	pink500: "#F6ABA8",
	pink400: "#E4A2AC",
	pink300: "#d07277ff",

	// -------------------------------------------------------------------------
	// Blues
	// -------------------------------------------------------------------------
	blue800: "#40578C",
	blue700: "#4582CA",
	blue600: "#77a8d9",
	blue500: "#BBD2EE",
	blue450: "#BBCFEC",
	blue400: "#9BC9FF",
	blue350: "#A2C4EB",
	blue300: "#9be7ff",
	blue250: "#8BB8F9",
	blue200: "#6dcbfa",
	blue150: "#73d0ff",
	blue100: "#74ade8ff",

	// -------------------------------------------------------------------------
	// Cyans
	// -------------------------------------------------------------------------
	cyan500: "#45CAC2",
	cyan400: "#5ccfe6",
	cyan350: "#6eb4bfff",
	cyan300: "#90e1c6",
	cyan200: "#95e6cb",

	// -------------------------------------------------------------------------
	// Purples
	// -------------------------------------------------------------------------
	purple600: "#b477cfff",
	purple500: "#BAB4FF",
	purple450: "#BCBCEF",
	purple400: "#CBBEE7",
	purple350: "#CBBDE7",
	purple300: "#DA95EF",
	purple200: "#cfbafa",
	purple150: "#d4bfff",
	purple100: "#d4bfffb3",

	// -------------------------------------------------------------------------
	// Creams / Whites
	// -------------------------------------------------------------------------
	cream500: "#FCFCCE",
	cream400: "#E9DEB7",
	cream300: "#F7F7E5",
	cream200: "#FEF8F5",
	cream150: "#EDEFF4",
	cream100: "#e4f3fa",
	white: "#ffffff",
	whiteAlt: "#c7c7c7",

	// -------------------------------------------------------------------------
	// Greens
	// -------------------------------------------------------------------------
	green600: "#82F28710",
	green550: "#82F28735",
	green500: "#a6cc70",
	green450: "#a1c181ff",
	green400: "#bae67e",

	// -------------------------------------------------------------------------
	// Reds
	// -------------------------------------------------------------------------
	red800: "#8C404A",
	red700: "#be5046ff",
	red600: "#B35C51",
	red500: "#FF7474",
	red450: "#FF747410",
	red400: "#ed8274",
	red350: "#f28779",
	red300: "#f2798399",
	red200: "#ff3333",

	// -------------------------------------------------------------------------
	// Olive / Warning backgrounds
	// -------------------------------------------------------------------------
	olive500: "#8C8340",
	olive400: "#bf956aff",
	olive300: "#dec184ff",

	// -------------------------------------------------------------------------
	// Orange (misc)
	// -------------------------------------------------------------------------
	orange400: "#E6BB8D",

	// -------------------------------------------------------------------------
	// Special
	// -------------------------------------------------------------------------
	transparent: "#FFFFFF00",
	black: "#000000",
	black10: "#00000010",
	black20: "#00000020",
	black30: "#00000030",
	black40: "#00000040",
	black50: "#00000050",

	// -------------------------------------------------------------------------
	// Terminal blacks
	// -------------------------------------------------------------------------
	terminalBlackBright: "#686868",
} as const;

// =============================================================================
// SEMANTIC - Purpose-driven names for ALL usages
// =============================================================================

export const semantic = {
	// =========================================================================
	// EDITOR
	// =========================================================================
	editorBackground: colors.gray725,
	editorForeground: colors.cream300,
	editorLineHighlight: colors.gray575,
	editorSelection: colors.gray500,
	editorSelectionInactive: colors.gray525,
	editorSelectionHighlight: colors.gray575,
	editorSelectionHighlightBorder: colors.gray425,
	editorWordHighlight: colors.gray525,
	editorCursor: colors.coral500,
	editorLineNumber: colors.gray300,
	editorLineNumberActive: colors.gray100,
	editorWhitespace: `${colors.gray175}66`,
	editorIndentGuide: colors.gray575,
	editorIndentGuideActive: `${colors.gray175}b3`,
	editorRuler: colors.gray575,
	editorCodeLens: colors.gray200,
	editorBracketMatch: colors.gray575,
	editorBracketMatchBorder: `${colors.gray175}99`,
	editorRangeHighlight: colors.gray700,
	editorInlayHint: `${colors.blue300}BB`,
	editorInlayHintBg: colors.transparent,
	editorLink: colors.cyan500,
	editorFindMatch: `${colors.coral500}0d`,
	editorFindMatchBorder: colors.coral500,
	editorFindMatchHighlight: `${colors.coral500}0d`,
	editorFindMatchHighlightBorder: `${colors.coral500}59`,
	editorFindRange: colors.gray525,
	editorWordHighlightStrong: `${colors.coral500}33`,

	// =========================================================================
	// EDITOR WIDGETS
	// =========================================================================
	widgetBackground: colors.gray550,
	widgetShadow: colors.gray775,
	widgetBorder: colors.gray875,
	suggestWidgetBackground: colors.gray475,
	suggestWidgetBorder: colors.gray875,
	suggestWidgetHighlight: colors.red500,
	suggestWidgetSelected: colors.green550,

	// =========================================================================
	// EDITOR GUTTER
	// =========================================================================
	gutterBackground: colors.gray725,
	gutterModified: colors.coral700,
	gutterAdded: `${colors.green500}99`,
	gutterDeleted: colors.red300,

	// =========================================================================
	// EDITOR OVERVIEW RULER
	// =========================================================================
	overviewRulerBorder: colors.gray700,
	overviewRulerModified: `${colors.blue600}99`,
	overviewRulerAdded: `${colors.green500}99`,
	overviewRulerDeleted: colors.red300,
	overviewRulerError: colors.red200,
	overviewRulerWarning: colors.coral500,

	// =========================================================================
	// DIFF EDITOR
	// =========================================================================
	diffInserted: colors.green600,
	diffRemoved: colors.red450,

	// =========================================================================
	// SIDEBAR & ACTIVITY BAR
	// =========================================================================
	sidebarBackground: colors.gray750,
	sidebarForeground: colors.gray50,
	sidebarBorder: colors.gray900,
	sidebarTitle: colors.coral400,
	sidebarSectionHeader: colors.coral400,
	activityBarBackground: colors.gray900,
	activityBarForeground: colors.coral500,
	activityBarBorder: colors.gray900,
	activityBarInactive: colors.gray300,
	activityBarBadge: colors.coral500,
	activityBarBadgeForeground: colors.gray725,

	// =========================================================================
	// TABS
	// =========================================================================
	tabActiveBackground: colors.gray575,
	tabActiveForeground: colors.coral500,
	tabActiveBorderTop: colors.coral500,
	tabInactiveBackground: colors.gray725,
	tabInactiveForeground: colors.gray175,
	tabBorder: colors.gray725,
	tabUnfocusedActiveBorderTop: colors.cream200,
	tabGroupBorder: colors.gray900,
	tabGroupEmpty: colors.gray650,
	tabGroupHeaderBorder: colors.gray700,
	tabGroupDrop: `${colors.gray900}20`,

	// =========================================================================
	// STATUS BAR
	// =========================================================================
	statusBarBackground: colors.coral400,
	statusBarForeground: colors.gray800,
	statusBarBorder: colors.gray700,
	statusBarDebuggingBackground: colors.coral500,
	statusBarDebuggingForeground: colors.gray725,
	statusBarNoFolder: colors.gray550,
	statusBarItemActive: colors.black50,
	statusBarItemHover: colors.coral600,
	statusBarItemProminent: colors.coral500,
	statusBarItemProminentHover: colors.black30,

	// =========================================================================
	// TITLE BAR
	// =========================================================================
	titleBarActive: colors.gray750,
	titleBarActiveForeground: colors.gray25,
	titleBarInactive: colors.gray725,
	titleBarInactiveForeground: colors.gray175,
	titleBarBorder: colors.gray700,

	// =========================================================================
	// BUTTONS & INPUTS
	// =========================================================================
	buttonBackground: colors.gray300,
	buttonBorder: colors.gray300,
	buttonForeground: colors.cream200,
	buttonHover: colors.gray300,
	buttonSecondary: colors.gray300,
	buttonSecondaryForeground: colors.gray50,
	checkboxBackground: colors.gray725,
	checkboxForeground: colors.cream200,
	inputBackground: colors.gray800,
	inputBorder: colors.gray300,
	inputForeground: colors.gray100,
	inputPlaceholder: colors.gray225,
	inputOptionActive: colors.coral500,
	inputValidationError: colors.gray725,
	inputValidationErrorBorder: colors.red200,
	inputValidationInfo: colors.gray725,
	inputValidationInfoBorder: colors.cyan400,
	inputValidationWarning: colors.gray725,
	inputValidationWarningBorder: colors.yellow200,
	dropdownBackground: colors.gray800,
	dropdownForeground: colors.gray100,
	dropdownBorder: colors.gray350,

	// =========================================================================
	// LISTS
	// =========================================================================
	listActiveSelection: colors.gray575,
	listActiveSelectionForeground: colors.cream300,
	listFocusBackground: colors.gray650,
	listFocusForeground: colors.coral500,
	listHighlight: colors.coral500,
	listHoverBackground: colors.gray650,
	listHoverForeground: colors.coral300,
	listInactiveSelection: colors.gray650,
	listInactiveSelectionForeground: colors.cream100,
	listInvalidItem: colors.gray225,

	// =========================================================================
	// SCROLLBAR
	// =========================================================================
	scrollbarShadow: colors.gray575,
	scrollbarSlider: colors.black20,
	scrollbarSliderHover: colors.black30,
	scrollbarSliderActive: colors.black40,

	// =========================================================================
	// MINIMAP
	// =========================================================================
	minimapSlider: colors.black30,
	minimapSliderHover: colors.black40,
	minimapSliderActive: colors.black50,

	// =========================================================================
	// BADGES
	// =========================================================================
	badgeBackground: colors.coral500,
	badgeForeground: colors.gray725,
	progressBar: colors.coral500,

	// =========================================================================
	// PANELS
	// =========================================================================
	panelBackground: colors.gray725,
	panelBorder: colors.gray450,
	panelTitleActive: colors.gray25,
	panelTitleActiveBorder: colors.gray325,
	panelTitleInactive: colors.gray175,

	// =========================================================================
	// NOTIFICATIONS
	// =========================================================================
	notificationBackground: colors.gray625,

	// =========================================================================
	// PEEK VIEW
	// =========================================================================
	peekViewBorder: colors.gray700,
	peekViewBackground: colors.gray550,
	peekViewMatchHighlight: `${colors.coral500}33`,
	peekViewResult: colors.gray550,
	peekViewResultFile: colors.gray175,
	peekViewTitle: colors.gray550,
	peekViewTitleDescription: colors.gray175,
	peekViewTitleLabel: colors.gray175,

	// =========================================================================
	// DEBUG
	// =========================================================================
	debugToolbar: colors.gray550,
	debugExceptionBorder: colors.gray700,
	debugExceptionBackground: colors.gray550,

	// =========================================================================
	// EXTENSIONS
	// =========================================================================
	extensionButtonForeground: colors.gray725,
	extensionButtonBackground: colors.coral500,
	extensionButtonHover: "#fac761",

	// =========================================================================
	// QUICK INPUT
	// =========================================================================
	quickInputBackground: colors.gray575,
	quickInputFocusBackground: colors.gray575,
	quickInputFocusForeground: colors.coral600,
	quickInputFocusIcon: colors.cyan500,
	pickerGroupBorder: colors.gray100,
	pickerGroupForeground: colors.gray100,

	// =========================================================================
	// SETTINGS
	// =========================================================================
	settingsHeader: colors.gray25,
	settingsModified: colors.blue600,

	// =========================================================================
	// TEXT
	// =========================================================================
	textBlockQuote: colors.gray550,
	textLink: colors.cyan500,
	textLinkActive: colors.blue700,
	textPreformat: colors.blue350,
	foreground: colors.cream200,
	focusBorder: colors.gray275,
	sashHover: colors.coral500,
	iconForeground: colors.gray50,
	selectionBackground: `${colors.gray500}fd`,

	// =========================================================================
	// ERRORS & STATUS
	// =========================================================================
	errorForeground: colors.red600,
	errorBright: colors.red500,
	warningForeground: colors.coral600,
	infoForeground: colors.gray300,

	// =========================================================================
	// GIT DECORATIONS
	// =========================================================================
	gitModified: colors.blue350,
	gitAdded: colors.blue350,
	gitStageModified: colors.blue350,
	gitDeleted: colors.pink500,
	gitUntracked: colors.cyan500,
	gitIgnored: colors.gray100,
	gitConflict: colors.yellow100,
	gitSubmodule: colors.purple100,

	// =========================================================================
	// TERMINAL
	// =========================================================================
	terminalBackground: colors.gray725,
	terminalForeground: colors.gray25,
	terminalBlack: colors.gray700,
	terminalRed: colors.red400,
	terminalGreen: colors.green500,
	terminalYellow: colors.yellow600,
	terminalBlue: colors.blue200,
	terminalMagenta: colors.purple200,
	terminalCyan: colors.cyan300,
	terminalWhite: colors.whiteAlt,
	terminalBrightBlack: colors.terminalBlackBright,
	terminalBrightRed: colors.red350,
	terminalBrightGreen: colors.green400,
	terminalBrightYellow: colors.yellow200,
	terminalBrightBlue: colors.blue150,
	terminalBrightMagenta: colors.purple150,
	terminalBrightCyan: colors.cyan200,
	terminalBrightWhite: colors.white,

	// =========================================================================
	// SYNTAX HIGHLIGHTING
	// =========================================================================
	syntaxPunctuation: colors.gray150,
	syntaxKeyword: colors.yellow500,
	syntaxKeywordItalic: colors.yellow500,
	syntaxOperator: colors.yellow400,
	syntaxBuiltinObject: colors.coral300,
	syntaxType: colors.blue300,
	syntaxFunction: colors.cyan500,
	syntaxVariable: colors.blue500,
	syntaxParameter: colors.blue400,
	syntaxClass: colors.blue400,
	syntaxSuper: colors.cyan500,
	syntaxProperty: colors.cream500,
	syntaxString: colors.pink500,
	syntaxNumber: colors.coral200,
	syntaxComment: colors.gray300,
	syntaxVueProp: colors.purple500,
	syntaxTag: colors.yellow300,
	syntaxTagText: colors.cream300,
	syntaxAttribute: colors.cyan500,
	syntaxComponent: colors.purple500,
	syntaxTagVariable: colors.blue400,
	syntaxCSSProperty: colors.cream300,
	syntaxCSSPunctuation: colors.cream200,
	syntaxCSSVariable: colors.blue400,
	syntaxCSSFunction: colors.cyan500,
	syntaxCSSConstant: colors.coral100,
	syntaxCSSColor: colors.yellow400,
	syntaxJSONKey: colors.yellow400,
	syntaxJSONString: colors.pink500,
	syntaxMarkdownTitle: colors.pink500,
	syntaxMarkdownPunctuation: colors.gray125,
	syntaxMarkdownQuote: colors.purple300,
	syntaxMarkdownImage: colors.yellow400,
	syntaxMarkdownLink: colors.yellow300,

	// =========================================================================
	// SEMANTIC TOKENS
	// =========================================================================
	semanticProperty: colors.cream500,
	semanticVariable: colors.blue500,
	semanticFunction: colors.cyan500,
	semanticTypeParameter: colors.purple500,
	semanticType: colors.blue300,
	semanticInterface: colors.purple400,
	semanticClass: colors.purple400,
	semanticTypeDeclaration: colors.blue300,
	semanticEnum: colors.coral100,
	semanticEnumMember: colors.pink500,

	// =========================================================================
	// ZED-SPECIFIC
	// =========================================================================
	zedBackground: colors.gray850,
	zedSurface: colors.gray950,
	zedBorder: colors.gray675,
	zedBorderFocused: colors.coral400,
	zedPanel: colors.gray925,
	zedStatusBar: colors.gray825,
	zedText: colors.cream150,
	zedTextMuted: colors.gray75,
	zedTextDisabled: colors.gray250,
	zedTextAccent: colors.coral400,
	zedEditorBackground: colors.gray825,
	zedEditorForeground: colors.cream150,
	zedEditorLineNumber: colors.gray400,
	zedEditorIndentGuide: `${colors.white}10`,
	zedEditorActiveLine: colors.gray675,
	zedEditorHighlightedLine: colors.gray600,
	zedEditorGutter: colors.gray825,
	zedElevatedSurface: colors.gray950,
	zedElement: colors.gray675,
	zedElementHover: colors.gray600,
	zedGhostElementHover: colors.gray675,
	zedTabActive: colors.gray675,
	zedTabInactive: colors.gray850,
	zedTabBar: colors.gray825,
	zedTitleBar: colors.gray950,
	zedToolbar: colors.gray825,
	zedPredictive: colors.gray75,
	zedCreated: colors.cyan500,
	zedDeleted: colors.pink500,
	zedConflict: colors.pink500,
	zedIgnored: colors.gray250,
	zedModified: colors.coral400,
	zedWarningBg: colors.olive500,
	zedErrorBg: colors.red800,
	zedHint: colors.gray250,
	zedHintBg: colors.blue800,
	zedDocHighlight: colors.gray375,

	// =========================================================================
	// ZED SYNTAX
	// =========================================================================
	zedSyntaxBoolean: colors.yellow500,
	zedSyntaxConstant: colors.yellow500,
	zedSyntaxEmbedded: colors.blue250,
	zedSyntaxEnum: colors.orange400,
	zedSyntaxFunction: colors.cyan500,
	zedSyntaxHint: colors.gray400,
	zedSyntaxKeyword: colors.yellow500,
	zedSyntaxLabel: colors.gray400,
	zedSyntaxNumber: colors.yellow500,
	zedSyntaxOperator: colors.yellow500,
	zedSyntaxProperty: colors.cream400,
	zedSyntaxPunctuation: colors.gray400,
	zedSyntaxPunctuationBracket: colors.gray75,
	zedSyntaxString: colors.pink500,
	zedSyntaxTag: colors.purple450,
	zedSyntaxTextLiteral: colors.pink500,
	zedSyntaxType: colors.purple350,
	zedSyntaxVariable: colors.blue500,
	zedSyntaxVariableSpecial: colors.blue450,
	zedSyntaxComment: colors.gray250,

	// =========================================================================
	// ZED PLAYERS (collaborative cursors)
	// =========================================================================
	playerBlue: colors.blue100,
	playerRed: colors.red700,
	playerOrange: colors.olive400,
	playerPurple: colors.purple600,
	playerCyan: colors.cyan350,
	playerPink: colors.pink300,
	playerYellow: colors.olive300,
	playerGreen: colors.green450,
} as const;

// Backwards compatibility - export primitives as alias
export const primitives = colors;

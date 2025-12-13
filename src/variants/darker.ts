/**
 * Short Giraffe Darker Variant
 * Deeper backgrounds for users who prefer a darker UI
 */

import { colors } from "../palette";
import type { Variant } from "./index";

export const darker: Variant = {
	id: "darker",
	name: "Short Giraffe Darker",
	overrides: {
		// =========================================================================
		// VS CODE BACKGROUNDS
		// =========================================================================
		// Main editor areas: gray725 → gray825
		editorBackground: colors.gray825,
		gutterBackground: colors.gray825,
		panelBackground: colors.gray825,
		terminalBackground: colors.gray825,
		tabInactiveBackground: colors.gray825,
		titleBarInactive: colors.gray825,
		stickyScrollBackground: colors.gray825,
		stickyScrollGutter: colors.gray825,
		breadcrumbBackground: colors.gray825,
		welcomePageBackground: colors.gray825,
		notebookCellBackground: colors.gray825,
		notebookEditorBackground: colors.gray825,
		terminalStickyScrollBackground: colors.gray825,
		inlineEditGutterBackground: colors.gray825,

		// Sidebar & title: gray750 → gray850
		sidebarBackground: colors.gray850,
		titleBarActive: colors.gray850,

		// Activity bar: gray900 → gray950
		activityBarBackground: colors.gray950,
		activityBarBorder: colors.gray950,

		// =========================================================================
		// VS CODE BORDERS & HOVER STATES
		// =========================================================================
		sidebarBorder: colors.gray950,
		tabBorder: colors.gray825,
		titleBarBorder: colors.gray750,
		overviewRulerBorder: colors.gray750,
		stickyScrollBorder: colors.gray750,

		// Hover/Focus states: gray650 → gray700
		listHoverBackground: colors.gray700,
		listFocusBackground: colors.gray700,
		stickyScrollHover: colors.gray700,
		terminalStickyScrollHover: colors.gray700,
		welcomePageTileBackground: colors.gray700,

		// Active selections: gray575 → gray625
		listActiveSelection: colors.gray625,
		tabActiveBackground: colors.gray625,

		// =========================================================================
		// VS CODE WIDGETS & INPUTS
		// =========================================================================
		// Widget backgrounds: gray550 → gray600
		widgetBackground: colors.gray600,
		peekViewBackground: colors.gray600,
		peekViewResult: colors.gray600,
		peekViewTitle: colors.gray600,
		debugToolbar: colors.gray600,
		debugExceptionBackground: colors.gray600,
		inlineChatBackground: colors.gray600,
		bannerBackground: colors.gray600,
		debugStateLabelBackground: colors.gray600,

		// Suggest widget: gray475 → gray525
		suggestWidgetBackground: colors.gray525,

		// Quick input/menus: gray575 → gray625
		quickInputBackground: colors.gray625,
		quickInputFocusBackground: colors.gray625,
		menuBackground: colors.gray625,
		breadcrumbPickerBackground: colors.gray625,
		notificationHeaderBackground: colors.gray600,

		// Dropdown/input: gray800 → gray850
		dropdownBackground: colors.gray850,
		inputBackground: colors.gray850,

		// Notification: gray625 → gray675
		notificationBackground: colors.gray675,

		// =========================================================================
		// ZED BACKGROUNDS
		// =========================================================================
		// Main Zed backgrounds: gray750 → gray850
		zedBackground: colors.gray850,
		zedPanel: colors.gray850,
		zedStatusBar: colors.gray850,
		zedTitleBar: colors.gray850,
		zedToolbar: colors.gray850,
		zedTabBar: colors.gray850,

		// Zed editor: gray725 → gray825
		zedEditorBackground: colors.gray825,
		zedEditorGutter: colors.gray825,

		// Zed surfaces: gray900 → gray950
		zedSurface: colors.gray950,
		zedElevatedSurface: colors.gray950,

		// Zed terminal: gray825 → gray900
		zedTerminalBackground: colors.gray900,

		// =========================================================================
		// ZED BORDERS & ELEMENTS
		// =========================================================================
		// Borders: gray675 → gray725
		zedBorder: colors.gray725,

		// Border variant: gray700 → gray750
		zedBorderVariant: colors.gray750,

		// Elements: gray675 → gray725
		zedElement: colors.gray725,
		zedGhostElementHover: colors.gray725,

		// Element hover: gray600 → gray650
		zedElementHover: colors.gray650,
		zedGhostElementActive: colors.gray650,

		// Tabs: adjust accordingly
		zedTabActive: colors.gray725,
		zedTabInactive: colors.gray850,

		// Editor lines: gray675 → gray725, gray600 → gray650
		zedEditorActiveLine: colors.gray725,
		zedEditorHighlightedLine: colors.gray650,
		zedGhostElementSelected: colors.gray700,
		zedElementSelected: colors.gray625,
	},
};

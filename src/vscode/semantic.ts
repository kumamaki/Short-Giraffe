/**
 * VS Code Semantic Token Colors
 * Modern semantic highlighting that works with language servers
 */

import { tokens } from "../tokens";

export const vscodeSemanticTokenColors: Record<string, string> = {
	"property.declaration": tokens.property.color,
	variable: tokens.variable.color,
	function: tokens.function.color,
	typeParameter: tokens.vueProp.color,
	type: tokens.type.color,
	interface: tokens.interface.color,
	class: tokens.interface.color,
	"type.declaration": tokens.type.color.toUpperCase(),
	enum: tokens.enum.color,
	enumMember: tokens.enumMember.color,
};

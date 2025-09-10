# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Short Giraffe is a dark color theme for VS Code and Zed editors. It's a dual-platform theme project that maintains separate but coordinated theme definitions for both editors.

## Project Structure

- `vscode/theme.json` - VS Code theme definition with comprehensive UI colors and token colors
- `themes/zed.json` - Zed theme definition following Zed's schema
- `package.json` - VS Code extension manifest
- `extension.toml` - Zed extension manifest
- `demo/` - Demo files showcasing the theme

## Core Architecture

### Dual Platform Support
The project maintains two separate theme files:
- VS Code uses a comprehensive JSON format with detailed UI colors (200+ color definitions)
- Zed uses a more structured schema with `syntax` and `style` sections

### Color Palette Consistency
Both themes share the same core color palette:
- Primary accent: `#FFB69E` and `#F29E74` (orange/coral tones)
- Functions: `#45CAC2` (cyan)
- Strings: `#F6ABA8`/`#E4A2AC` (pink)
- Keywords: `#F5DA7A` (yellow)
- Variables: `#BBD2EE` (light blue)
- Background: Dark blues (`#191F2B` for VS Code, `#141821` for Zed)

### Theme Features
- Semantic highlighting support
- Comprehensive language support (CSS, HTML, JSON, Markdown, Vue, etc.)
- Carefully crafted syntax colors for code readability
- Consistent UI theming across panels, sidebars, and editor

## Publishing

### VS Code Extension
- Publisher: `kumamaki`
- Package manager: `pnpm@9.12.3`
- Uses `.vsix` packaging for distribution

### Zed Extension
- Follows Zed's extension format with `extension.toml`
- Theme schema version: `v0.1.0.json`

## Development Commands

No build system or dependencies - themes are static JSON files. Changes can be tested by:
- For VS Code: Installing the `.vsix` file or running in development mode
- For Zed: Following Zed's extension development workflow

## File Modification Guidelines

When updating colors:
1. Maintain consistency between both platform theme files
2. Test changes across multiple languages shown in `demo/` folder
3. Ensure semantic highlighting tokens are properly defined
4. Keep accessibility and readability in mind for the dark theme approach

## Version Management

Version numbers must be synchronized across:
- `package.json` (VS Code)
- `extension.toml` (Zed)
- Update `CHANGELOG.md` for release notes
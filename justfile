# Short Giraffe Theme Development

set shell := ["zsh", "-cu"]

project_dir := justfile_directory()

# Link themes, generate, and watch for changes
develop:
    ln -sf "{{project_dir}}" ~/.vscode/extensions/short-giraffe-dev
    mkdir -p ~/.config/zed/themes
    ln -sf "{{project_dir}}/zed/themes/zed.json" ~/.config/zed/themes/short-giraffe.json
    @echo "✓ Linked to VS Code and Zed"
    pnpm generate
    @echo "👀 Watching for changes... (Ctrl+C to stop)"
    bun --watch src/generate.ts

# Remove symlinks to use marketplace versions
unlink:
    trash ~/.vscode/extensions/short-giraffe-dev ~/.config/zed/themes/short-giraffe.json 2>/dev/null || true
    @echo "✓ Unlinked! Reload editor to use marketplace version"

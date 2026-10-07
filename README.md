# Emoji Search for Tezbar

Search emoji by keyword, filter by category, and paste or copy to the clipboard.
Recently used emoji are saved locally. Optional GitHub shortcodes require internet access.
Supports Windows and macOS.

## Install

In Tezbar's Extensions view, install `https://github.com/almatkai/emoji`.
The repository includes `.sc-build/emoji.js` with the extension's dependencies bundled,
so installation does not require npm or Bun. Reinstall from this URL to replace an older
installation that failed with missing `emojilib`, `fuse.js`, `raycast-toolkit`, or `cross-fetch`.

## Development

```sh
npm ci
npm run typecheck
npm run build
npm test
```

Commit the regenerated `.sc-build/emoji.js` whenever source or dependencies change.
React, Raycast API/utilities, and node-fetch are supplied by Tezbar; all other imported
packages are included in the bundle. `npm run build:raycast` retains the original
Raycast build command for development in Raycast.

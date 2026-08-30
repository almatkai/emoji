/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Primary action - Primary action to use */
  "primaryAction": "paste" | "copy",
  /** Unicode Version - Unicode version to use (default: 15.1) */
  "unicodeVersion": "15.1" | "15.0" | "14.0" | "13.1" | "13.0" | "12.1" | "12.0" | "11.0" | "5.0" | "4.0",
  /** Shortcodes - Add short codes to the emojis (e.g. zap for ⚡️) which can be used in platforms like GitHub and Slack. */
  "shortCodes": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `emoji` command */
  export type Emoji = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `emoji` command */
  export type Emoji = {}
}


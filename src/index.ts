/**
 * The default theme.
 * @module DefaultTheme
 * 
 * @see https://shouts.dev/create-multiple-themes-in-vuejs
 */

/**
 * An unique identifier for this theme, to be set by each theme module.
 * @constant
 * @memberof module:DefaultTheme
 */
const THEME_ID = 'core.default'
/**
 * The unique displayable name of the theme.
 * @constant
 * @memberof module:DefaultTheme
 */
const THEME_NAME = 'Default (dark)'

export const Theme = {
  id: THEME_ID,
  name: THEME_NAME,
  package: require('../package.json').name,
  version: require('../package.json').version,
  // Paths relative to dist folder
  paths: {
    sass: 'sass/theme.sass',
    css: 'css/theme.min.css',
    install: `archive/theme.${THEME_NAME}.zip`
  }
}
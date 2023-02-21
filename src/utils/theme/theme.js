const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
}

function getInitiaThemeValue() {
  const savedColorMode = window.localStorage.getItem('theme')

  switch (savedColorMode) {
    case THEMES.DARK:
      return THEMES.DARK
    case THEMES.LIGHT:
      return THEMES.LIGHT
    default:
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      const hasMqlPreference = typeof mql.matches === 'boolean'
      if (hasMqlPreference) {
        return mql.matches ? THEMES.DARK : THEMES.LIGHT
      }
      return THEMES.LIGHT
  }
}

const initialTheme = getInitiaThemeValue()
THEMES.INITIAL = initialTheme

function getLocalStorageThemeValue() {
  const themeValue = window.localStorage.getItem('theme')
  const hasSavedThemeValue = typeof themeValue === 'string'
  if (hasSavedThemeValue) {
    return themeValue
  }

  return THEMES.LIGHT
}

const localStorageTheme = getLocalStorageThemeValue()
THEMES.STORAGE = localStorageTheme

function getOsTheme() {
  const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mediaQueryList.matches === 'boolean'
  if (hasMediaQueryPreference) {
    return mediaQueryList.matches ? THEMES.DARK : THEMES.LIGHT
  }

  return undefined
}

const osTheme = getOsTheme()
THEMES.OS = osTheme

// Проверка что включена темная тема
// export const isDarkTheme = () => {
//   switch (THEMES.DARK) {
//     case THEMES.DARK:
//       return true
//     case THEMES
//   }
//
//   let theme = document.body.className
//   if (theme === THEMES.DARK) {
//     return true
//   } else if (theme === THEMES.LIGHT) {
//     return false
//   }
//   return true
// }
//
// // Проверка что включена светлая тема
// export const isLightTheme = () => {
//   let theme = document.body.className
//   if (theme === THEMES.LIGHT) {
//     return true
//   } else {
//     return false
//   }
// }

export { THEMES, getInitiaThemeValue, getLocalStorageThemeValue, getOsTheme }

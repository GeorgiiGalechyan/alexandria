function getInitiaThemeValue() {
  const savedColorMode = window.localStorage.getItem('theme')
  const hasSavedColorMode = typeof savedColorMode === 'string'
  if (hasSavedColorMode) {
    return savedColorMode
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const hasMqlPreference = typeof mql.matches === 'boolean'
  if (hasMqlPreference) {
    return mql.matches ? 'dark' : 'light'
  }

  return 'light'
}

function getOsTheme() {
  // Смотрим, задана ли цветовая схема в медиа запросах (media query)
  // prefers-color-scheme -запросил ли пользователь светлые или темные цветовые темы через настройки ОС
  const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')


  const hasMediaQueryPreference = typeof mediaQueryList.matches === 'boolean'

  // Если медиа запросы содержат информацию о предпочтительной цветовой схеме,
  // то используем эту цветовую схему, иначе Null и идём дальше.
  if (hasMediaQueryPreference) {
    return mediaQueryList.matches ? 'dark' : 'light'
  }

  // Если браузер/ОС не поддерживает цветовые темы,
  // установим по умолчанию "светлый".
  return 'light'
}

const themes = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: getOsTheme(),
}

export { getThemeOnFirstRun, getOsTheme, themes }

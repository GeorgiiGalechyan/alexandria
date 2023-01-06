function getThemeOnFirstRun() {
  // Смотрим есть ли сохраненная тема в local storage
  const savedColorMode = window.localStorage.getItem('theme')
  const hasSavedColorMode = typeof savedColorMode === 'string'

  // Если пользователь явно выбрал light или dark цветовую схему,
  // то используем выбранную тему. Иначе Null и идём дальше.
  if (hasSavedColorMode) {
    return savedColorMode
  }

  // Смотрим, задана ли цветовая схема в медиа запросах (media query)
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

function getOsTheme() {
  // Смотрим, задана ли цветовая схема в медиа запросах (media query)
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

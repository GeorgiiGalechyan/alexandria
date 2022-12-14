const getBasicColorMode = () => {
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

// Все варианты темы
var DEFAULT_THEME = getBasicColorMode() // тема по умолчанию
var DARK_THEME = 'dark'
var LIGHT_THEME = 'light'

//  задаем тему до загрузки приложения
const initialTheme = () => {
  document.body.classList.remove(DARK_THEME, LIGHT_THEME)
  document.body.classList.add(DEFAULT_THEME)
  window.localStorage.setItem('theme', DEFAULT_THEME)
}

initialTheme()

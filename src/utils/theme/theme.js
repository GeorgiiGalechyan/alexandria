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

const defaultTheme = getBasicColorMode()

// Все варианты темы
const THEMES = {
  DEFAULT: defaultTheme, // тема по умолчанию
  DARK: 'dark',
  LIGHT: 'light',
}

//  задаем тему до загрузки приложения
// const initialTheme = () => {
//   document.body.classList.remove(THEMES.DARK, THEMES.LIGHT)
//   document.body.classList.add(THEMES.DEFAULT)
//   window.localStorage.setItem('theme', DEFAULT_THEME)
// }
//
// initialTheme()

// Проверка что включена темная тема
export const isDarkTheme = () => {
  let theme = document.body.className
  if (theme === THEMES.DARK) {
    return true
  } else if (theme === THEMES.LIGHT) {
    return false
  }
  return true
}

// Проверка что включена светлая тема
export const isLightTheme = () => {
  let theme = document.body.className
  if (theme === THEMES.LIGHT) {
    return true
  } else {
    return false
  }
}

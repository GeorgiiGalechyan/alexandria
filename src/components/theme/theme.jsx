import React from 'react'
import { useState } from 'react'

const getBasicColorMode = () => {
  // Смотрим есть ли сохраненная тема в local storage
  const savedColorMode = window.localStorage.getItem('color-mode')
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

export const ThemeContext = React.createContext()

const ThemeProvider = ({ children }) => {
  const [colorMode, setRawColorMode] = useState(getBasicColorMode)

  const setColorMode = (value) => {
    setRawColorMode(value)

    // Persist it on update
    window.localStorage.setItem('color-mode', value)
  }

  return <ThemeContext.Provider value={{ colorMode, setColorMode }}>{children}</ThemeContext.Provider>
}

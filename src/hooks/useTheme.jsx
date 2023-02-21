import { useCallback, useState } from 'react'
import { THEMES } from '../utils/theme/theme.js'

const useTheme = () => {
  const [theme, setTheme] = useState(THEMES.STORAGE)
  const setDarkTheme = useCallback(() => {
    setTheme(THEMES.DARK)
    window.localStorage.removeItem('theme')
    window.localStorage.setItem('theme', THEMES.DARK)
  }, [])

  const setLightTheme = useCallback(() => {
    setTheme(THEMES.LIGHT)
    window.localStorage.removeItem('theme')
    window.localStorage.setItem('theme', THEMES.LIGHT)
  }, [])

  const setPreferenceTheme = useCallback(() => {
    setTheme(THEMES.OS)
    window.localStorage.removeItem('theme')
    window.localStorage.setItem('theme', THEMES.OS)
  }, [])

  return { theme, setDarkTheme, setLightTheme, setPreferenceTheme }
}

export default useTheme

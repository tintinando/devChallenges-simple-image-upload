import { useEffect, useState } from 'react'

interface UseDarkModeHook {
  isDarkTheme: boolean
  toggleTheme: () => void
}

export const useDarkMode = (): UseDarkModeHook => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // first dark theme state
  useEffect(() => {
    const localStorageIsDark = localStorage.theme === 'dark'
    const systemIsDark = window.matchMedia('(prefers-color-scheme:dark)').matches

    if (localStorageIsDark || (!localStorageIsDark && systemIsDark)) {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
  }, [])

  // set localStorage only when user turns
  const toggleTheme = (): void => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme)
    localStorage.theme = newTheme ? 'dark' : 'light'
  }

  // at change isDarkTheme status adds or removes class
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkTheme])

  return {
    isDarkTheme,
    toggleTheme
  }
}

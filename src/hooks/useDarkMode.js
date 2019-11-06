import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode')
  const bodyClass = document.querySelector('body').classList.value;
  
  useEffect(() => {
    if (!darkMode) {
      document.querySelector('body').classList.add('dark-mode');
    } else {
      document.querySelector('body').classList.remove('dark-mode')
    }

  },[darkMode])
  
  return [darkMode, setDarkMode]

}
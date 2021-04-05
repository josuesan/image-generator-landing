import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from '../../constants/icons';

const Switcher = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeAllClass = (themeColor) => {
    if (themeColor === 'light') {
      document.querySelectorAll("[class*='-dark']").forEach((elem) => {
        // CHANGE TEXT COLOR
        if (elem.classList.contains('text-gray3-dark')) {
          elem.classList.remove('text-gray3-dark');
          elem.classList.add('text-gray3-light');
        }

        if (elem.classList.contains('text-gray2-dark')) {
          elem.classList.remove('text-gray2-dark');
          elem.classList.add('text-gray2-light');
        }
        if (elem.classList.contains('text-gray-dark')) {
          elem.classList.remove('text-gray-dark');
          elem.classList.add('text-gray-light');
        }
        if (elem.classList.contains('text-base-dark')) {
          elem.classList.remove('text-base-dark');
          elem.classList.add('text-base-light');
        }
        if (elem.classList.contains('text-background-dark')) {
          elem.classList.remove('text-background-dark');
          elem.classList.add('text-background-light');
        }
        if (elem.classList.contains('text-background2-dark')) {
          elem.classList.remove('text-background2-dark');
          elem.classList.add('text-background2-light');
        }
        if (elem.classList.contains('text-inverted-dark')) {
          elem.classList.remove('text-inverted-dark');
          elem.classList.add('text-inverted-light');
        }
        if (elem.classList.contains('text-base-inv-dark')) {
          elem.classList.remove('text-base-inv-dark');
          elem.classList.add('text-base-inv-light');
        }
        if (elem.classList.contains('text-accent-dark')) {
          elem.classList.remove('text-accent-dark');
          elem.classList.add('text-accent-light');
        }

        // CHANGE BG COLOR
        if (elem.classList.contains('bg-gray3-dark')) {
          elem.classList.remove('bg-gray3-dark');
          elem.classList.add('bg-gray3-light');
        }
        if (elem.classList.contains('bg-gray2-dark')) {
          elem.classList.remove('bg-gray2-dark');
          elem.classList.add('bg-gray2-light');
        }
        if (elem.classList.contains('bg-gray-dark')) {
          elem.classList.remove('bg-gray-dark');
          elem.classList.add('bg-gray-light');
        }
        if (elem.classList.contains('bg-base-dark')) {
          elem.classList.remove('bg-base-dark');
          elem.classList.add('bg-base-light');
        }
        if (elem.classList.contains('bg-background-dark')) {
          elem.classList.remove('bg-background-dark');
          elem.classList.add('bg-background-light');
        }
        if (elem.classList.contains('bg-background2-dark')) {
          elem.classList.remove('bg-background2-dark');
          elem.classList.add('bg-background2-light');
        }
        if (elem.classList.contains('bg-inverted-dark')) {
          elem.classList.remove('bg-inverted-dark');
          elem.classList.add('bg-inverted-light');
        }
        if (elem.classList.contains('bg-base-inv-dark')) {
          elem.classList.remove('bg-base-inv-dark');
          elem.classList.add('bg-base-inv-light');
        }
        if (elem.classList.contains('bg-accent-dark')) {
          elem.classList.remove('bg-accent-dark');
          elem.classList.add('bg-accent-light');
        }
      });
    }
    else {
      document.querySelectorAll("[class*='-light']").forEach((elem) => {

        //CHANGE TEXT COLOR
        if (elem.classList.contains('text-gray3-light')) {
          elem.classList.remove('text-gray3-light');
          elem.classList.add('text-gray3-dark');
        }
        if (elem.classList.contains('text-gray2-light')) {
          elem.classList.remove('text-gray2-light');
          elem.classList.add('text-gray2-dark');

        }
        if (elem.classList.contains('text-gray-light')) {
          elem.classList.remove('text-gray-light');
          elem.classList.add('text-gray-dark');
        }
        if (elem.classList.contains('text-base-light')) {
          elem.classList.remove('text-base-light');
          elem.classList.add('text-base-dark');

        }
        if (elem.classList.contains('text-background-light')) {
          elem.classList.remove('text-background-light');
          elem.classList.add('text-background-dark');
        }
        if (elem.classList.contains('text-background2-light')) {
          elem.classList.remove('text-background2-light');
          elem.classList.add('text-background2-dark');
        }
        if (elem.classList.contains('text-inverted-light')) {
          elem.classList.remove('text-inverted-light');
          elem.classList.add('text-inverted-dark');
        }
        if (elem.classList.contains('text-base-inv-light')) {
          elem.classList.remove('text-base-inv-light');
          elem.classList.add('text-base-inv-dark');
        }
        if (elem.classList.contains('text-accent-light')) {
          elem.classList.remove('text-accent-light');
          elem.classList.add('text-accent-dark');

        }

        //CHANGE BG COLOR
        if (elem.classList.contains('bg-gray3-light')) {
          elem.classList.remove('bg-gray3-light');
          elem.classList.add('bg-gray3-dark');
        }
        if (elem.classList.contains('bg-gray2-light')) {
          elem.classList.remove('bg-gray2-light');
          elem.classList.add('bg-gray2-dark');
        }
        if (elem.classList.contains('bg-gray-light')) {
          elem.classList.remove('bg-gray-light');
          elem.classList.add('bg-gray-dark');
        }
        if (elem.classList.contains('bg-base-light')) {
          elem.classList.remove('bg-base-light');
          elem.classList.add('bg-base-dark');
        }
        if (elem.classList.contains('bg-background-light')) {
          elem.classList.remove('bg-background-light');
          elem.classList.add('bg-background-dark');
        }
        if (elem.classList.contains('bg-background2-light')) {
          elem.classList.remove('bg-background2-light');
          elem.classList.add('bg-background2-dark');
        }
        if (elem.classList.contains('bg-inverted-light')) {
          elem.classList.remove('bg-inverted-light');
          elem.classList.add('bg-inverted-dark');
        }
        if (elem.classList.contains('bg-base-inv-light')) {
          elem.classList.remove('bg-base-inv-light');
          elem.classList.add('bg-base-inv-dark');
        }
        if (elem.classList.contains('bg-accent-light')) {
          elem.classList.remove('bg-accent-light');
          elem.classList.add('bg-accent-dark');
        }
      });
    }
  };

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    handleChangeAllClass(theme === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark');
      handleChangeAllClass('dark');
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light');
      handleChangeAllClass('light');
    }
  }, []);

  return (
    <label className="theme-switcher mb-0" htmlFor="color-theme">
      <input className="color-theme" defaultChecked={theme === 'dark'} type="checkbox" name="color-theme" id="color-theme" onChange={handleChangeTheme} />
      <span className="theme-switcher-slider">
        <span className="theme-switcher-icon sun">
          <Sun />
        </span>
        <span className="theme-switcher-icon moon">
          <Moon />
        </span>
      </span>
    </label>
  )
}

export default Switcher

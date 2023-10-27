import React from 'react'
import './Header.css';
import {ReactComponent as IconMoon} from "../assets/images/moon.svg"
import {ReactComponent as IconSun} from "../assets/images/sun.svg"


const Header = () => {

    const [theme, setTheme] = React.useState(false);

    const handleTheme = () => {
      const bodyElement = document.querySelector('body');
      const currentTheme = bodyElement.classList.contains('dark') ? 'light' : 'dark';
      bodyElement.classList.toggle('dark');
      localStorage.setItem('theme', currentTheme);
      setTheme(currentTheme);
    };
    
    React.useEffect(() => {
      const bodyElement = document.querySelector('body');
      const currentTheme = localStorage.getItem('theme');
      if (currentTheme) {
        bodyElement.classList.add(currentTheme);
        setTheme(currentTheme);
      }
    }, []);


  return (
    <header className='header'>
        <div className='initial'>
            <p className='text'>Where in the world?</p>
            <div className='themes' onClick={handleTheme}>
                {theme === "light" ? <IconMoon className='icon' /> : <IconSun className='icon' />}
                <p className='textTheme'>Dark Mode</p>
            </div>
        </div>
    </header>
  )
}

export default Header

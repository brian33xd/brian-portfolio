import React, { useEffect, useState } from 'react'

export const DarkTheme = () => {
    const [active, setActive] = useState(false);
    
    useEffect(()=> {
    setLightMode()
    },[])

    const setDarkMode = () => {
      document.querySelector('body').setAttribute("data-theme", "dark")
    }
    const setLightMode = () => {
      document.querySelector("body").setAttribute("data-theme", "light")
    
    }

    const toggleTheme = (e) => {
      const bodye = document.querySelector('body').getAttribute('data-theme');
      
      if (bodye == 'light') {
        setDarkMode()
        e.target.className= 'toggle toggle-active'
      } else {
        setLightMode()
        e.target.className= 'toggle'
      }
    }

  return (
    <div className={active? 'toggle toggle-active' : 'toggle'} onClick={toggleTheme} >
        <ion-icon name="sunny-outline"></ion-icon>
        <ion-icon name="moon-outline"></ion-icon>
    </div>
  )
}

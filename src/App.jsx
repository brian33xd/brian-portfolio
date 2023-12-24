
import { DarkTheme } from './components/DarkTheme';
import { PrincipalRouter } from './router/PrincipalRouter'
import { useRef } from 'react'

function App() {
  const cursor = useRef()

  const movingCursor = e => {
    let posY = e.clientY;
    let posX = e.clientX;

    cursor.current.style.left = `${posX-13}px`
    cursor.current.style.top = `${posY-10}px`
  }
  return (
    <div className='Main' onMouseMove={movingCursor}>
      <div className='Main__cursor' ref={cursor}></div>

      
     <PrincipalRouter/>
     
     <DarkTheme/>
    </div>
  )
}

export default App

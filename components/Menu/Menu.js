import { useEffect, useState } from 'react'
import { MenuView } from './MenuView'

export function Menu({ repositories }) {
  const [menuVisible, setMenuVisible] = useState(false)

  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [menuVisible])

  const toggleMenu = () => {
    setMenuVisible((x) => !x)
  }

  return <MenuView menuVisible={menuVisible} toggleMenu={toggleMenu} repositories={repositories} />
}

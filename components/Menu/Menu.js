import { useState } from "react";
import { MenuView } from "./MenuView";

export function Menu({ repositories }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((x) => !x);
  };

  return (
    <MenuView
      menuVisible={menuVisible}
      toggleMenu={toggleMenu}
      repositories={repositories}
    />
  );
}

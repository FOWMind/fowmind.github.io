import { useState } from "react";
import { MenuView } from "./MenuView";

export function Menu({ repositories }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((x) => !x);
    const currentBodyOverflowY = document.body.style.overflowY;
    document.body.style.overflowY =
      currentBodyOverflowY === "hidden" ? "auto" : "hidden";
  };

  return (
    <MenuView
      menuVisible={menuVisible}
      toggleMenu={toggleMenu}
      repositories={repositories}
    />
  );
}

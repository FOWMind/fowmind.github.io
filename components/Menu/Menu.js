import styled from "styled-components";
import { useState } from "react";
import { Paragraph, Repositories } from "../";

export function Menu({ repositories }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((x) => !x);
  };

  return (
    <>
      {menuVisible ? (
        <MenuStyled>
          <MenuButtonContainer>
            <MenuButton onClick={toggleMenu} menuVisible={menuVisible}>
              <MenuIcon src="/images/icon/close-icon.svg" alt="" />
              <MenuText>Cerrar</MenuText>
            </MenuButton>
          </MenuButtonContainer>

          <Repositories repositories={repositories} />
        </MenuStyled>
      ) : (
        <MenuButton onClick={toggleMenu} menuVisible={menuVisible}>
          <MenuIcon src="/images/icon/menu-icon.svg" alt="" />
          <MenuText>Menú</MenuText>
        </MenuButton>
      )}
    </>
  );
}

const MenuText = styled(Paragraph)`
  margin-left: 0.625rem;
`;

const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuButton = styled.button`
  cursor: pointer;
  border: none;
  font: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0.5rem 0;
  background: none;
  position: ${({ menuVisible }) => (menuVisible ? "relative" : "absolute")};
  top: ${({ menuVisible }) => !menuVisible && "2.5rem"};
  right: ${({ menuVisible }) => (menuVisible ? "0" : "2.5rem")};
  z-index: ${({ menuVisible }) => !menuVisible && "200"};

  &:hover > ${MenuText} {
    text-decoration: underline;
  }
`;

const MenuIcon = styled.img`
  width: 32px;
`;

const MenuStyled = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;

  width: 90%;
  max-width: 475px;
  height: 100vh;
  overflow: auto;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.secondary.bg};
`;

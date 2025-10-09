import styled from "styled-components";
import { respondTo } from "../../styles/mixins";
import MenuButton from "../UI/MenuButton";
import { useMenu } from "../../context/MenuContext";

const StyledNav = styled.ul`
  z-index: 999;
  position: absolute;
  top: 100%;
  margin-top: 2px;
  right: 0;
  background-color: var(--color-navy);
  padding: 2rem;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  overflow: hidden;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  width: 100%; /* full viewport width on mobile */
  height: 100dvh;

  a {
    color: var(--color-light-gray);
    text-decoration: none;
  }
  a:hover {
    color: var(--color-sky-blue);
  }

  ${respondTo.desktopUp} {
    display: flex;
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    top: 0;
    margin-top: 0;
    width: auto;
    height: auto;
    padding: 1rem;
  }
`;

function Navigation() {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();
  return (
    <>
      <StyledNav $isOpen={isMenuOpen} onClick={closeMenu}>
        <li onClick={closeMenu}>
          <a href="/">Home</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#tools">Tools</a>
        </li>
        <li onClick={closeMenu}>
          <a href="/#about">About</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#contact">Contact Me</a>
        </li>
      </StyledNav>
      <MenuButton
        onClick={() => {
          console.log("Button Clicked...!");
          toggleMenu();
        }}
      />
    </>
  );
}

export default Navigation;

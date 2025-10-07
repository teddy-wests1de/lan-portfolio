import styled from "styled-components";
import { respondTo } from "../../styles/mixins";

const StyledNav = styled.ul`
  position: absolute;
  top: 100%;
  margin-top: 2px;
  right: 0;
  /* height: 0; */
  background-color: var(--color-navy);
  padding: 2rem;
  display: none;
  overflow: hidden;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  width: 100%; /* full viewport width on mobile */

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
    padding: 1rem;
  }
`;

function Navigation() {
  return (
    <StyledNav>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#tools">Tools</a>
      </li>
      <li>
        <a href="/#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact Me</a>
      </li>
    </StyledNav>
  );
}

export default Navigation;

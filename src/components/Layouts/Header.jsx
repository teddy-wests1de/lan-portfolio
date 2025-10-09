import styled from "styled-components";
import Navigation from "./Navigation";
import MenuButton from "../UI/MenuButton";
import { useMenu } from "../../context/MenuContext";

const StyledHeader = styled.header`
  position: relative;
  background-color: var(--color-navy);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid var(--color-sky-blue);

  p {
    font-weight: 700;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <p>{` <ELANDREW />`}</p>
      <Navigation />
      {/* <MenuButton /> */}
    </StyledHeader>
  );
}

export default Header;

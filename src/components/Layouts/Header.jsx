import styled from "styled-components";
import Navigation from "./Navigation";

const StyledHeader = styled.header`
  background-color: var(--color-navy);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

function Header() {
  return (
    <StyledHeader>
      <p>{` < ELANDREW />`}</p>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;

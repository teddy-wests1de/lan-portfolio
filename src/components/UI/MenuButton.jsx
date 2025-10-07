import styled from "styled-components";
import { respondTo } from "../../styles/mixins";
import { SlMenu } from "react-icons/sl";

const StyledMenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 2rem;

  /* show by default (mobile) */
  display: block;

  ${respondTo.desktopUp} {
    /* Hide on desktop */
    display: none;
  }
`;

function MenuButton() {
  return (
    <StyledMenuButton>
      <SlMenu />
    </StyledMenuButton>
  );
}

export default MenuButton;

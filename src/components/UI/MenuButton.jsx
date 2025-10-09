import styled from "styled-components";
import { respondTo } from "../../styles/mixins";
import { SlMenu } from "react-icons/sl";
import { useMenu } from "../../context/MenuContext";
import { MdClose } from "react-icons/md";

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

function MenuButton({ onClick }) {
  const { isMenuOpen } = useMenu();

  return (
    <StyledMenuButton onClick={onClick}>
      {!isMenuOpen ? <SlMenu /> : <MdClose />}
    </StyledMenuButton>
  );
}

export default MenuButton;

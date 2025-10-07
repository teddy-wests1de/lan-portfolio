import styled from "styled-components";
import { respondTo } from "../../styles/mixins";

const StyledSection = styled.section`
  padding: 2rem 1.85rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  ${respondTo.desktopUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export default Section;

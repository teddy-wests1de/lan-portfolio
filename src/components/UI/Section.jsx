import styled from "styled-components";
import { respondTo } from "../../styles/mixins";

const StyledSection = styled.section`
  background-color: ${(props) => props.$bgColor || "black"};
  padding: 1.5rem 1.85rem;
  margin-bottom: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  ${respondTo.desktopUp} {
    /* border: 1px solid red; */
    grid-template-columns: repeat(${(props) => props.$columns || 1}, 1fr);
  }
`;

function Section({ children, columns, bgColor }) {
  return (
    <StyledSection $columns={columns} $bgColor={bgColor}>
      {children}
    </StyledSection>
  );
}

export default Section;

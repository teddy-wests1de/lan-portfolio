import styled from "styled-components";
import { respondTo } from "../../styles/mixins";

const StyledSection = styled.section`
  position: relative;
  padding: 1.5rem 1.85rem 4rem;
  margin-bottom: 2rem;
  display: grid;
  gap: 1rem;
  overflow: hidden;
  /* Mobile columns default to 1 */
  grid-template-columns: repeat(${(props) => props.mobileColumns || 1}, 1fr);

  /* Make first child span all columns */
  & > :first-child {
    grid-column: 1 / -1;
  }

  ${respondTo.tabletUp} {
    padding: 3rem 1.5rem;
    gap: 1.2rem;
    grid-template-columns: repeat(
      ${(props) => props.tabletColumns || props.mobileColumns || 2},
      1fr
    );
  }

  ${respondTo.desktopUp} {
    /* border: 1px solid red; */
    /* grid-template-rows: 1fr auto; */
    grid-template-columns: repeat(
      ${(props) =>
        props.desktopColumns ||
        props.tabletColumns ||
        props.mobileColumns ||
        3},
      1fr
    );
  }
  background: ${(props) =>
    props.variant === "dark"
      ? "var(--color-dark)"
      : props.variant === "light"
      ? "var(--card-dark)"
      : "transparent"};

  /* Extra small screens */
  @media (max-width: 396px) {
    gap: 10px;
    padding: 30px 15px;
  }
`;

function Section({
  children,
  variant,
  mobileColumns,
  tabletColumns,
  desktopColumns,
}) {
  return (
    <StyledSection
      variant={variant}
      mobileColumns={mobileColumns}
      tabletColumns={tabletColumns}
      desktopColumns={desktopColumns}
    >
      {children}
    </StyledSection>
  );
}

export default Section;

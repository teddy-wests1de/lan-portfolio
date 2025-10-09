import styled from "styled-components";

const StyledContactCard = styled.div`
  border: 1px solid var(--text-muted);
  border-radius: 4px;
  padding: 0.75rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 2rem;
  width: 100%;

  & > :first-child {
    grid-row: 1 / -1;
  }
`;

function ContactCard({ children }) {
  return <StyledContactCard>{children}</StyledContactCard>;
}

export default ContactCard;

import styled from "styled-components";
import ContactCard from "../UI/ContactCard";

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;

  & > * {
    margin: 0 1rem;
  }

  i {
    align-self: center;
  }
  div {
    justify-self: flex-start;
  }
`;
function ContactInformation() {
  return (
    <StyledContactInfo>
      <ContactCard>
        <i>Icon</i>
        <div>Email</div>
        <div>john@example.com</div>
      </ContactCard>
      <ContactCard>
        <i>Icon</i>
        <div>Email</div>
        <div>john@example.com</div>
      </ContactCard>
      <ContactCard>
        <i>Icon</i>
        <div>Email</div>
        <div>john@example.com</div>
      </ContactCard>
    </StyledContactInfo>
  );
}

export default ContactInformation;

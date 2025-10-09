import styled from "styled-components";
import ContactCard from "../UI/ContactCard";
import { TfiEmail } from "react-icons/tfi";
import { MdPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;

  i {
    align-self: center;
    /* border: 1px solid red; */
    background-color: var(--color-sky-blue);
    padding: 0.5rem 0.75rem;
    border-radius: 50%;
  }
  small,
  p {
    justify-self: flex-start;
  }
`;
function ContactInformation() {
  return (
    <StyledContactInfo>
      <ContactCard>
        <i>
          <TfiEmail />{" "}
        </i>
        <small>Email</small>
        <p>john@example.com</p>
      </ContactCard>
      <ContactCard>
        <i>
          <MdPhone />{" "}
        </i>
        <small>Phone</small>
        <p>+27 (022) 4957000</p>
      </ContactCard>
      <ContactCard>
        <i>
          <IoLocationOutline />{" "}
        </i>
        <small>Location</small>
        <p>Cape Town, WC</p>
      </ContactCard>
    </StyledContactInfo>
  );
}

export default ContactInformation;

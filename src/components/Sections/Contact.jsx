import styled from "styled-components";
import ContactForm from "../UI/ContactForm";
import ContactInformation from "../UI/ContactInformation";
import Section from "../UI/Section";

const StyledContact = styled.div`
  button {
    margin: 0; /* Remove default margins */
    justify-self: start; /* Align left with other content */
  }
`;

function Contact() {
  return (
    <StyledContact>
      <Section variant="dark" desktopColumns={2}>
        <h2>Contact</h2>
        <ContactInformation />
        <ContactForm />
      </Section>
    </StyledContact>
  );
}

export default Contact;

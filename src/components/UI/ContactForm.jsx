import styled from "styled-components";
import Button from "./Button";

const StyledForm = styled.form`
  /* background-color: var(--color-dark); */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const StyledInput = styled.input`
  padding: 1rem;
  /* margin: 0 1rem; */
  width: 100%;
  border: 1px solid var(--text-muted);
  border-radius: 4px;
  color: var(--text-light);
  background-color: var(--card-dark);
`;
function ContactForm() {
  return (
    <StyledForm>
      <StyledInput placeholder="Your Name"></StyledInput>
      <StyledInput placeholder="Your Email"></StyledInput>
      <StyledInput placeholder="Your Message"></StyledInput>
      <div>
        <Button>Send Message</Button>
      </div>
    </StyledForm>
  );
}

export default ContactForm;

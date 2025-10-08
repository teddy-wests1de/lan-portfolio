import ContactForm from "../UI/ContactForm";
import ContactInformation from "../UI/ContactInformation";
import Section from "../UI/Section";

function Contact() {
  return (
    <div id="contact">
      <Section bgColor="var(--color-dark)" columns={2}>
        <h2>Contact</h2>
        <ContactInformation />
        <ContactForm />
      </Section>
    </div>
  );
}

export default Contact;

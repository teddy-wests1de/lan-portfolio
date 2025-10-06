import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-navy);
  padding: 1.5rem;
  display: flex;
  justify-content: center;
`;

function Footer() {
  const date = new Date();

  return (
    <StyledFooter>
      <div>
        <small>&copy; {date.getFullYear()} - Elrico Landrew</small>
      </div>
    </StyledFooter>
  );
}

export default Footer;

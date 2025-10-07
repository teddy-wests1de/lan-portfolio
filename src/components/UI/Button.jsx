import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-sky-blue);
  color: var(--color-light-gray);
  padding: 0.75rem 2rem;
  margin: 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #4da3dcff;
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

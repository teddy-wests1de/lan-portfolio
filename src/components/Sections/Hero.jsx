import styled from "styled-components";
import Button from "../UI/Button";

const StyledHero = styled.section`
  margin: 2rem;
  padding: 1rem;
  display: grid;
  text-align: center;
  grid-template-rows: auto auto auto;
`;

function Hero() {
  return (
    <StyledHero>
      <h2>Elrico Landrew</h2>
      <p>Frontend Developer</p>
      <div>
        <Button>View Work</Button>
      </div>
    </StyledHero>
  );
}

export default Hero;

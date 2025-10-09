import styled from "styled-components";
import Button from "../UI/Button";
import { respondTo } from "../../styles/mixins";

const StyledHero = styled.section`
  /* MOBILE STYLES (default) */
  background: linear-gradient(
    to bottom,
    var(--color-dark),
    var(--color-slate-gray)
  );
  position: relative;
  margin: 0;
  padding: 2rem 0 3rem;
  display: grid;
  text-align: center;
  grid-template-rows: auto auto auto;
  border-bottom: 1px solid var(--color-sky-blue);
  gap: 1rem;

  h1 {
    line-height: 2.5rem;
    color: var(--color-sky-blue);
  }

  h3 {
    line-height: 1rem;
  }
  .greeting {
    /* text-align: left; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* TABLET STYLES */
  ${respondTo.tabletUp} {
    h1 {
      font-size: 4rem;
      line-height: 5.5rem;
    }

    h3 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
`;

function Hero() {
  return (
    <StyledHero>
      <p>Hi, I'm Elrico Landrew</p>

      <h1>Frontend Web Developer</h1>
      <p>
        I'm a Developer that focuses on building responsive, scalable and
        efficient web applications.
      </p>
      <div>
        <Button>View Work</Button>
      </div>
    </StyledHero>
  );
}

export default Hero;

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import Hero from "./components/Sections/Hero";
import Projects from "./components/Sections/Projects";
import Tools from "./components/Sections/Tools";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";

const StyledApp = styled.div`
  /* margin: 1rem; */
  background-color: var(--card-dark);
  max-width: 1200px;
  display: grid;
  margin: 0 auto;
  justify-content: center;
  border: 1px solid var(--text-muted);
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <Hero />
        <Projects />
        <Tools />
        <About />
        <Contact />
        <Footer />
      </StyledApp>
    </>
  );
}

export default App;

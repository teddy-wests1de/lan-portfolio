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
  display: grid;
  border: 1px solid var(--color-dark);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <main>
          <Hero />
          <Projects />
          <Tools />
          <About />
          <Contact />
        </main>
        <Footer />
      </StyledApp>
    </>
  );
}

export default App;

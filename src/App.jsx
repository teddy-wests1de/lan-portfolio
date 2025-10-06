import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";

const StyledApp = styled.main`
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
        <Footer />
      </StyledApp>
    </>
  );
}

export default App;

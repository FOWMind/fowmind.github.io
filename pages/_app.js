import "../styles/globals.css";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #1a1b20 0%, #0e0e11 100%);
  padding: 2.5rem;
`;

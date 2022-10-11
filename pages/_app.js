import "../styles/globals.css";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  wrapper: {
    bg: "linear-gradient(180deg, #1a1b20 0%, #0e0e11 100%)",
  },
  workItemOverlay: {
    bg: "linear-gradient(180deg, transparent, #15161a)",
  },
  primary: {
    clr: "#fff",
    bg: "#3490E4",
    textShadow: "0 0 5px #fff",
    boxShadow: "0px 0px 15px 0 #3490e4",
    boxShadowBig: "0px 0px 35px 10px #3490e4",
  },
  secondary: {
    bg: "#292b33",
  },
  featured: {
    clr: "#3490E4",
    bg: "linear-gradient(105deg,#006FD6 15%,#3490E4 55%,#75BDFF 100%)",
    textShadow: "0 0 5px #3490E4",
    boxShadow: "0px 0px 15px 0 #3490E4",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default MyApp;

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.wrapper.bg};
  padding: 2.5rem;
`;

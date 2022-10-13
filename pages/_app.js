import "../styles/globals.css";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalStyle from "../styles/globalStyle";

const theme = {
  wrapper: {
    bg: "linear-gradient(180deg, #1a1b20 0%, #0e0e11 100%)",
  },
  workItemOverlay: {
    bg: "linear-gradient(180deg, transparent, #15161a)",
  },
  scroll: {
    trackBg: "#292b33",
    handlerBg: "#0e0e11",
    handlerBgHover: "#3490E4",
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
    <>
      <Head>
        <title>Agustín Piriz</title>
        <meta
          name="description"
          content="Sitio web personal de Agustín Piriz, desarrollador web."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.wrapper.bg};
  padding: 2.5rem;
`;

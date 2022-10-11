import "../styles/globals.css";
// import WebFont from "webfontloader";
// import { useEffect } from "react";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     WebFont.load({
  //       google: {
  //         families: ["Roboto Mono"],
  //       },
  //     });
  //   }
  // }, []);

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
`;

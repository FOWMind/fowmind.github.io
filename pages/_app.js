import '../styles/globals.css'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyle'
import Head from 'next/head'
import { theme } from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Agustín Piriz</title>
        <meta name="description" content="Sitio web personal de Agustín Piriz, desarrollador web." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default MyApp

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.wrapper.bg};
  padding: 2.5rem;
`

import Head from "next/head";
import styled from "styled-components";
import { ButtonBack, Headline, Paragraph } from "../components";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Agustín Piriz - Página no encontrada</title>
      </Head>
      <Headline>Página no encontrada</Headline>
      <NotFoundParagraph>
        Esta página no puede ser localizada.
        <br />
        Verifica que estés en la dirección correcta.
      </NotFoundParagraph>

      <ButtonBack href="/">Volver al inicio</ButtonBack>
    </>
  );
}

const NotFoundParagraph = styled(Paragraph)`
  margin-bottom: 1.25rem;
`;

import styled from "styled-components";
import { Headline, Paragraph, FeaturedText, Button, Section } from "../common";

export function Introduction() {
  return (
    <Section>
      <Headline featured>Hola</Headline>
      <Paragraph>
        Me llamo Agustín, soy <FeaturedText>desarrollador web</FeaturedText>.
        <br />
        Vivo en Buenos Aires, Argentina.
        <br />
        Me gusta la informática y la naturaleza.
      </Paragraph>
      <IntroductionButtons>
        <Button featured>Sobre mí</Button>
        <Button>Ver contacto</Button>
      </IntroductionButtons>
    </Section>
  );
}

const IntroductionButtons = styled.div`
  margin-top: 1.25rem;
`;

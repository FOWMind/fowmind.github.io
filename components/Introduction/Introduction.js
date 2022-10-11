import { Headline, Paragraph, FeaturedText, Button } from "../common";

export function Introduction() {
  return (
    <section>
      <Headline featured>Hola</Headline>
      <Paragraph>
        Me llamo Agustín, soy <FeaturedText>desarrollador web</FeaturedText>.
        <br />
        Vivo en Buenos Aires, Argentina.
        <br />
        Me gusta la informática y la naturaleza.
      </Paragraph>
      <Button featured>Sobre mí</Button>
      <Button>Ver contacto</Button>
    </section>
  );
}

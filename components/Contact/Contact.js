import { Button, Headline, Section } from "../common";

export function Contact() {
  return (
    <Section id="contact">
      <Headline medium>Contacto</Headline>
      <Button
        featured
        as="a"
        href="https://www.linkedin.com/in/fow"
        target="_blank"
      >
        LinkedIn
      </Button>
      <Button featured as="a" href="mailto:alw1@hotmail.com">
        E-Mail
      </Button>
    </Section>
  );
}

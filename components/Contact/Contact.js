import { Button, HeadlineMedium, Section } from "../common";

export function Contact() {
  return (
    <Section id="contact">
      <HeadlineMedium>Contacto</HeadlineMedium>
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

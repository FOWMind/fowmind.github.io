import { Button, HeadlineMedium, Section } from '../common'

export function Social() {
  return (
    <Section id="social">
      <HeadlineMedium>Social</HeadlineMedium>
      <Button featured as="a" href="https://www.linkedin.com/in/fow" target="_blank">
        LinkedIn
      </Button>
      <Button featured as="a" href="mailto:alw1@hotmail.com">
        E-Mail
      </Button>
      <Button featured as="a" href="https://github.com/FOWMind" target="_blank">
        GitHub
      </Button>
    </Section>
  )
}

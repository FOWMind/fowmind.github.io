import styled from 'styled-components'
import Link from 'next/link'
import { ButtonBack, Headline, Paragraph, Section } from '../'
import { SingleWorkTechnologies, SingleWorkButtons } from './'

export function SingleWorkHeader({ requestedWork }) {
  return (
    <Section>
      <Link href="/" passHref>
        <ButtonBack>Volver a trabajos</ButtonBack>
      </Link>
      <Headline featured>{requestedWork.title}</Headline>
      <WorkDescription>{requestedWork.description}</WorkDescription>

      {requestedWork?.role && <WorkRole>Rol: {requestedWork.role}</WorkRole>}
      {requestedWork?.technologies && <SingleWorkTechnologies technologies={requestedWork.technologies} />}

      {requestedWork?.url && <SingleWorkButtons url={requestedWork.url} />}
    </Section>
  )
}

const WorkRole = styled(Paragraph)`
  margin-bottom: 1.25rem;
`

const WorkDescription = styled(Paragraph)`
  margin-bottom: 1.25rem;
`

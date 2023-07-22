import styled from 'styled-components'
import { Headline, HeadlineSmall, List, ListHeadline, ListItemInline, Section } from '../common'

export function Introduction() {
  return (
    <Section>
      <Headline featured>Agustín Piriz</Headline>
      <IntroductionHeadlineSmall>Desarrollador web</IntroductionHeadlineSmall>
      <IntroductionList>
        <IntroductionListHeadline>Stack:</IntroductionListHeadline>
        <ListItemInline>JavaScript</ListItemInline>
        <ListItemInline>Next.js</ListItemInline>
        <ListItemInline>Express.js</ListItemInline>
        <ListItemInline>CSS/SASS</ListItemInline>
        <ListItemInline>Git</ListItemInline>
        <ListItemInline>Figma</ListItemInline>
      </IntroductionList>
    </Section>
  )
}

const IntroductionHeadlineSmall = styled(HeadlineSmall)`
  margin-block: 0.5rem;
`

const IntroductionList = styled(List)`
  max-width: 500px;
`

const IntroductionListHeadline = styled(ListHeadline)`
  margin-bottom: 0.5rem;
  margin-left: 0;
  font: inherit;
`

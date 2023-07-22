import styled from 'styled-components'
import { Paragraph } from './Paragraph'

export const TextSmall = styled(Paragraph)`
  display: block;
  font-size: 0.75rem;
  color: ${({ theme, featured }) => (featured ? theme.featured.clr : theme.primary.clr)};
  text-shadow: ${({ theme, featured }) => (featured ? theme.featured.textShadow : theme.primary.textShadow)};
`

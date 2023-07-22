import styled from 'styled-components'

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 0.9375rem;
  color: ${({ theme, featured }) => (featured ? theme.featured.clr : theme.primary.clr)};
  // text-shadow: ${({ theme, featured }) => (featured ? theme.featured.textShadow : theme.primary.textShadow)};
  max-width: 35rem;
`

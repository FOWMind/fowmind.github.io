import styled from 'styled-components'

export const FeaturedText = styled.span`
  color: ${({ theme }) => theme.featured.clr};
  text-shadow: ${({ theme }) => theme.featured.textShadow};
`

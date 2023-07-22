import styled from 'styled-components'

export function Section({ children, id }) {
  return <SectionStyled id={id}>{children}</SectionStyled>
}

const SectionStyled = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 6.25rem;
  }
`

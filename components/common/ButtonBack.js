import styled from 'styled-components'
import { Button } from './Button'

export const ButtonBack = styled(Button).attrs((props) => ({
  as: 'a',
  href: '/',
  ...props,
  children: (
    <>
      <BackIcon /> {props.children}
    </>
  ),
}))`
  margin-bottom: 1.25rem;

  &:hover > img {
    transform: translateX(-5px);
  }
`

const BackIcon = styled.img.attrs({
  src: '/images/icon/arrow-left.svg',
  alt: '',
})`
  width: 15px;
  margin: 0 0.5rem;
  transition: transform 0.1s;
`

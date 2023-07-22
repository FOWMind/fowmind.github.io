import styled from 'styled-components'
import { Section, HeadlineMedium, Image } from '../'

export function SingleWorkImages({ images }) {
  return (
    <Section>
      <HeadlineMedium>Imágenes</HeadlineMedium>
      <WorkImages>
        <Image src={images.preview} alt="Imagen de previsualización del trabajo" />

        {images.extra?.length && images.extra.map((extraImage) => <Image key={extraImage} src={extraImage} alt="" />)}
      </WorkImages>
    </Section>
  )
}

const WorkImages = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`

import { Button } from '../common'

export function SingleWorkButtons({ url }) {
  return (
    <>
      {url.demo && (
        <Button featured as="a" href={url.demo} target="_blank">
          Probar demo
        </Button>
      )}

      {url.repository && (
        <Button as="a" href={url.repository} target="_blank">
          Ver repositorio
        </Button>
      )}
    </>
  )
}

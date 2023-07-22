import styled from 'styled-components'
import { List, ListHeadline, ListItem } from '../common'

export function SingleWorkTechnologies({ technologies }) {
  return (
    <WorkTechnologies>
      <ListHeadline>Tecnologías utilizadas</ListHeadline>

      {technologies.map((technology) => (
        <ListItem key={technology}>{technology}</ListItem>
      ))}
    </WorkTechnologies>
  )
}

const WorkTechnologies = styled(List)`
  margin-bottom: 1.25rem;
`

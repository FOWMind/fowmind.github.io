import styled from 'styled-components'
import { HeadlineSmall, Paragraph, Divisor, TextSmall } from '../'
import { RepositoryMetaInfo } from './'

export function Repository({ repository }) {
  const { owner, name, description, homepage, fork, created_at, pushed_at, language, topics, html_url } = repository
  return (
    <RepositoryStyled>
      <TextSmall>@{owner.login}</TextSmall>
      <RepositoryName featured>{name}</RepositoryName>
      {description && <RepositoryDescription>{description}</RepositoryDescription>}

      <Divisor />

      <RepositoryMetaInfo
        homepage={homepage}
        fork={fork}
        created_at={created_at}
        pushed_at={pushed_at}
        language={language}
        topics={topics}
        html_url={html_url}
      />
    </RepositoryStyled>
  )
}

const RepositoryStyled = styled.li`
  background-color: ${({ theme }) => theme.darkBg};
  padding: 1.5625rem;
  border-radius: 10px;

  &:not(:last-of-type) {
    margin-bottom: 1.25rem;
  }
`

const RepositoryName = styled(HeadlineSmall)`
  margin: 0.625rem 0;
`

const RepositoryDescription = styled(Paragraph)`
  margin-bottom: 0.625rem;
`

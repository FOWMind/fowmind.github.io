import styled from "styled-components";
import { FeaturedText, TextSmall } from "../";
import { formatDate, removeProtocolIfExist } from "../../utils";

export function RepositoryMetaInfo({
  homepage,
  fork,
  created_at,
  pushed_at,
  language,
  topics,
  html_url,
}) {
  return (
    <RepositoryMetaInfoStyled>
      {homepage && (
        <RepositoryMetaInfoItem>
          Sitio web:{" "}
          <RepositoryLink href={`https://${removeProtocolIfExist(homepage)}`}>
            <FeaturedText>{removeProtocolIfExist(homepage)}</FeaturedText>
          </RepositoryLink>
        </RepositoryMetaInfoItem>
      )}

      {fork === true && (
        <RepositoryMetaInfoItem>Es Fork: Sí</RepositoryMetaInfoItem>
      )}

      <RepositoryMetaInfoItem>
        Creado: {formatDate(created_at)}
      </RepositoryMetaInfoItem>
      <RepositoryMetaInfoItem>
        Último Push: {formatDate(pushed_at)}
      </RepositoryMetaInfoItem>

      {language && (
        <RepositoryMetaInfoItem>
          Lenguaje más usado: {language}
        </RepositoryMetaInfoItem>
      )}

      {topics.length > 0 && (
        <RepositoryMetaInfoItem>
          Tópicos: {topics.map((topic) => topic).join(", ")}
        </RepositoryMetaInfoItem>
      )}

      <RepositoryMetaInfoItem>
        <ViewRepositoryLink href={html_url}>
          <FeaturedText>Ver en Github</FeaturedText>
        </ViewRepositoryLink>
      </RepositoryMetaInfoItem>
    </RepositoryMetaInfoStyled>
  );
}

const RepositoryMetaInfoStyled = styled.div``;

const RepositoryMetaInfoItem = styled(TextSmall)`
  margin-bottom: 0.3125rem;
`;

const RepositoryLink = styled.a.attrs((props) => ({
  ...props,
  rel: "noreferrer",
  target: "_blank",
}))`
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

const ViewRepositoryLink = styled(RepositoryLink)`
  padding: 0.5rem 0;
`;

import styled from "styled-components";
import {
  HeadlineSmall,
  Paragraph,
  Divisor,
  TextSmall,
  FeaturedText,
} from "../";

export function Repository() {
  return (
    <RepositoryStyled>
      <TextSmall>@Repository Owner</TextSmall>
      <RepositoryName featured>Repository name</RepositoryName>
      <RepositoryDescription>Repository description</RepositoryDescription>

      <Divisor />

      <RepositoryMetaInfo>
        <RepositoryMetaInfoItem>
          Sitio web:{" "}
          <RepositoryLink href="https://demo.com">
            <FeaturedText>https://demo.com</FeaturedText>
          </RepositoryLink>
        </RepositoryMetaInfoItem>
        <RepositoryMetaInfoItem>Es Fork: Sí</RepositoryMetaInfoItem>
        <RepositoryMetaInfoItem>Creado: 13 Oct, 2022</RepositoryMetaInfoItem>
        <RepositoryMetaInfoItem>
          Último Push: 15 Oct, 2022
        </RepositoryMetaInfoItem>
        <RepositoryMetaInfoItem>
          Lenguaje más usado: JavaScript
        </RepositoryMetaInfoItem>
        <RepositoryMetaInfoItem>Tópicos: react, nextjs</RepositoryMetaInfoItem>
      </RepositoryMetaInfo>
    </RepositoryStyled>
  );
}

const RepositoryStyled = styled.li`
  background-color: ${({ theme }) => theme.darkBg};
  padding: 1.5625rem;
  border-radius: 10px;
`;

const RepositoryName = styled(HeadlineSmall)`
  margin: 0.625rem 0;
`;

const RepositoryDescription = styled(Paragraph)`
  margin-bottom: 0.625rem;
`;

const RepositoryMetaInfo = styled.div``;

const RepositoryMetaInfoItem = styled(TextSmall)`
  margin-bottom: 0.3125rem;
`;

const RepositoryLink = styled.a.attrs((props) => ({
  ...props,
  rel: "noreferrer",
  target: "_blank",
}))`
  &:hover {
    text-decoration: underline;
  }
`;

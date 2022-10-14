import styled from "styled-components";
import { HeadlineSmall, Paragraph } from "../common";
import { ListItemInline } from "../common/ListItemInline";

export function Repository() {
  return (
    <RepositoryStyled>
      <RepositoryName featured>Repository name</RepositoryName>
      <RepositoryDescription>Repository description</RepositoryDescription>

      <RepositoryLanguages>
        <RepositoryLanguage>JavaScript</RepositoryLanguage>
        <RepositoryLanguage>CSS</RepositoryLanguage>
      </RepositoryLanguages>

      <RepositoryTags>
        <RepositoryTag>#react</RepositoryTag>
        <RepositoryTag>#nextjs</RepositoryTag>
      </RepositoryTags>
    </RepositoryStyled>
  );
}

const RepositoryStyled = styled.li`
  background-color: ${({ theme }) => theme.darkBg};
  padding: 1.5625rem;
  border-radius: 10px;
`;

const RepositoryName = styled(HeadlineSmall)`
  margin-bottom: 0.625rem;
`;

const RepositoryDescription = styled(Paragraph)`
  margin-bottom: 0.625rem;
`;

const RepositoryLanguages = styled.ul`
  margin-bottom: 0.625rem;
`;

const RepositoryLanguage = styled(ListItemInline)`
  &:not(:last-of-type) {
    margin: 0 0.625rem 0.625rem 0;
  }
`;

const RepositoryTags = styled.ul`
  list-style-type: none;
`;

const RepositoryTag = styled(Paragraph).attrs({
  as: "li",
})`
  display: inline-block;

  &:not(:last-of-type)::after {
    content: "-";
    margin: 0 0.25rem;
  }
`;

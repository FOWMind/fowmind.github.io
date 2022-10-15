import styled from "styled-components";
import { HeadlineMedium, Repository, Paragraph } from "../";

export function Repositories({ repositories }) {
  return (
    <RepositoriesStyled>
      <HeadlineMedium>Repositorios</HeadlineMedium>
      {repositories.length > 0 ? (
        repositories.map((repository) => (
          <Repository key={repository.id} repository={repository} />
        ))
      ) : (
        <Paragraph>No se encontraron repositorios.</Paragraph>
      )}
    </RepositoriesStyled>
  );
}

const RepositoriesStyled = styled.ul`
  list-style-type: none;
  margin-top: 1.5625rem;
`;

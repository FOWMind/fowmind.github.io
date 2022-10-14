import styled from "styled-components";
import { HeadlineMedium, Repository } from "../";

export function Repositories() {
  return (
    <RepositoriesStyled>
      <HeadlineMedium>Repositorios</HeadlineMedium>
      <Repository />
    </RepositoriesStyled>
  );
}

const RepositoriesStyled = styled.ul`
  list-style-type: none;
  margin-top: 1.5625rem;
`;

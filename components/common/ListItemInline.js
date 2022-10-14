import styled from "styled-components";

export const ListItemInline = styled.li`
  list-style-type: none;
  display: inline-block;
  border-radius: 5px;
  padding: 0.15rem 0.3125rem;
  background-color: ${({ theme }) => theme.secondary.bg};
  color: ${({ theme }) => theme.primary.clr};
  font-size: 0.9375rem;
  font-weight: 500;
`;

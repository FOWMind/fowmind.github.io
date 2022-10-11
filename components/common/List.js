import styled from "styled-components";

export const List = styled.ul`
  color: ${({ theme }) => theme.primary.clr};
  list-style-type: disc;
`;

export const ListHeadline = styled.h4`
  font-weight: 500;
  font-size: 1.25rem;
  text-shadow: ${({ theme }) => theme.primary.textShadow};
`;

export const ListItem = styled.li`
  font-weight: 400;
  font-size: 15px;
  margin-left: 1.1rem;
`;

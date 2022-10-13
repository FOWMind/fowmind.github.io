import styled from "styled-components";

export const HeadlineMedium = styled.h2`
  max-width: 70rem;
  font-weight: 500;
  font-size: 1.875rem;
  color: ${({ theme, featured }) =>
    featured ? theme.featured.clr : theme.primary.clr};
  text-shadow: ${({ theme, featured }) =>
    featured ? theme.featured.textShadow : theme.primary.textShadow};
  margin-bottom: 1.25rem;
`;

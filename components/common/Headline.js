import styled from "styled-components";

export const Headline = styled.h1`
  max-width: 70rem;
  font-weight: 700;
  font-size: 3.75rem;
  color: ${({ theme, featured }) =>
    featured ? theme.featured.clr : theme.primary.clr};
  text-shadow: ${({ theme, featured }) =>
    featured ? theme.featured.textShadow : theme.primary.textShadow};

  ${({ theme, featured }) => {
    if (featured) {
      return `
        background: ${theme.featured.bg};
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
      `;
    }
  }}
`;

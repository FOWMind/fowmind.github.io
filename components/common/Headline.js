import styled from "styled-components";

export function Headline({ children, featured, small, medium }) {
  if (small) {
    return <HeadlineSmall featured={featured}>{children}</HeadlineSmall>;
  }

  if (medium) {
    return <HeadlineMedium featured={featured}>{children}</HeadlineMedium>;
  }

  return <HeadlineNormal featured={featured}>{children}</HeadlineNormal>;
}

export const HeadlineSmall = styled.h3`
  max-width: 70rem;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${({ theme, featured }) =>
    featured ? theme.featured.clr : theme.primary.clr};
  text-shadow: ${({ theme, featured }) =>
    featured ? theme.featured.textShadow : theme.primary.textShadow};
`;

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

export const HeadlineNormal = styled.h1`
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

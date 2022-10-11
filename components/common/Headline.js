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
  font-weight: 500;
  color: ${({ featured }) => (featured ? "#006FD6" : "#fff")};
  text-shadow: 0px 0px 5px ${({ featured }) => (featured ? "#006FD6" : "#fff")};
  font-size: 1.25rem;
`;

export const HeadlineMedium = styled.h2`
  font-weight: 500;
  color: ${({ featured }) => (featured ? "#006FD6" : "#fff")};
  text-shadow: 0px 0px 5px ${({ featured }) => (featured ? "#006FD6" : "#fff")};
  font-size: 1.875rem;
`;

export const HeadlineNormal = styled.h1`
  font-weight: 700;
  color: ${({ featured }) => (featured ? "#006FD6" : "#fff")};
  text-shadow: 0px 0px 5px ${({ featured }) => (featured ? "#006FD6" : "#fff")};
  font-size: 3.75rem;

  ${({ featured }) => {
    if (featured) {
      return `
        background: linear-gradient(105deg, #006FD6 15%, #3490E4 55%, #75BDFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      `;
    }
  }}
`;

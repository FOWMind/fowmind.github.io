import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: ${({ small }) => (small ? "5px" : "10px")};
  cursor: pointer;
  display: inline-block;

  color: ${({ theme }) => theme.primary.clr};
  font-family: inherit;
  font-weight: 500;
  font-size: 0.9375rem;
  padding: ${({ small }) =>
    small ? "0.3125rem 0.625rem" : "0.5rem 0.9375rem"};
  background-color: ${({ theme }) => theme.secondary.bg};
  background-image: ${({ theme, featured }) =>
    featured ? theme.featured.bg : ""};
  transition: box-shadow 0.1s, background-color 0.1s;

  &:not(:last-of-type) {
    margin-right: 1.25rem;
  }

  &:hover,
  &:focus-visible {
    box-shadow: ${({ theme, featured }) =>
      featured ? theme.featured.boxShadow : ""};
    background-color: ${({ theme }) => theme.primary.bg};
  }
`;

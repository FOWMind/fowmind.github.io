import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: ${({ small }) => (small ? "5px" : "10px")};
  cursor: pointer;
  display: inline-block;

  color: #fff;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.9375rem;
  padding: ${({ small }) =>
    small ? "0.3125rem 0.625rem" : "0.5rem 0.9375rem"};
  background-color: #292b33;
  background-image: ${({ featured }) =>
    featured
      ? "linear-gradient(105deg, #006FD6 15%, #3490E4 55%, #75BDFF 100%)"
      : ""};
  transition: box-shadow 0.1s, background-color 0.1s;

  &:not(:last-of-type) {
    margin-right: 1.25rem;
  }

  &:hover {
    box-shadow: ${({ featured }) => (featured ? "0px 0px 15px 0 #3490E4" : "")};
    background-color: #3490e4;
  }
`;

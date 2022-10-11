import styled from "styled-components";

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 0.9375rem;
  color: ${({ featured }) => (featured ? "#006FD6" : "#fff")};
  text-shadow: 0px 0px 5px ${({ featured }) => (featured ? "#006FD6" : "#fff")};
  max-width: 35rem;
`;

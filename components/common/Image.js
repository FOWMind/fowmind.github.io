import styled from "styled-components";

export function Image({ ...props }) {
  return (
    <ImageContainer>
      <ImageStyled alt="" {...props} />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 450px;
  overflow: auto;
  border-radius: 10px;
  margin: 0 2rem 2rem 0;
`;

const ImageStyled = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

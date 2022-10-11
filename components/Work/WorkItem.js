import styled from "styled-components";
import { Headline, Paragraph, Button } from "../";

export function WorkItem() {
  return (
    <WorkItemStyled>
      <WorkItemContent>
        <Headline small>Work title</Headline>
        <WorkDescription>Work description</WorkDescription>
        <WorkButton small>Probar demo</WorkButton>
        <WorkButton small>Repositorio</WorkButton>
      </WorkItemContent>
    </WorkItemStyled>
  );
}

const WorkItemStyled = styled.div`
  width: 350px;
  height: 350px;
  background-color: #292b33;
  position: relative;

  &,
  &::before {
    border-radius: 10px;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    pointer-events: none;
    border: 5px solid transparent;
    box-sizing: border-box;
    transition: border-color 0.1s;
  }

  &:hover {
    animation: growAndDecrease 0.3s forwards;

    &::before {
      border-color: #006fd6;
    }
  }

  @keyframes growAndDecrease {
    0% {
      transform: scale(1);
      box-shadow: 0px 0px 35px 10px #006fd6;
    }

    50% {
      transform: scale(1.05);
    }

    100% {
      transform: scale(1);
      box-shadow: 0px 0px 15px 0 #006fd6;
    }
  }
`;

const WorkItemContent = styled.div`
  background: linear-gradient(180deg, transparent, #15161a);
  backdrop-filter: blur(2.5px);
  padding: 0.9375rem;

  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const WorkDescription = styled(Paragraph)`
  margin: 0.5rem 0;
`;

const WorkButton = styled(Button)`
  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;

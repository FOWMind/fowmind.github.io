import styled from "styled-components";
import { Headline, Paragraph, Button } from "../";

export function WorkItem({ work }) {
  const { title, description, url } = work;
  return (
    <WorkItemStyled>
      <WorkItemContent>
        <Headline small>{title}</Headline>
        <WorkDescription>{description}</WorkDescription>
        {url && (
          <>
            {url.demo && (
              <WorkButton small as="a" href={url.demo} target="_blank">
                Probar demo
              </WorkButton>
            )}

            {url.repository && (
              <WorkButton small as="a" href={url.repository} target="_blank">
                Repositorio
              </WorkButton>
            )}
          </>
        )}
      </WorkItemContent>
    </WorkItemStyled>
  );
}

const WorkItemStyled = styled.div`
  width: 350px;
  height: 350px;
  background-color: ${({ theme }) => theme.secondary.bg};
  position: relative;
  margin: 0 2rem 2rem 0;

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
      border-color: ${({ theme }) => theme.primary.bg};
    }
  }

  @keyframes growAndDecrease {
    0% {
      transform: scale(1);
      box-shadow: ${({ theme }) => theme.primary.boxShadowBig};
    }

    50% {
      transform: scale(1.05);
    }

    100% {
      transform: scale(1);
      box-shadow: ${({ theme }) => theme.primary.boxShadow};
    }
  }
`;

const WorkItemContent = styled.div`
  background: ${({ theme }) => theme.workItemOverlay.bg};
  backdrop-filter: blur(2.5px);
  padding: 0.9375rem;
  border-radius: 0 0 10px 10px;

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

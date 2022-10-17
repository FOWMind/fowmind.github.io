import styled from "styled-components";
import Link from "next/link";
import { Button, Headline, Section, Paragraph } from "../";
import { SingleWorkTechnologies, SingleWorkButtons } from "./";

export function SingleWorkHeader({ requestedWork }) {
  return (
    <Section>
      <Link href="/" passHref>
        <BackToWorkButton as="a">
          <BackToWorkIcon src="/images/icon/arrow-left.svg" alt="" />
          Volver a trabajos
        </BackToWorkButton>
      </Link>
      <Headline featured>{requestedWork.title}</Headline>
      <WorkDescription>{requestedWork.description}</WorkDescription>

      {requestedWork?.technologies && (
        <SingleWorkTechnologies technologies={requestedWork.technologies} />
      )}

      {requestedWork?.url && <SingleWorkButtons url={requestedWork.url} />}
    </Section>
  );
}

const BackToWorkButton = styled(Button)`
  margin-bottom: 1.25rem;

  &:hover > img {
    transform: translateX(-5px);
  }
`;

const BackToWorkIcon = styled.img`
  width: 15px;
  margin: 0 0.5rem;
  transition: transform 0.1s;
`;

const WorkDescription = styled(Paragraph)`
  margin-bottom: 1.25rem;
`;

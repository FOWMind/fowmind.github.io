import styled from "styled-components";
import { Headline, Section } from "../common";
import { WorkItem } from "./WorkItem";
import { work } from "../../data/work";

export function Work() {
  return (
    <Section>
      <Headline medium>Trabajos</Headline>
      {work.length && (
        <WorkContainer>
          {work.map((singleWork) => (
            <WorkItem key={singleWork.id} work={singleWork} />
          ))}
        </WorkContainer>
      )}
    </Section>
  );
}

const WorkContainer = styled.div`
  @media screen and (min-width: 500px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

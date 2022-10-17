import Link from "next/link";
import styled from "styled-components";
import { HeadlineSmall, TextSmall, Paragraph, Button } from "../common";

export function WorkItemContent({ title, slug, role, description, url }) {
  return (
    <WorkItemContentStyled>
      <Link href={`/trabajo/${slug}`} passHref>
        <a>
          <HeadlineSmall>{title}</HeadlineSmall>
          {role && <TextSmall>Rol: {role}</TextSmall>}
          <WorkDescription>{description}</WorkDescription>
        </a>
      </Link>
      {url?.demo && (
        <WorkButton small as="a" href={url.demo} target="_blank">
          Probar demo
        </WorkButton>
      )}

      {url?.repository && (
        <WorkButton small as="a" href={url.repository} target="_blank">
          Repositorio
        </WorkButton>
      )}
    </WorkItemContentStyled>
  );
}

const WorkItemContentStyled = styled.div`
  background: ${({ theme }) => theme.workItemOverlay.bg};
  backdrop-filter: blur(2.5px);
  padding: 0.9375rem;
  padding-top: 0;
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

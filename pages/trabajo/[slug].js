import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Button,
  Headline,
  HeadlineSmall,
  HeadlineMedium,
  List,
  ListHeadline,
  ListItem,
  Paragraph,
  Section,
} from "../../components";
import { work } from "../../data/work";

export default function SingleWork({ requestedWork }) {
  const router = useRouter();

  if (router.isFallback) {
    return <HeadlineSmall>Cargando...</HeadlineSmall>;
  }

  return (
    <>
      <Head>
        <title>Agustín Piriz - {requestedWork.title}</title>
      </Head>
      <Section>
        <Headline featured>{requestedWork.title}</Headline>
        <WorkDescription>{requestedWork.description}</WorkDescription>

        {requestedWork?.technologies && (
          <WorkTechnologies>
            <ListHeadline>Tecnologías utilizadas</ListHeadline>

            {requestedWork.technologies.map((technology) => (
              <ListItem key={technology}>{technology}</ListItem>
            ))}
          </WorkTechnologies>
        )}

        {requestedWork.url && requestedWork.url.demo && (
          <Button featured as="a" href={requestedWork.url.demo} target="_blank">
            Probar demo
          </Button>
        )}

        {requestedWork.url && requestedWork.url.repository && (
          <Button as="a" href={requestedWork.url.repository} target="_blank">
            Ver repositorio
          </Button>
        )}
      </Section>

      {requestedWork?.images && (
        <Section>
          <HeadlineMedium>Imágenes</HeadlineMedium>
          <WorkImages>
            <WorkImageContainer>
              <WorkImage
                src={requestedWork.images.preview}
                alt="Imagen de previsualización del trabajo"
              />
            </WorkImageContainer>

            {requestedWork.images.extra?.length &&
              requestedWork.images.extra.map((extraImage) => (
                <WorkImageContainer key={extraImage}>
                  <WorkImage src={extraImage} alt="" />
                </WorkImageContainer>
              ))}
          </WorkImages>
        </Section>
      )}
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = ({ params }) => {
  const { slug } = params;

  const requestedWork = work.find((singleWork) => {
    if (singleWork.hasOwnProperty("slug")) {
      return singleWork.slug === slug;
    }
  });

  if (requestedWork) {
    return {
      props: {
        requestedWork,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const WorkDescription = styled(Paragraph)`
  margin-bottom: 1.25rem;
`;

const WorkTechnologies = styled(List)`
  margin-bottom: 1.25rem;
`;

const WorkImages = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

const WorkImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 550px;
  overflow: auto;
  border-radius: 10px;
  margin: 0 2rem 2rem 0;
`;

const WorkImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

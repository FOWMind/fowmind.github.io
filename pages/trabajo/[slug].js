import { useRouter } from "next/router";
import { Button, Headline, Paragraph } from "../../components";
import { work } from "../../data/work";

export default function SingleWork({ requestedWork }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Headline small>Loading...</Headline>;
  }

  return (
    <>
      <Headline featured>{requestedWork.title}</Headline>
      <Paragraph>{requestedWork.description}</Paragraph>
      <Button as="a" href={requestedWork.url.demo}>
        Probar demo
      </Button>
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

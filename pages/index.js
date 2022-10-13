import {
  About,
  Contact,
  HeadlineSmall,
  Introduction,
  Work,
} from "../components";
import { work } from "../data/work";
import { useIsMounted } from "../hooks";

export default function Home({ work }) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <HeadlineSmall>Cargando...</HeadlineSmall>;
  }

  return (
    <div>
      <Introduction />
      <Work work={work} />
      <About />
      <Contact />
    </div>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      work,
    },
  };
};

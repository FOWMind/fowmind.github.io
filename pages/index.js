import { About, Contact, Headline, Introduction, Work } from "../components";
import { work } from "../data/work";
import { useIsMounted } from "../hooks";

export default function Home({ work }) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Headline small>Cargando...</Headline>;
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

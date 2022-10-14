import { Octokit } from "@octokit/core";
import { useEffect } from "react";
import {
  About,
  Contact,
  HeadlineSmall,
  Introduction,
  Menu,
  Work,
} from "../components";
import { work } from "../data/work";
import { useIsMounted } from "../hooks";

export default function Home({ work }) {
  const isMounted = useIsMounted();

  useEffect(() => {
    const octokit = new Octokit({
      auth: process.env.OCTOKIT_AUTH,
    });

    octokit
      .request("GET /users/{username}/repos", {
        username: "FOWMind",
      })
      .then((repos) => console.log(repos))
      .catch((err) => err);
  }, []);

  if (!isMounted) {
    return <HeadlineSmall>Cargando...</HeadlineSmall>;
  }

  return (
    <div>
      <Menu />
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

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
    // const octokit = new Octokit({
    //   auth: process.env.OCTOKIT_AUTH,
    // });
    // octokit
    //   .request("GET /users/{username}/repos", {
    //     username: "FOWMind",
    //   })
    //   .then((repos) => console.log(repos.data))
    //   .catch((err) => err);
    /*
        Repository info:
        id: number,
        language: string,
        name: string,
        description: string,
        fork: boolean,
        topics: string[],
        created_at: string | date,
        pushed_at: string | date,
        owner: object { login, id, node_id, avatar_url }
        url: string,
      */
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

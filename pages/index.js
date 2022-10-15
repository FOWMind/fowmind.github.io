import { Octokit } from "@octokit/core";
import {
  About,
  Contact,
  Introduction,
  Loading,
  Menu,
  Work,
} from "../components";
import { work } from "../data/work";
import { useIsMounted } from "../hooks";

export default function Home({ repositories }) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Loading />;
  }

  return (
    <div>
      <Menu repositories={repositories} />
      <Introduction />
      <Work work={work} />
      <About />
      <Contact />
    </div>
  );
}

export const getStaticProps = async () => {
  const octokit = new Octokit({
    auth: process.env.OCTOKIT_AUTH,
  });

  const repositories = await octokit.request("GET /users/{username}/repos", {
    username: process.env.OCTOKIT_REPOS_USERNAME,
  });

  return {
    props: {
      repositories: repositories.data || [],
    },
  };
};

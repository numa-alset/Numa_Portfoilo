import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import {fetchGitHubUser} from "../../utils";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setProfile] = useState(null);

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      fetchGitHubUser(openSource.githubUsername)
        .then(setProfile)
        .catch(error => {
          console.error(`Unable to load GitHub profile: ${error.message}`);
        });
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    prof
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}

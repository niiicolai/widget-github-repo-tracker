import { useSearchParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import ViewRepository from "./ViewRepository";
import ViewError from "./ViewError";
import ViewLoader from "./ViewLoader";

export default function Dashboard() {
  const [URLSearchParams] = useSearchParams();
  const githubUserName = URLSearchParams.get("github_username");
  const repositoryName = URLSearchParams.get("repository_name");

  const { data, isPending, error } = useQuery({
    queryKey: ['repository', githubUserName, repositoryName],
    queryFn: () => fetch(`https://api.github.com/repos/${githubUserName}/${repositoryName}`).then(r => r.json()),
  });

  if (!githubUserName || !repositoryName) {
    return (
      <ViewError
        title="Missing GitHub Username or Repository Name"
        description="Please provide GitHub Username and Repository Name parameters."
        help="?github_username=USERNAME&repository_name=REPOSITORY_NAME"
      />
    );
  }

  if (error) {
    return (
      <ViewError
        title="Fetch Error"
        description={error.message}
        help="Ensure the github_username and repository_name is correct."
      />
    );
  }

  if (isPending) {
    return <ViewLoader />
  }

  if (!data) {
    return (
      <ViewError
        title="No repository found"
        description="The data source returned no repository."
        help="Ensure the github_username and repository_name is correct."
      />
    );
  }

  return (<ViewRepository repository={data} />);
}

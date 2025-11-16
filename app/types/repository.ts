
export interface Repository {
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  open_issues_count: number;
  forks: number;
  homepage: string;
  language: string;
  license: { name: string; };
}

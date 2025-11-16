import { CodeIcon, GlobeIcon } from "lucide-react";
import type { Repository } from "../types/repository";

export default function ViewRepository({
  repository,
}: {
  repository: Repository;
}) {
  return (
    <div
  className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800"
  style={{ minHeight: "400px" }}
>
  <div className="flex flex-col md:flex-row sm:items-start justify-between pb-3 mb-4 border-b border-gray-200 dark:border-gray-700">
    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-0 leading-tight">
      {repository.name}
    </h2>

    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
      <div className="flex items-center gap-1">
        <span className="font-semibold text-gray-700 dark:text-gray-300">Created:</span>
        {new Date(repository.created_at).toLocaleDateString()}
      </div>

      <div className="flex items-center gap-1">
        <span className="font-semibold text-gray-700 dark:text-gray-300">Updated:</span>
        {new Date(repository.updated_at).toLocaleDateString()}
      </div>

      <div className="flex items-center gap-1">
        <span className="font-semibold text-gray-700 dark:text-gray-300">License:</span>
        <span className="font-medium">{repository.license.name}</span>
      </div>
    </div>
  </div>

  <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
    {repository.description || "No description provided."}
  </p>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
    
    <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Language</span>
      <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-1">
        {repository.language || 'N/A'}
      </span>
    </div>

    <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Stars</span>
      <span className="text-3xl font-extrabold text-yellow-600 dark:text-yellow-400 mt-1">
        {repository.stargazers_count}
      </span>
    </div>

    <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Watchers</span>
      <span className="text-3xl font-extrabold text-green-600 dark:text-green-400 mt-1">
        {repository.watchers_count}
      </span>
    </div>

    <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Forks</span>
      <span className="text-3xl font-extrabold text-pink-600 dark:text-pink-400 mt-1">
        {repository.forks}
      </span>
    </div>

    <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Open Issues</span>
      <span className="text-3xl font-extrabold text-red-600 dark:text-red-400 mt-1">
        {repository.open_issues_count}
      </span>
    </div>

    <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Size (KB)</span>
      <span className="text-xl font-bold text-teal-600 dark:text-teal-400 mt-1">
        {repository.size}
      </span>
    </div>

  </div>

  <div className="flex flex-wrap gap-4 pt-3 border-t border-gray-200 dark:border-gray-700">
    {repository.homepage && (
      <a
        href={repository.homepage}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
      >
        <GlobeIcon className="w-5 h-5" /> Homepage
      </a>
    )}

    <a
      href={repository.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
    >
      <CodeIcon className="w-5 h-5" /> View Source
    </a>
  </div>
</div>
  );
}

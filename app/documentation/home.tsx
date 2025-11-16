
export default function Home() {
  const dashboardUrl = `http://localhost:5173/widget-github-repo-tracker/#/dashboard?github_username=niiicolai&repository_name=two-easy-engine`;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        GitHub Repository Tracker
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Display GitHub repository stats in an embeddable iframe.
      </p>
      <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
        <div>Start Date: 16/11/2025</div>
        <div>Last Update: 16/11/2025</div>
      </div>

      <a
        href="https://github.com/niiicolai/widget-github-repo-tracker"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors mb-3 inline-block"
      >
        GitHub Repository
      </a>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Demo
        </h2>
        <iframe src={dashboardUrl} width="100%" height="414px" className="rounded-xl"></iframe>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Setup
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Add this iframe to your website:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          {`<iframe 
  src="https://niiicolai.github.io/widget-github-repo-tracker/#/dashboard?github_username=USERNAME&repository_name=REPOSITORY_NAME" 
  height="270px"
  width="600px">
</iframe>`}
        </pre>
      </section>

      <section className="mb-8 p-4 border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950 rounded-lg">
        <p className="text-blue-800 dark:text-blue-200 font-medium">
          💡 Tip: For the best loading speed and reliability, I highly recommend self-hosting this widget on your own domain or infrastructure.
        </p>
        <p className="mt-2 text-blue-700 dark:text-blue-300 text-sm">
          You can easily fork the project and deploy it yourself using GitHub Pages or a similar service.
          <a
            href="https://github.com/niiicolai/widget-github-repo-tracker/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold ml-1"
          >
            Fork the project here.
          </a>
        </p>
      </section>
    </div>
  );
}

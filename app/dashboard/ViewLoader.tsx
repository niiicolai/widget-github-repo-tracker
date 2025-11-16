export default function ViewLoader() {

  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col items-center justify-center"
      style={{ height: "270px" }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-gray-200 dark:border-gray-700 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
        <p className="text-sm text-gray-600 dark:text-gray-400">Loading projects...</p>
      </div>
    </div>
  );
}
import React from "react";

function ListSkeleton({ rows }) {
  if (isNaN(rows)) {
    rows = 10;
  }
  const skeletonRows = [];
  for (let i = 1; i <= rows; i++) {
    skeletonRows.push(i);
  }

  return (
    <div
      role="status"
      className="mx-auto opacity-10 p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-500 md:p-6 dark:border-gray-500"
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-500 w-12"></div>
      </div>
      {skeletonRows.map((row) => {
        return (
          <div key={row} className="flex justify-between items-center pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-500 w-12"></div>
          </div>
        );
      })}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default ListSkeleton;

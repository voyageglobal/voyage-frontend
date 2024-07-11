const CitiesListSkeleton = () => {
  const skeletons = Array.from({ length: 10 });

  return (
    <ul className="mt-8 flex list-none flex-wrap justify-between gap-x-12 gap-y-8">
      {skeletons.map((_, index) => (
        <li key={index}>
          <div className="flex h-80 w-44 animate-pulse flex-col rounded-10px bg-gray-200 shadow-md">
            <div className="h-64 w-44 rounded-10px bg-gray-300"></div>
            <div className="ml-1.5 mt-2.5 h-6 w-32 rounded bg-gray-300"></div>
            <div className="ml-1.5 mt-2.5 h-4 w-24 rounded bg-gray-300"></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CitiesListSkeleton;

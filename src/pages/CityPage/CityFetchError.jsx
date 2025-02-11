import { AlertTriangle } from 'lucide-react';

const CityFetchError = ({ message }) => {
  return (
    <section className="min-h-28">
      <div className="container mx-auto pt-14">
        <div className="flex items-center gap-4 rounded-lg border border-red-500 bg-red-100 p-4 text-red-700">
          <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red-500" />
          <div>
            <h3 className="text-lg font-semibold">Error loading guide data:</h3>
            <p className="text-base">
              {message ||
                'An unexpected error occurred. Please try again later.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityFetchError;

import { AlertTriangle } from 'lucide-react';

const GuideFetchError = ({ message }) => {
  return (
    <section className="min-h-24 pt-10">
      <div className="container mx-auto">
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

export default GuideFetchError;

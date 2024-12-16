import { memo, lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import FallbackIcon from '../../../utilities/FallbackIcon';

const fallback = <div style={{ background: '#ddd', width: 20, height: 20 }} />;

const DynamicIcon = ({ name, className, ...props }) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <ErrorBoundary FallbackComponent={FallbackIcon}>
      <Suspense fallback={fallback}>
        <LucideIcon {...props} className={className} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default memo(DynamicIcon);

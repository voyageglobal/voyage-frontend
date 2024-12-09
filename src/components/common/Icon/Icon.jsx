import { memo, lazy, Suspense } from 'react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const fallback = <div style={{ background: '#ddd', width: 20, height: 20 }} />;

const Icon = ({ name, className, ...props }) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} className={className} />
    </Suspense>
  );
};

export default memo(Icon);

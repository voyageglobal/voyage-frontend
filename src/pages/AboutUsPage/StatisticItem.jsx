import { memo } from 'react';

const StatisticsItem = ({ img, amount, children }) => {
  return (
    <div className="h-32 w-32 rounded-10px border border-dark-color pt-3 text-center font-fourth text-xl/6 shadow-xl">
      <div className="mx-auto h-10 w-10">{img}</div>
      <p className="pt-4">
        {amount} <br /> {children}
      </p>
    </div>
  );
};

export default memo(StatisticsItem);

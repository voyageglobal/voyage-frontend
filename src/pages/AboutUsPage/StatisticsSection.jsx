import { memo } from 'react';
import GuidesIcon from '../../assets/img/AboutUsPage/Guides.svg';
import CountriesIcon from '../../assets/img/AboutUsPage/Countries.svg';
import MembersIcon from '../../assets/img/AboutUsPage/Members.svg';

export const StatisticsItem = ({ img, amount, children }) => {
  return (
    <div className="h-32 w-32 rounded-10px border border-dark-color pt-3 text-center font-fourth text-xl/6 shadow-xl">
      <div className="mx-auto h-10 w-10">{img}</div>
      <p className="pt-4">
        {amount} <br /> {children}
      </p>
    </div>
  );
};

const StatisticsSection = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-around px-96 pt-14">
        <StatisticsItem img={<GuidesIcon />} amount={53}>
          guides
        </StatisticsItem>
        <StatisticsItem img={<CountriesIcon />} amount={21}>
          countries
        </StatisticsItem>
        <StatisticsItem img={<MembersIcon />} amount={66}>
          members
        </StatisticsItem>
      </div>
    </section>
  );
};
export default memo(StatisticsSection);

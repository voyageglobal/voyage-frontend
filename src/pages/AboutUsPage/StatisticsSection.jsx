import { memo } from 'react';
import GuidesIcon from '../../assets/img/AboutUsPage/Guides.svg';
import CountriesIcon from '../../assets/img/AboutUsPage/Countries.svg';
import MembersIcon from '../../assets/img/AboutUsPage/Members.svg';
import StatisticsItem from './StatisticItem';

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

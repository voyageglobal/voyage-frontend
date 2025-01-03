import { memo } from 'react';
import GuidesIcon from '../../assets/img/AboutUsPage/Guides.svg';
import CountriesIcon from '../../assets/img/AboutUsPage/Countries.svg';
import MembersIcon from '../../assets/img/AboutUsPage/Members.svg';
import StatisticsItem from './StatisticItem';
import { useTransformedStatistics } from '../../hooks/useTransformedStatistics';
import { StatsSkeleton } from '../MainPage/StatsSkeleton';

const StatisticsSection = () => {
  const { totalGuides, totalCountries, totalUsers, isLoading } =
    useTransformedStatistics();
  return (
    <section>
      <div className="container mx-auto flex justify-around px-96 pt-14">
        <StatisticsItem
          img={<GuidesIcon />}
          amount={isLoading ? <StatsSkeleton /> : totalGuides}
        >
          guides
        </StatisticsItem>
        <StatisticsItem
          img={<CountriesIcon />}
          amount={isLoading ? <StatsSkeleton /> : totalCountries}
        >
          countries
        </StatisticsItem>
        <StatisticsItem
          img={<MembersIcon />}
          amount={isLoading ? <StatsSkeleton /> : totalUsers}
        >
          members
        </StatisticsItem>
      </div>
    </section>
  );
};
export default memo(StatisticsSection);

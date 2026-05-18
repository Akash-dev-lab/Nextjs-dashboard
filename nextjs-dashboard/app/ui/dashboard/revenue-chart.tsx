import { CalendarIcon } from '@heroicons/react/24/outline';
import { publicSans } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';
import RevenueECharts from '@/app/ui/dashboard/revenue-echarts';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  const revenue = await fetchRevenue()

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  const months = revenue.map((item) => item.month);
  const revenueData = revenue.map((item) => item.revenue);

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${publicSans.className} mb-4 text-xl font-semibold md:text-2xl`}>
        Recent Revenue
      </h2>

      <div className="rounded-xl bg-gray-50 p-4">
         <div className="rounded-md bg-white p-4">

          <RevenueECharts months={months} revenueData={revenueData} />

        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}

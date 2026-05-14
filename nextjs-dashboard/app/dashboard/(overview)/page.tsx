import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { publicSans } from "../../ui/fonts";
import { Suspense } from "react";
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardSkeleton } from "@/app/ui/skeletons";
import CardWrapper from "@/app/ui/dashboard/cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {

  return (
    <main>
      <div className="flex w-full justify-between">
        <h1 className={`${publicSans.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <h1 className={`${publicSans.className} font-bold`}>Welcome..</h1>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 w-full lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart />
        </Suspense>
        
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { publicSans } from "../../ui/fonts";
import { Suspense } from "react";
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardSkeleton,
} from "@/app/ui/skeletons";
import CardWrapper from "@/app/ui/dashboard/cards";
import { Metadata } from "next";
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex justify-between">
          <div className="flex flex-col">
            <h1
            className={`${publicSans.className} font-bold mb-1 text-xl md:text-2xl`}
          >
            Dashboard
          </h1>
          

          <p className="text-sm font-medium text-slate-500">
            Welcome back! Here's what's happening today.
          </p>
          </div>

          <div className="flex justify-center gap-4 mt-1">
            <div className="relative cursor-pointer">
            <BellIcon className="h-7 w-7" />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500" />
          </div>
            <UserCircleIcon className="h-7 w-7 cursor-pointer" />
          </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 w-full lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

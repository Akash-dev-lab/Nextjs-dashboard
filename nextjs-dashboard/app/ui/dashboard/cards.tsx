import { lusitana } from "@/app/ui/fonts";
import { fetchCardData } from "@/app/lib/data";
import Sparkline from "./sparkline";
import { FaArrowTrendUp } from "react-icons/fa6";

type CardType = "invoices" | "customers" | "pending" | "collected";

const iconMap = {
  collected:
    "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/glass/ic-glass-bag.svg",
  customers: "/customers/lee-robinson.png",
  pending: "/customers/balazs-orban.png",
  invoices: "/customers/michael-novotny.png",
} satisfies Record<CardType, string>;

const cardStyles = {
  collected: {
    outer: "bg-green-200",
    inner: "bg-green-100",
    text: "text-teal-900",
    graph: "#0f766e",
    trend: "+2.6%",
  },

  customers: {
    outer: "bg-violet-200",
    inner: "bg-violet-100",
    text: "text-violet-900",
    graph: "#7F1D95",
    trend: "-0.1%",
  },

  invoices: {
    outer: "bg-yellow-200",
    inner: "bg-yellow-100",
    text: "text-amber-700",
    graph: "#B45309",
    trend: "+2.8%",
  },

  pending: {
    outer: "bg-rose-200",
    inner: "bg-rose-100",
    text: "text-rose-900",
    graph: "#881337",
    trend: "+3.6%",
  },
};

export default async function CardWrapper() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: CardType;
}) {
  const iconUrl = iconMap[type];
  const styles = cardStyles[type];

  return (
    <div className={`rounded-3xl p-4 sm:p-6 shadow-sm ${styles.outer}`}>
      <div className={`flex pb-5 justify-between`}>
        <span
          aria-label={`${title} icon`}
          className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full bg-cover bg-center"
          role="img"
          style={{ backgroundImage: `url(${iconUrl})` }}
        />

        <div className="flex">
          <div className="flex gap-1 items-center h-5">
            <FaArrowTrendUp className={`${styles.text}`} />
          <p className={`${styles.text} text-xs sm:text-sm`}>{styles.trend}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p
            className={`text-left font-semibold ${styles.text} text-xs sm:text-sm`}
          >
            {title}
          </p>
          <p
            className={`truncate rounded-3xl text-left font-semibold text-xl sm:text-2xl ${styles.text}`}
          >
            {value}
          </p>
        </div>

        <div className="">
          {/* <Sparkline color={styles.graph} /> */}
        </div>
      </div>
    </div>
  );
}

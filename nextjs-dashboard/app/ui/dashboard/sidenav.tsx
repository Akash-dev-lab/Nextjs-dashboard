import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { logout } from '../../lib/action';
import HamburgerMenu from "@/app/ui/dashboard/HamburgerMenu";

export default function SideNav() {
  return (
    <>
      {/* MOBILE/TABLET TOP BAR */}
      <div className="flex items-center justify-between px-4 py-4 md:hidden">
        <Link className="flex items-center gap-3" href="/">
          <AcmeLogo />

          <h2 className="text-2xl font-bold">LOGO</h2>
        </Link>

        {/* RIGHT DRAWER BUTTON */}
        <HamburgerMenu />
      </div>

      {/* DESKTOP SIDEBAR */}
      <div className="hidden h-full bg-gray-50 flex-col p-2 md:flex md:w-64">
        <Link
          className="mb-4 flex items-center gap-5 rounded-md p-2 px-5"
          href="/"
        >
          <div className="text-white">
            <AcmeLogo />
          </div>

          <h2 className="text-2xl font-bold">LOGO</h2>
        </Link>

        <div className="flex grow flex-col gap-4 justify-between">
          <div className="flex flex-col">
            <NavLinks />
          </div>

          {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}

          <form action={logout}>
            <button className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-[#FECDD3] md:justify-start md:px-3">
              <PowerIcon className="w-6" />

              <div>Log Out</div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

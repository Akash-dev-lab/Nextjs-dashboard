"use client";

import * as React from "react";

import Link from "next/link";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { logout } from '../../lib/action';
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import { usePathname } from 'next/navigation';

import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

const links = [
  {
    name: "Home",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Cog6ToothIcon,
  },
];

export default function HamburgerMenu() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleDrawer =
    (newOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(newOpen);
    };

  return (
    <div>
      {/* HAMBURGER BUTTON */}
      <Button
        onClick={toggleDrawer(true)}
        className="rounded-md p-2 hover:bg-gray-100"
      >
        <MenuOpenSharpIcon className="text-black" fontSize="large" />
      </Button>

      {/* RIGHT DRAWER */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 280,
            padding: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* TOP NAVIGATION */}
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const LinkIcon = link.icon;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "flex items-center gap-4 rounded-xl px-4 py-3 text-base font-medium hover:bg-gray-100 transition-colors",
                    {
                      ["bg-blue-100 text-blue-600"]: pathname === link.href,
                      ["hover:bg-gray-100"]: pathname !== link.href,
                    }
                  )}
                >
                  <LinkIcon className="w-6" />

                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* LOGOUT BUTTON */}
          <form action={logout}>
            <button
              className="
                flex items-center gap-4
                rounded-xl
                bg-gray-50
                px-4 py-3
                text-base font-medium
                hover:bg-red-100
                transition-colors
                w-full
              "
            >
              <PowerIcon className="w-6" />

              <span>Log Out</span>
            </button>
          </form>
        </Box>
      </Drawer>
    </div>
  );
}

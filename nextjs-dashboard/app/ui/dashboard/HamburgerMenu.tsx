'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import NavLinks from '@/app/ui/dashboard/nav-links';
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";

export default function HamburgerMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (newOpen: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(newOpen);
    };

  return (
    <div>
      {/* Hamburger Button */}
      <Button onClick={toggleDrawer(true)} className="rounded-md p-2 hover:bg-gray-100">
         <MenuOpenSharpIcon className="text-black" fontSize='large'/>
      </Button>

      {/* Drawer with NavLinks */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 300,
            p: 3,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <NavLinks />
        </Box>
      </Drawer>
    </div>
  );
}
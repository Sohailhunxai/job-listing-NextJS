'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FcDatabase } from 'react-icons/fc';
import { FcViewDetails } from 'react-icons/fc';
import { FcSms } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';

import { FcBarChart } from 'react-icons/fc';
import { FcManager } from 'react-icons/fc';
import { FcFile } from 'react-icons/fc';
import { FcPaid } from 'react-icons/fc';
import { FcSettings } from 'react-icons/fc';

const Sidebar = () => {
  const menus = [
    { name: 'dashboard', link: '/', icon: FcViewDetails },
    { name: 'user', link: '/', icon: FcManager },
    { name: 'messages', link: '/', icon: FcSms },
    { name: 'analytics', link: '/', icon: FcBarChart, margin: true },
    { name: 'File Manager', link: '/', icon: FcFile },
    { name: 'Cart', link: '/', icon: FcPaid },
    { name: 'Saved', link: '/', icon: FcLike, margin: true },
    { name: 'Setting', link: '/', icon: FcSettings },
  ];

  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[rgb(29,78,216)] min-h-screen ${
          open ? 'w-60' : 'w-[75px]'
        } 
        duration-500
      w-72 px-6 text-gray-100`}
      >
        <div className="py-3 flex justify-end">
          <FcDatabase
            size={20}
            className="cursor-pointer "
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative ">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={`${menu?.margin && 'mt-5'}
              flex items-center text-sm gap-3.5 font-medium 
              p-1 rounded-md hover:bg-[#8b94e7]`}
            >
              <div>{React.createElement(menu?.icon, { size: '20' })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500${
                  !open && 'opacity-0 translate-x-28 overflow-hidden '
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

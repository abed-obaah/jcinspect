import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export default function Example() {
  return (
    <div className="flex flex-col items-center justify-between  mb-20">
      <Menu as="div" className="relative inline-block text-left mt-20">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-28 py-2 text-sm font-semibold text-[#644DED] shadow-sm ring-1 ring-inset ring-[#644DED] hover:bg-gray-50">
            Select Inspection Checklist
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-[#644DED]" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Account settings
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Support
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                License
              </a>
            </MenuItem>
            <form action="#" method="POST">
              <MenuItem>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Sign out
                </button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </Menu>
      
      <div className="flex justify-center space-x-4 mb-8 mt-80">
        <Link to={"/singleInspection"}>
          <button
            type="button"
            className="w-42 rounded bg-[#0E1951] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-black focus:outline-none"
          >
            SINGLE ITEM INSPECTION
          </button>
        </Link>
        <button
          type="button"
          className="w-42 rounded bg-[#0E1951] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-black focus:outline-none"
        >
          BATCH INSPECTION (AUTO)de
        </button>
        <button
          type="button"
          className="w-42 rounded bg-[#0E1951] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-black focus:outline-none"
        >
         BATCH INSPECTION (MANUAL)
        </button>
      </div>
    </div>
  );
}

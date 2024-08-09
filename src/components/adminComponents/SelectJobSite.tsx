import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
          <div className=" flex justify-center mb-10">
                        <div className="w-full max-w-lg">
                            <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">
                            P.O Number
                            </label>
                            <div className="mt-2">
                            <input
                                id="Email"
                                name="Email"
                                type="text"
                                autoComplete="email"
                                placeholder="Please enter P.O Number here"
                                className="block w-full rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
         </div>
         <div className=" flex justify-center mb-10">
                        <div className="w-full max-w-lg">
                            <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">
                            Job Reference NO
                            </label>
                            <div className="mt-2">
                            <input
                                id="Email"
                                name="Email"
                                type="text"
                                autoComplete="email"
                                placeholder="Enter Ref"
                                className="block w-full rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
         </div>
      <div>
        <MenuButton 
         style={{ width: '24rem' }} 
         className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-5 text-sm font-semibold text-[#7B61FF] shadow-sm ring-1 ring-inset ring-[#7B61FF] hover:bg-gray-50">
          Select Job Site
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-g[#7B61FF]" />
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
  )
}

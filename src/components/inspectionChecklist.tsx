
'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  
} from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon, Squares2X2Icon,BriefcaseIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/20/solid'
import Logo from '../assets/dashlogo.png';

import Aside from '../components/Aside'
import CampagnAside from '../components/CampagnAside'
import Types from '../components/singleInspection'


import {Message,Notification,Award, Clipboard, FolderCloud, Notepad} from 'iconsax-react'
import { ChartPieIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: "/dashboard", icon: Squares2X2Icon, current: false },
  { name: 'User Management', href: '/manage-users', icon: UserCircleIcon, current: false},
  { name: 'My jobs', href: '/jobs', icon: BriefcaseIcon, current: true },
  { name: 'Certification',href: '/certification', icon: Clipboard, current: false },
  { name: 'Projects', href: '#', icon: FolderCloud, current: false },
  { name: 'Templates', href: '#', icon: Notepad, current: false },
  { name: 'Performance Evaluation', href: '#', icon: ChartPieIcon, current: false },
  { name: 'FeedBack', href: '#', icon: CalendarIcon, current: false },
  { name: 'Timesheet', href: '#', icon: Cog6ToothIcon, current: false },
  // { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Explore more', href: '#', current: false },
  // { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  // { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className=" relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                <img
                alt="JCINSPECT"
                src={Logo}
                className="h-8 w-auto"
              />
              <h1 className='zen-kaku-gothic-antique-light text-white'>JCINSPECT</h1>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-[#D9D9D9] text-indigo-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                  'h-6 w-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      {/* <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div> */}
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-[#D9D9D9] text-indigo-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                          
                              <span className={classNames(
                                  team.current
                                    ? 'border-indigo-600 text-indigo-600'
                                    : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                                )}>{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden bg-[#080E2B] lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="bg-[#080E2B] flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
            <img
                alt="JCINSPECT"
                src={Logo}
                className="h-19 w-auto mt-5"
              />
              <h1 className='zen-kaku-gothic-antique-bold text-white text-lg'>JCINSPECT</h1>
            </div>
            <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
  <li>
    <ul role="list" className="-mx-2 space-y-1">
      {navigation.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-50 text-indigo-600'
                : 'text-white hover:bg-gray-50 hover:text-indigo-600',
              'group flex flex-col items-center gap-y-1 rounded-md p-2 text-sm font-semibold leading-6',
            )}
          >
            <item.icon
              aria-hidden="true"
              className={classNames(
                item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                'h-6 w-6 shrink-0',
              )}
            />
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </li>
  <li>
    {/* <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div> */}
   

  </li>
 
  {/* <li className="mt-auto">
    <a
      href="#"
      className="group -mx-2 flex flex-col items-center gap-y-1 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
    >
      <Cog6ToothIcon
        aria-hidden="true"
        className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
      />
      <span>Settings</span>
    </a>
  </li> */}
</ul>
<button className="flex items-center py-2 mb-10 justify-center bg-white truncate rounded-lg border">
        Explore More
</button>

<div className="mt-auto">
    <a
      href="#"
      className="group -mx-2 flex flex-col items-center gap-y-2 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
    >
      <ArrowLeftStartOnRectangleIcon
        aria-hidden="true"
        className="h-6 w-6 shrink-0 text-white group-hover:text-indigo-600"
      />
      <span className='text-white group-hover:text-indigo-600'>Log out</span>
    </a>
  </div>

            </nav>
          </div>
        </div>

        <div className="lg:pl-72 ">
          <div className="bg-[#080E2B] sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 border-b border-gray-200 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Separator */}
            <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

            <div className="bg-[#080E2B] flex flex-1 gap-x-2 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="relative items-center mt-3 flex flex-1 bg-[#080E2B]">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-black"
                />
                <input
                  id="search-field"
                  name="search"
                  type="search"
                  placeholder="Type for Search"
                  className="block h-[80%] w-full rounded-lg border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <Message
                            size="22"
                            color="#FFFFFF"
                            variant="Bold"
                            />
                </button>
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                                        <Notification
                        size="22"
                        color="#FFFFFF"
                        variant="Bold"
                        />
                </button>
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <Award
                       size="22"
                       color="#FFFFFF"
                       variant="Bold"
                       />
                </button>

                {/* Separator */}
                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-14 w-19 rounded-full bg-gray-50"
                    />
                  <span className="hidden lg:flex lg:flex-col lg:items-center">
                        <span aria-hidden="true" className="ml-4 text-sm font-semibold leading-6 text-white">
                            Tom Cook
                        </span>
                        <button
                            type="button"
                            className="ml-2 rounded bg-white px-4 py-1.6 text-sm font-normal text-black shadow-sm hover:bg-indigo-100"
                        >
                            EDIT MY PROFILE
                        </button>
                        </span>

                  </MenuButton>
                  
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
    <div className="px-4 sm:px-6 lg:px-8 flex justify-between">
        <h1 className="text-3xl">Inspection checklist</h1>
       

        <div className="text-center">
            <h3 className="items-center">Job search status</h3>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full items-center justify-center gap-x-10 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-green-500">
                            <circle r={3} cx={3} cy={3} />
                        </svg>
                        Actively Jobs
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
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
        </div>
    </div>

    <div className="flex flex-wrap px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-3/4 pr-4">
        <Types />
        <div className="flex justify-evenly mt-80">
          <Link to={"/single-inspect"}>
              <button
                  type="button"
                  className="w-60 rounded-xl bg-[#0E1951] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-black focus:outline-none"
                >
                  Single item Inspections
                </button>
          </Link>
          <button
            type="button"
            className="w-60  rounded-xl bg-[#0E1951] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-black focus:outline-none"
          >
            Batch Inspection (AUTO)t
          </button>
          
          
          <button
            type="button"
            className="w-60  rounded-xl bg-[#0E1951] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-black focus:outline-none"
          >
           Batch Inspection (MANUAL)
          </button>
        </div>
        </div>
        <div className="w-full mt-3 md:w-1/4">
            <Aside />
        </div>
    </div>

    <div className="flex flex-wrap px-4  mt-10 sm:px-6 lg:px-8">
        <div className="w-full md:w-3/4 pr-4">
        {/* <Modules /> */}
        
        </div>
        <div className="w-full mt-3 md:w-1/4 ">
        <div className='flex items-center justify-center'>
            <h1>upcoming campaigns</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </div>
        
            <CampagnAside />
            
        </div>
    </div>
</main>

        </div>
      </div>
    </>
  )
}

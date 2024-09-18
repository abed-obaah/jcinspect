import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';

const clients = [
  {
    id: 1,
    name: 'Total Assigned Jobs',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: { date: '2256', dateTime: '2022-12-13', amount: 'Updated hour ago', status: 'Overdue' },
  },
  {
    id: 2,
    name: 'Pending Jobs',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: '24', dateTime: '2023-01-22', amount: 'Updated hour ago', status: 'Paid' },
  },
  {
    id: 3,
    name: 'Total Completed Jobs',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: { date: '12', dateTime: '2023-01-23', amount: 'Updated hour ago', status: 'Paid' },
  },
];

const backgroundColors = [
  'bg-[#080E2B]', // Light blue background
  'bg-[#FDCF6F]', // Light yellow background
  'bg-[#0A5F59]', // Light purple background
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {clients.map((client, index) => (
        <li
          key={client.id}
          className={classNames(
            'overflow-hidden rounded-xl border border-gray-200 p-6',
            backgroundColors[index % backgroundColors.length]
          )}
        >
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 pb-4">
            <img
              alt={client.name}
              src={client.imageUrl}
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-white">{client.name}</div>
            <Menu as="div" className="relative ml-auto">
              <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon aria-hidden="true" className="h-5 w-5" />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50">
                    View<span className="sr-only">, {client.name}</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50">
                    Edit<span className="sr-only">, {client.name}</span>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <dl className="divide-y divide-gray-100 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-white"></dt>
              <dd className="text-white text-lg">
                <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-white"></dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-white">{client.lastInvoice.amount}</div>
                {/* <div
                  className={classNames(
                    statuses[client.lastInvoice.status],
                    'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                  )}
                >
                  {client.lastInvoice.status}
                </div> */}
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}

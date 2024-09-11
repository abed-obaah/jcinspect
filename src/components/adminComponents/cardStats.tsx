import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // Ensure you have this icon imported
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';

const barChartsParams = {
  xAxis: [
    {
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      scaleType: 'band',
    },
  ],
  series: [
    { data: [2, 5, 3, 4, 1, 6, 8, 7, 5, 3, 2, 4], stack: '1', label: 'Direct Sales', color: '#5932EA' },
    { data: [8, 6, 7, 5, 3, 4, 9, 2, 10, 6, 8, 7], stack: '1', label: 'Retail', color: '#F2EFFF' },
    { data: [8, 6, 7, 5, 3, 4, 9, 2, 10, 6, 8, 7], stack: '1', label: 'Retail', color: '#F2EFFF' },
  ],
  margin: { top: 20, right: 20, bottom: 20, left: 40 },
  height: 400,
  width: 900,
  barCategoryGap: '30%', // Adjust this for spacing between bar categories
  barGap: -10, // Adjust this for spacing between bars
  borderRadius: 5,
  slotProps: {
    legend: {
      hidden: false, // Show legend
    },
  },
};

export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow mt-10">
      <div className="px-4 py-5 sm:p-6">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              This month
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </Menu.Button>
          </div>

          <Menu.Items
            className="absolute left-0 mt-2 w-56 bg-[#F2EFFF] origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none z-10"
          >
            <div className="py-1">
              <Menu.Item>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  last month
                </a>
              </Menu.Item>
              {/* <Menu.Item>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Support
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  License
                </a>
              </Menu.Item>
              <form action="#" method="POST">
                <Menu.Item>
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Sign out
                  </button>
                </Menu.Item>
              </form> */}
            </div>
          </Menu.Items>
        </Menu>

        <Stack direction="column" sx={{ width: '100%', maxWidth: 900 }}>
          <BarChart {...barChartsParams} tooltip={{ trigger: 'axis' }} leftAxis={{
                disableLine: true,
                disableTicks: true,
            }} 
            grid={{ horizontal: true }}
            bottomAxis={{
                disableLine: true,
                disableTicks: true,
            }} 
          />
        </Stack>
      </div>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    ClipboardIcon,
    ChatBubbleBottomCenterIcon,
    ChartBarSquareIcon, 
    InboxArrowDownIcon, 
    MagnifyingGlassCircleIcon 
} from '@heroicons/react/20/solid';
import { People, Trade } from 'iconsax-react';

const people = [
  { name: 'Review Jobs', button: "Review", icon: ClipboardIcon, route: "/create-jobs" },
  { name: 'Reports', button: "View", icon: People, route: "/assign-jobs" },
  { name: 'Inspect', button: "Track", icon: ChartBarSquareIcon, route: "/track-jobs" },
  { name: 'Prioritize Jobs', button: "Set", icon: Trade, route: "/priortize-jobs" },
  { name: 'View Job Completion Certificate', button: "View", icon: MagnifyingGlassCircleIcon, route: "/inspect-jobs" },
//   { name: 'User Activities', button: "View", icon: MagnifyingGlassCircleIcon, route: "/user-activities" },
];

export default function Example() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-xl font-semibold mb-4">Jobs</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
          {people.map((person) => (
            <div
              key={person.name}
              onClick={() => navigate(person.route)} // Handle navigation on click
              className="relative flex items-center space-x-4 rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 cursor-pointer"
            >
              <div className="flex items-center space-x-2 bg-white rounded-md p-3 shadow">
                <person.icon className="h-5 w-5 text-black" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="w-32 rounded bg-[#0E1951] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-black focus:outline-none"
                >
                  {person.button}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

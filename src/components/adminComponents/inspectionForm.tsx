import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

// Sample data
const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    href: '#',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    href: '#',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    href: '#',
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    href: '#',
  },
  {
    name: 'say Walton',
    email: 'say.walton@example.com',
    role: 'Front-end Developer',
    href: '#',
  },
  {
    name: 'says Walton',
    email: 'says.walton@example.com',
    role: 'Front-end Developer',
    href: '#',
  },
];

interface CheckedItemsState {
  [name: string]: boolean;
}

export default function Example() {
  const [checkedItems, setCheckedItems] = useState<CheckedItemsState>({});

  // Log the checkedItems state whenever it changes
  console.log("Checked items:", checkedItems);

  const handleCheckboxChange = (name: string) => {
    setCheckedItems((prevCheckedItems) => {
      return {
        ...prevCheckedItems,
        [name]: !prevCheckedItems[name], // Toggle the checkbox state for the person
      };
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.name} className="relative py-5 hover:bg-gray-50">
            <div className="flex items-center gap-x-4">
              {/* Checkbox to toggle selection */}
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                checked={checkedItems[person.name] || false} // Ensure it is boolean
                onChange={() => handleCheckboxChange(person.name)} // Toggle checkbox on change
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
              </div>
              <div className="flex shrink-0 items-center">
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

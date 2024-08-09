import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
const data = [
  { id: 0, value: 10, label: 'Complete' },
  { id: 1, value: 15, label: 'Pending' },
  { id: 2, value: 20, label: 'Not Start' },
];

export default function Example() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">



      {people.map((person) => (
        <div
          key={person.email}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
         <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
          {/* */}
        </div>
      ))}
    </div>
  )
}

import React from 'react';
import aside from '../assets/Aside.png';

// Sample data array
const dataArray = [
  {
    title: 'Total Equipment',
    date: '24th August, 2022',
    time: '9:00 AM - 11:00 AM',
    buttonText: 'Enroll now',
  },
  {
    title: 'Exxon Mobil',
    date: '25th August, 2022',
    time: '10:00 AM - 12:00 PM',
    buttonText: 'Enroll now',
  },
  {
    title: 'Halliburton',
    date: '26th August, 2022',
    time: '1:00 PM - 3:00 PM',
    buttonText: 'Enroll now',
  },
];

export default function Aside() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex-shrink-0">
          <img
            alt="Aside Image"
            src={aside}
            className="h-20 w-full object-contain"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="flex space-x-12 items-center justify-center mb-5">
          <h3>Assigned jobs</h3>
          <p className="text-sm text-blue-400">see all</p>
        </div>

        {dataArray.map((data, index) => (
          <div key={index}>
            <div className="flex justify-between mb-4">
              <div className="text-center">
                <h3 className="mb-2">{data.title}</h3>
                <p className="text-[9px] text-gray-500">{data.date}</p>
                <p>({data.time})</p>
              </div>
              <button
                className="inline-flex items-center rounded-md bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                style={{ height: '2.5rem' }}
              >
                {data.buttonText}
              </button>
            </div>
            {/* Divider */}
            {index !== dataArray.length - 1 && (
              <div key={`divider-${index}`} className="w-full border-t border-gray-300 mb-4" />
            )}
          </div>
        ))}

        {/* Divider at the end (optional) */}
        <div className="relative mt-6">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

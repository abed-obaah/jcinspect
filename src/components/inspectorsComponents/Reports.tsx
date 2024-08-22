import React from 'react';
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

  import { PlayIcon } from '@heroicons/react/20/solid'

const ReportPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex  py-4">
        <h1 className="text-2xl font-semibold">Report Page</h1>
      </div>
      
      {/* Main Content */}
      <div className="flex justify-center">
        {/* Report Section */}
        <div className="bg-gray-100 p-4 rounded shadow-md w-2/3">
          {/* <h2 className="text-xl font-semibold mb-4">Report</h2> */}
          <div className="border p-4">
            <img
              src="path_to_report_image" 
              alt="Report"
              className="mx-auto"
            />
          </div>
          
          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
          <div className="bg-[#080E2B] rounded-full h-12 w-12 flex items-center justify-center">
    <PlayIcon
        aria-hidden="true"
        className="h-10 w-10 text-white transform group-hover:text-indigo-600 -scale-x-100"
    />
</div>


            <span className="font-semibold">1</span>
            <div className="bg-[#080E2B] rounded-full h-12 w-12 flex items-center justify-center">
                    <PlayIcon
                        aria-hidden="true"
                        className="h-10 w-10 text-white transform group-hover:text-indigo-600 "
                    />
                </div>

           
          </div>
        </div>
      </div>
      
      {/* Save Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-[#0E1951] text-white px-8 py-2 rounded-full hover:bg-indigo-100 hover:text-black">
          Save
        </button>
      </div>
      
   
    </div>
  );
};


export default ReportPage;

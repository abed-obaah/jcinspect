import React from 'react';

function InspectionForm() {
  return (
    <div className="container mx-auto p-8">
      {/* Date of Inspection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Date of Inspection</label>
        <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>

      {/* Type Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option>Select Type</option>
          {/* Add other options here */}
        </select>
      </div>

      {/* Equipment Details Section */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Equipment ID</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Equipment Serial Number</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">SWL</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        {/* Add more input fields here following the same pattern */}
      </div>

      {/* Test Details Section */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700">Test Details</h3>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Test Company</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Test Date</label>
            <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Test Cert No.</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          {/* Add more test detail fields here */}
        </div>
      </div>

      {/* Upload Image Section */}
      <div className="mt-8">
        <label className="block text-sm font-medium text-gray-700">Upload Image</label>
        <input type="file" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
    </div>
  );
}

export default InspectionForm;

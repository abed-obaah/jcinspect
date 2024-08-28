import React from 'react';
import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const people = [
    { id: 1, name: 'Type' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
  ]

function InspectionForm() {
    const [selected, setSelected] = useState(people[0])

  return (
    <div className="container mx-auto p-8">

        <Listbox value={selected} onChange={setSelected}>
          {/* <Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Label> */}
          <div className="relative mt-2 w-40"> {/* Reduced the width here */}
              <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                  </span>
              </ListboxButton>

              <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                  {people.map((person) => (
                      <ListboxOption
                          key={person.id}
                          value={person}
                          className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                      >
                          <span className="block truncate font-normal group-data-[selected]:font-semibold">{person.name}</span>

                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                              <CheckIcon aria-hidden="true" className="h-5 w-5" />
                          </span>
                      </ListboxOption>
                  ))}
              </ListboxOptions>
          </div>
      </Listbox>

      <div className="grid grid-cols-4 gap-4 mt-8 mb-8">
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
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">PLA</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        {/* Add more input fields here following the same pattern */}
      </div>

      {/* Date of Inspection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Equipment Description</label>
        {/* <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" /> */}
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
       <div className="mt-8">
       
       <div className="grid grid-cols-2 gap-5 mt-4">
         <div className="col-span-1">
           <label className="block text-sm font-medium text-gray-700">Equipment Manufacturer</label>
           <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
         </div>
         <div className="col-span-1">
           <label className="block text-sm font-medium text-gray-700">Equipment Location</label>
           <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
         </div>
       </div>
     </div>

     

      {/* Type Dropdown */}
      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option>Select Type</option>
       
        </select>
      </div> */}

    
    

      {/* Test Details Section */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700">Test Details</h3>
        <div className="grid grid-cols-4 gap-4 mt-4">
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
          <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">PLA</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        </div>
      </div>

      <div className="mt-8">
       
       <div className="grid grid-cols-2 gap-5 mt-4">
         <div className="col-span-1">
           <label className="block text-sm font-medium text-gray-700">Last Date of Examination</label>
           <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
         </div>
         <div className="col-span-1">
           <label className="block text-sm font-medium text-gray-700">Next Date of Examination</label>
           <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
         </div>
       
       </div>

       <div className="grid grid-cols-2 gap-5 mt-4">
         <div className="col-span-1">
           <label className="block text-sm font-medium text-gray-700">Specification</label>
           <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
         </div>
          <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Type of not carried out</label>
        <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option>Select Type</option>
       
        </select>
      </div>
       
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

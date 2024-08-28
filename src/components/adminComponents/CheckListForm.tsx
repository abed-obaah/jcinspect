'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Jcf from './inspectionForm'

const people = [
  { id: 1, name: 'Wade Cooper' },
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

export default function Example() {
  const [selected, setSelected] = useState(people[3])

  return (
    <>
    <Listbox value={selected} onChange={setSelected}>
          <Label className="block text-sm font-medium leading-6 text-gray-900 ml-6">Report Selection</Label>
          <div className="relative mt-2 w-40 ml-6"> {/* Reduced the width here */}
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
      
      
      <Jcf />
      </>
  )
}

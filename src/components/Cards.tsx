import Rec from '../assets/rec1.png'

const people = [
  {
    name: 'Slumberger',
    email: 'Techmint , On-site',
    role: 'Techmint , On-site   ',
    location:"Port HarHarcourt , Nigeria",
    imageUrl:Rec,
  },
  // More people...
]

export default function Cards() {
    return (
      <div className="p-4"> {/* This is a wrapper div with padding of 4 */}
      <div className="overflow-hidden container  rounded-lg bg-gray-100">
        <div className="px-4 py-5 sm:p-6 flex justify-between">
          <h1>Active Jobs</h1>
          <p>see all</p>
        </div>
        
        <div className="p-4">
  <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
    {people.map((person) => (
      <div
        key={person.email}
        className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        <div className="flex-shrink-0">
          <img alt="" src={person.imageUrl} className="h-20 w-20 rounded-full" />
        </div>
        <div className="min-w-0 flex-1">
          <a href="#" className="focus:outline-none">
            <span aria-hidden="true" className="absolute inset-0" />
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="truncate text-sm text-gray-500">{person.role}</p>
            <p className="truncate text-sm text-gray-500">{person.location}</p>
          </a>
        </div>
        <div className="min-w-0 flex-1 items-center">
          <div className="flex flex-col">
            <p>lifting Equipment</p>
            <p className="text-gray-500">6 months</p>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            Badge
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
    
    )
  }
  
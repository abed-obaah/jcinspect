import Rec from '../assets/rec1.png'
import Rec1 from '../assets/Rectangle 298.png'
import Rec2 from '../assets/Rectangle 296.png'
import help from '../assets/help.png'

const people = [
  {
    name: 'Slumberger',
    email: 'Techmint , On-site',
    role: 'Techmint , On-site   ',
    location:"Port HarHarcourt , Nigeria",
    imageUrl:Rec,
    work:'lifting Equipment',
    time:'6 months',
    status:"Rejected"
  },
  {
    name: 'Noble Drilling',
    email: 'Techmint , On-site',
    role: 'Unacademy  ,    work from home',
    location:"Delta, Nigeria",
    imageUrl:Rec2,
    work:'lifting Equipment',
    time:'2 months',
    status:"in process"
  },
  {
    name: 'Shelf  Drilling',
    email: 'Techmint , On-site',
    role: 'Onne , on site  ',
    location:"Port Harcourt, Nigeria",
    imageUrl:Rec1,
    work:'lifting Equipment',
    time:'3 months',
    status:"Completed"
  },
  // More people...
]

export default function Cards() {
    return (
      <div className="p-4"> {/* This is a wrapper div with padding of 4 */}
      <div className="overflow-hidden container  rounded-lg bg-gray-100 shadow-lg">
        <div className="px-4 py-5 sm:p-6 flex justify-between">
          <h1>Active Jobs</h1>
          <p>see all</p>
        </div>
        
        <div className="p-4">
  <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
    {people.map((person) => (
     <div
     key={person.email}
     className="relative flex items-center space-x-6 rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
   >
     <div className="flex-shrink-0">
       <img alt="" src={person.imageUrl} className="h-20 w-20 rounded-full" />
     </div>
     <div className="min-w-0 flex-1 px-4">
       <a href="#" className="focus:outline-none block">
         <span aria-hidden="true" className="absolute inset-0" />
         <p className="text-sm font-medium text-gray-900">{person.name}</p>
         <p className="truncate text-sm text-gray-500">{person.role}</p>
         <p className="truncate text-sm text-gray-500">{person.location}</p>
       </a>
     </div>
     <div className="min-w-0 flex-1 px-4">
       <div className="flex flex-col">
         <p className="text-sm text-gray-900">{person.work}</p>
         <p className="text-xs text-gray-500">{person.time}</p>
       </div>
     </div>
     <div className="min-w-0 flex-1 px-4">
  {person.status === "Rejected" && (
  <div className='flex items-center'>
  <span className="inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700 mr-2">
    {person.status}
  </span>
  <img
    alt="JCINSPECT"
    src={help}
    className="h-19 w-auto ml-2"
  />
</div>

 
  )}
  {person.status === "in process" && (
    <>
    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
              {person.status}
            </span>
            <br/>
            <span className="text-xs text-gray-500">(70% complete)</span></>
  )}
  {person.status === "Completed" && (
    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
      {person.status}
    </span>
  )}
</div>

   </div>
   
    ))}
  </div>
</div>

      </div>
    </div>
    
    )
  }
  
import Rec from '../assets/Avalon-PNG 2.png'
import Rec1 from '../assets/Avalon-PNG 1.png'
// import Rec2 from '../assets/Rectangle 296.png'

const people = [
  {
    name: 'Slumberger',
    email: 'Techmint , On-site',
    role: 'Techmint , On-site   ',
    location:"Port HarHarcourt , Nigeria",
    imageUrl:Rec1,
    work:'lifting Equipment',
    time:'3 weeks ago',
    status:"Rejected",
    jobs:'100 jobs'
  },
  {
    name: 'Noble Drilling',
    email: 'Techmint , On-site',
    role: 'Unacademy  ,    work from home',
    location:"Delta, Nigeria",
    imageUrl:Rec,
    work:'lifting Equipment',
    time:'1 week ago',
    status:"in process",
    jobs:'12 jobs'
  },
//   {
//     name: 'Shelf  Drilling',
//     email: 'Techmint , On-site',
//     role: 'Onne , on site  ',
//     location:"Port Harcourt, Nigeria",
//     imageUrl:Rec1,
//     work:'lifting Equipment',
//     time:'3 months',
//     status:"Completed"
//   },
  // More people...
]

export default function Cards() {
    return (
      <div className="p-4">
      <div className="overflow-hidden container  rounded-lg bg-gray-100 shadow-lg">
      <div>
  <h1 className="text-2xl -mb-10 px-6 py-5">Old completed jobs</h1>
  <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
    <div className="flex justify-evenly space-x-4">
      <div className="flex items-center">
        <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
          <div className="h-2 w-2 rounded-full bg-current" />
        </div>
        <h1 className="ml-2 text-sm">Lifting</h1>
      </div>

      <div className="flex items-center">
        <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
          <div className="h-2 w-2 rounded-full bg-current" />
        </div>
        <h1 className="ml-2 text-sm">PPS</h1>
      </div>

      <div className="flex items-center">
        <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
          <div className="h-2 w-2 rounded-full bg-current" />
        </div>
        <h1 className="ml-2 text-sm">Nigeria</h1>
      </div>
    </div>

    <p className="ml-2 text-sm text-blue-400">see all</p>
  </div>
</div>


        
        <div className="relative">
   

    <div className="p-4">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
            {people.map((person) => (
                
                <div
                    key={person.email}
                    className="relative flex items-center space-x-6 rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                     {/* Bookmark Icon */}
                    {/* <svg
                        className="absolute top-0 right-0 mt-2 mr-2 h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer z-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                  <Bookmark aria-hidden="true" className="h-6 w-6 text-white" />
    </svg> */}

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute top-0 right-0 mt-2 mr-2 h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer z-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>

                    {/* Each grid item */}
                    <div className="flex-shrink-0">
                        <img alt="" src={person.imageUrl} className="h-20 w-20 rounded-full" />
                    </div>
                    <div className="min-w-0 flex-1 px-4">
                        <a href="#" className="focus:outline-none block">
                            <span aria-hidden="true" className="absolute inset-0" />
                            <p className="text-sm font-medium text-gray-900">{person.name}</p>
                            <p className="truncate text-sm text-gray-500">{person.location}</p>
                            <div className='flex'>
                                    <p className="truncate text-sm text-gray-500">{person.time}</p>
                                    <p className="truncate text-sm text-green-400 items-center flex ml-2">
                                        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-green-400 mr-1.5">
                                            <circle r={3} cx={3} cy={3} />
                                            </svg>
                                 {person.jobs}
                                 </p>
                            </div>
                           
                            
                        </a>
                    </div>
                    <div>
                        <button>
                            <span className="inline-flex items-center rounded-full bg-white px-5 py-1 text-xs font-medium text-green-500 mr-2 ring-2 ring-green-500">
                                View Now
                            </span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>


      </div>
    </div>
    
    )
  }
  
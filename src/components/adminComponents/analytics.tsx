import Projects from './projects'





const people = [
  {
    name: 'Justin Lipshutz',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    profiles: [
      {
        name: 'Leslie Alexander',
        jobCompletion: '22 + 100%',
        status: 'permanent',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Justin Lipshutz',
        jobCompletion: '22 + 100%',
        status: 'contract',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Justin Lipshutz',
        jobCompletion: '22 + 100%',
        status: 'permanent',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Justin Lipshutz',
        jobCompletion: '22 + 100%',
        status: 'contract',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
];

export default function Example() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {people.map((person) => (
        <div
          key={person.email}
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-sm font-medium text-gray-900">User Status</h1>
            <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-[#1A2B88] ring-1 ring-inset ring-gray-500/10">
              Filter & sort
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <h1 className="text-sm font-medium text-gray-900">User name</h1>
            <h1 className="text-sm font-medium text-gray-900">Job completion</h1>
            <h1 className="text-sm font-medium text-gray-900">Status</h1>
          </div>
          {person.profiles.map((profile) => (
            <div key={profile.name} className="grid grid-cols-3 gap-4 items-center mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img alt="" src={profile.imageUrl} className="h-10 w-10 rounded-full" />
                </div>
                <div className="min-w-0 flex-1">
                  <a href="#" className="focus:outline-none">
                    <span aria-hidden="true" className="absolute inset-0" />
                    <p className="text-sm font-medium text-gray-900">{profile.name}</p>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-900">{profile.jobCompletion}</p>
              </div>
              <div>
                <span
                  className={
                    profile.status === 'permanent'
                      ? 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'
                      : 'inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'
                  }
                >
                  {profile.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
      <Projects/>
    </div>
  );
}

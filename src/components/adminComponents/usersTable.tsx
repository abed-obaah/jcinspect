import { LockClosedIcon } from '@heroicons/react/20/solid';


const people = [
    { name: 'slb/144/006', title: 'Onne', email: 'Slumberger', role: '10/03/2024', endDate: '25/06/2024', Progress: 'Pending', actions: ['delete', 'view'] },
    { name: 'slb/144/006', title: 'Onne', email: 'Slumberger', role: '10/03/2024', endDate: '25/06/2024', Progress: 'Completed', actions: ['delete', 'view'] },
    { name: 'slb/144/006', title: 'Onne', email: 'Slumberger', role: '10/03/2024', endDate: '25/06/2024', Progress: 'Rejected', actions: ['delete', 'view'] },
    { name: 'slb/144/006', title: 'Onne', email: 'Slumberger', role: '10/03/2024', endDate: '25/06/2024', Progress: 'Pending', actions: ['delete', 'view'] },
  ];
  
  export default function Example() {

    const handleActionClick = (action: string) => {
        if (action === 'delete') {
          alert('Delete action clicked!');
          // Add your delete logic here
        } else if (action === 'view') {
          alert('View action clicked!');
          // Add your view logic here
        }
      };
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    User Id
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Name
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    User Type
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    Role
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    status
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.title}</td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.email}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{person.role}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{person.endDate}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-0 flex items-center justify-around">
                        <span
                          className={
                            person.Progress === 'Completed'
                              ? 'inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700'
                              : person.Progress === 'Pending'
                              ? 'inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800'
                              : 'inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700'
                          }
                        >
                          {person.Progress}
                        </span>
                        <LockClosedIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-[#000000]" />
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-0">
                      {person.actions.map((action, i) => (
                            <button
                                key={i}
                                onClick={() => handleActionClick(action)}
                                className={`inline-flex justify-between items-center rounded-full px-2 py-1 text-xs font-medium ${
                                action === 'view'
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-yellow-100 text-yellow-800 mr-5'
                                }`}
                            >
                                {action}
                            </button>
                            ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
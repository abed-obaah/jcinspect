import { Link } from "react-router-dom"; // Import Link component

const people = [
  { name: 'slb/144/006', title: 'Onne', email: 'Slumberger', role: '10/03/2024', endDate: '25/06/2024', Progress: 'Pending',Action:'Inspect' },
  { name: 'slb/144/006', title: 'Onne', email: 'Slumberger', role: '10/03/2024', endDate: '25/06/2024', Progress: 'Completed',Action:'Inspect' },
  { name: 'slb/144/006', title: 'Onne', email: 'Slumberger', role: '10/03/2024', endDate: '25/06/2024', Progress: 'Rejected',Action:'Inspect' },
  { name: 'slb/144/006', title: 'Onne', email: 'Slumberger', role: '10/03/2024', endDate: '25/06/2024', Progress: 'Pending', Action:'Inspect'},
];

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Pending Jobs</h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x divide-gray-200">
                  <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Job Reference No
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Job Site
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Client
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    Start Date
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    End Date
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    Progress
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    Progress
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
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-0">
                      {person.Progress === 'Pending' ? (
                        <Link
                          to="/inspect-jobs"
                          className="inline-flex items-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800"
                        >
                          {person.Progress}
                        </Link>
                      ) : (
                        <span
                          className={
                            person.Progress === 'Completed'
                              ? 'inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700'
                              : 'inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700'
                          }
                        >
                          {person.Progress}
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-0">
                      {person.Action === 'Inspect' ? (
                        <Link
                          to="/inspect-jobs"
                          className="inline-flex items-center rounded-md bg-blue-300 px-2 py-1 text-xs font-medium text-blue-800"
                        >
                          {person.Action}
                        </Link>
                      ) : (
                        <span
                          className={
                            person.Action === 'Completed'
                              ? 'inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700'
                              : 'inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700'
                          }
                        >
                          {person.Progress}
                        </span>
                      )}
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

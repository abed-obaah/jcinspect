const stats = [
    { name: 'Total Users', stat: '856',analytics:'10.0%',role:'users' },
    { name: 'Active jobs', stat: '77',analytics:'10.0%',role:'Applicants' },
    { name: 'Jobs applied', stat: '77',analytics:'10.0%',role:'Applicants' },
    { name: 'Jobs available', stat: '24.57',analytics:'10.0%',role:'Applicants' },
  ]
  
  export default function Example() {
    return (
      <div>
        <h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
             <div className="flex justify-between items-center">
              <dt className="truncate text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {item.analytics}
              </span>
            </div>

              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
              <dd className="mt-1 text-sm  font-normal tracking-tight text-gray-500">{item.role}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }
  
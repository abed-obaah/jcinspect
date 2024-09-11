import axios from 'axios';

export default function Example() {


const handleSubmit = async (event) => {
  event.preventDefault();

  const userData = {
    username: "roberto7X",
    firstName: "Robert",
    lastName: "Franklin",
    email: "timsam@gmail.com",
    phoneNumber: "09198374658",
    password: "password123",
    confirmPassword: "password123",
    address: "Lagos Street Ikeja, Lagos",
    roleId: 1,
  };

  try {
    const response = await axios.post('https://80145f9a-f084-489a-af13-8039b533176b.mock.pstmn.io/api/jc/admin/users', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('User successfully created:', response.data);
    alert('User successfully created')
    // Handle successful response
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    // Handle errors here
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        

        <div className="border-b border-gray-900/10 pb-12">
         

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                   placeholder='Enter First name'
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:px-4  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                   placeholder='Enter last name'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:px-4  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Role
              </label>
              <div className="mt-2">
                <input
                  id="Role"
                  name="Role"
                  type="text"
                  autoComplete="family-name"
                   placeholder='Enter role'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:px-4  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Email
              </label>
              <div className="mt-2">
                <input
                  id="Email"
                  name="Email"
                  type="text"
                  autoComplete="email"
                   placeholder='Enter email'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:px-4  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Username
              </label>
              <div className="mt-2">
                <input
                  id="Username"
                  name="Username"
                  type="text"
                  autoComplete="family-name"
                  placeholder='username'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Password
              </label>
              <div className="mt-2">
                <input
                  id="Password"
                  name="Password"
                  type="text"
                  autoComplete="family-name"
                   placeholder='*************'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      <button type="submit"
       className="w-32 rounded bg-[#0E1951] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-black focus:outline-none"
       >Submit</button>
    </form>
  )
}

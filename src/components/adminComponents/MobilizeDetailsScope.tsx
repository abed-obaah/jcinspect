
export default function Example() {
  return (
  <div>
        <div className="col-span-full">
  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
  Job Scope
  </label>
  <div className="mt-2">
  <textarea
  id="about"
  name="about"
  rows={3}
  placeholder="Type here...."
  className="block rounded-md border-0 py-3.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-left"
  style={{ width: '400px' }}  // Set your custom width here
  defaultValue={''}
/>


    
  </div>
  <p className="mt-3 text-sm leading-6 text-gray-600"></p>
  <button
        type="button"
        className="mx-auto block rounded-full bg-[#0A6835] px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-50 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        Submit
    </button>

</div>
  </div>
  )
}

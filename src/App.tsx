import imageAuth from "../src/assets/left-section.png"
import email from "../src/assets/icon-mail.png"
import { ArrowLeft2,ArrowRight2,User,Lock} from "iconsax-react"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Footer from '../src/components/Footer'




export default function Example() {
  return (
    <div className="flex">
      <img
        alt=""
        src={imageAuth}
        className="h-[105vh]"
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex items-center justify-between px-10">
          <div className="flex items-center">
            <ArrowLeft2 size="32" color="#757575" />
            <h1 className="ml-2 text-[#757575] zen-kaku-gothic-antique-regular">Return Home</h1>
          </div>
          <div>
            <p className=" text-[#424242} text-gray-500 zen-kaku-gothic-antique-regular">Already a member? <span className="text-[#424242} zen-kaku-gothic-antique-bold text-[#212121] underline">LOG IN NOW</span></p>
          </div>
        </div>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <h2 className="mt-10 text-center text-2xl zen-kaku-gothic-antique-black leading-9 tracking-tight text-gray-900">
          Welcome to JCInspect
          </h2>
          <p className="mt-2 text-center text-xl zen-kaku-gothic-antique-regular leading-9 tracking-tight text-[#757575]">SIGN IN TO  INSPECT</p>
        </div>

        <div className="mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="mt-2">
              <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton 
                  style={{ width: '24rem' }} 
                  className="inline-flex justify-center items-center gap-x-20 rounded-md bg-white py-5 text-sm zen-kaku-gothic-antique-regular text-[#757575] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <User size="20" className="text-gray-400" /> {/* User icon */}
                  User Type
                  <ChevronDownIcon aria-hidden="true" className="h-8 w-8 text-gray-400" />

                </MenuButton>
              </div>



      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Edit
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Duplicate
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Archive
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Move
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Share
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Add to favorites
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Delete
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
              </div>
            </div>

            <div>
              <div className="mt-2">
              <div className="flex items-center w-full rounded-md border border-gray-300 focus-within:border-gray-500 ">
              <img
              alt=""
              src={email}
              className="px-3"
            />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@gmail.com"
                      required
                      className="block w-full py-5 zen-kaku-gothic-antique-regular pl-3 text-gray-900 placeholder:text-gray-400 border-0 sm:text-sm sm:leading-6"
                    />
                    
                  </div>
              </div>
            </div>

            <div>
              <div className="mt-2">
              <div className="flex items-center w-full rounded-md border border-gray-300 focus-within:border-gray-500 ">
                <span className="px-3"> 
                <Lock
                  size="22"
                  color="#757575"
                 
                  />
                </span>
             
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="********"
                      required
                      autoComplete="current-password"
                      className="block w-full py-5 zen-kaku-gothic-antique-regular pl-3 text-gray-900 placeholder:text-gray-400 border-0 sm:text-sm sm:leading-6"
                    />
                    
                  </div>
              </div>
            </div>

            <div>
      <button
        type="submit"
        className="flex items-center justify-between w-full rounded-md bg-[#24243E] px-3 py-5 text-sm zen-kaku-gothic-antique-medium leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <span>Sign in</span>
        <ArrowRight2 size="24" className="ml-2 text-white" />
      </button>
    </div>
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
        <Footer/>
      </div>
      
      </div>
    </div>
  )
}

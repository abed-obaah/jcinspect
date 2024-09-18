import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageAuth from "../assets/left-section.png";
import emailIcon from "../assets/icon-mail.png";
import { ArrowLeft2, ArrowRight2, User, Lock } from "iconsax-react";
import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Footer from '../components/Footer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../slices/authSlice';

export default function Example() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Move this to the top level of the component

  const handleSignIn = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // Send POST request to authenticate
      const response = await axios.post('https://80145f9a-f084-489a-af13-8039b533176b.mock.pstmn.io/auth/jc/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Extract the accessToken and userId from the response
        const { accessToken, userId } = response.data;


        // if (response.status === 200) {
          //       const { role } = response.data; // Assuming the role is returned from the API
        
          //       // Navigate based on role
          //       if (role === 'admin') {
          //         navigate('/adminDashboard');
          //       } else if (role === 'scheduler') {
          //         navigate('/scheduler');
          //       } else {
          //         navigate('/dashboard');
          //       }
          //     } else {
          //       alert('Login failed. Please check your credentials.');
          //     }


        // Dispatch the token and userId to the Redux store
        dispatch(setAuth({ token: accessToken, userId }));

        console.log('Login successful and token stored in Redux!');

        // Navigate to a new screen if needed
        navigate('/adminDashboard'); // Or any other path
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex">
      <img alt="" src={imageAuth} className="h-[105vh]" />
      <div className="flex flex-col justify-between w-full">
        <div className="flex items-center justify-between px-10">
          <div className="flex items-center">
            <ArrowLeft2 size="32" color="#757575" />
            <h1 className="ml-2 text-[#757575] zen-kaku-gothic-antique-regular">Return Home</h1>
          </div>
          <div>
            <p className="text-[#424242] zen-kaku-gothic-antique-regular">Already a member? <span className="text-[#212121] underline zen-kaku-gothic-antique-bold">LOG IN NOW</span></p>
          </div>
        </div>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl zen-kaku-gothic-antique-black leading-9 tracking-tight text-gray-900">
              Welcome to JCInspect
            </h2>
            <p className="mt-2 text-center text-xl zen-kaku-gothic-antique-regular leading-9 tracking-tight text-[#757575]">SIGN IN TO INSPECT</p>
          </div>

          <div className="mt-10 mb-28 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <div className="mt-2">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton
                        style={{ width: '24rem' }}
                        className="inline-flex justify-center items-center gap-x-20 rounded-md bg-white py-5 text-sm zen-kaku-gothic-antique-regular text-[#757575] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        <User size="20" className="text-gray-400" />
                        User Type
                        <ChevronDownIcon aria-hidden="true" className="h-8 w-8 text-gray-400" />
                      </MenuButton>
                    </div>
                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      {/* Menu items here */}
                    </MenuItems>
                  </Menu>
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <div className="flex items-center w-full rounded-md border border-gray-300 focus-within:border-gray-500">
                    <img alt="" src={emailIcon} className="px-3" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@gmail.com"
                      required
                      className="block w-full py-5 zen-kaku-gothic-antique-regular pl-3 text-gray-900 placeholder:text-gray-400 border-0 sm:text-sm sm:leading-6"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <div className="flex items-center w-full rounded-md border border-gray-300 focus-within:border-gray-500">
                    <span className="px-3">
                      <Lock size="22" color="#757575" />
                    </span>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="********"
                      required
                      autoComplete="current-password"
                      className="block w-full py-5 zen-kaku-gothic-antique-regular pl-3 text-gray-900 placeholder:text-gray-400 border-0 sm:text-sm sm:leading-6"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="px-3">
                      <p className="zen-kaku-gothic-antique-regular text-[#757575]">Show</p>
                    </span>
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

          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

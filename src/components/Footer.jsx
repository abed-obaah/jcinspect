import info from "../assets/info.png"
import logo1 from '../assets/social1.png'
import logo2 from '../assets/social2.png'
import logo3 from '../assets/social3.png'
import logo4 from '../assets/social4.png'
import logo5 from '../assets/social5.png'



const navigation = [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg
          fill="currentColor"
          viewBox="0 0 38 38"
          {...props}
          style={{ backgroundColor: '#3b5998', borderRadius: '50%' }}
        >
          <image href={logo1} height="38" width="38" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg
          fill="currentColor"
          viewBox="0 0 38 38"
          {...props}
          style={{ backgroundColor: '#3b5998', borderRadius: '50%' }}
        >
          <image href={logo2} height="38" width="38" />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg
          fill="currentColor"
          viewBox="0 0 38 38"
          {...props}
          style={{ backgroundColor: '#3b5998', borderRadius: '50%' }}
        >
          <image href={logo3} height="38" width="38" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg
          fill="currentColor"
          viewBox="0 0 38 38"
          {...props}
          style={{ backgroundColor: '#3b5998', borderRadius: '50%' }}
        >
          <image href={logo4} height="38" width="38" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg
          fill="currentColor"
          viewBox="0 0 38 38"
          {...props}
          style={{ backgroundColor: '#3b5998', borderRadius: '50%' }}
        >
          <image href={logo5} height="38" width="38" />
        </svg>
      ),
    },
  ]
  
  export default function Example() {
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-0 md:order-2">
          <img
              alt=""
              src={info}
              className="px-2"
            />
            <h1 className="text-gray-500">Need help?</h1>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
            Copyright 2024 - JC International. All rights Reserved
            </p>
            <div className="flex justify-start space-x-5 md:order-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-6 w-6" />
              </a>
            ))}
          </div>
          </div>
        </div>
      </footer>
    )
  }
  
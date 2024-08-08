import img1 from "../assets/pesto.png";
import img2 from "../assets/pesto1.png"

// Sample data array
const dataArray = [
  {
    title: 'Portfolio Presentation',
    date: '24th August, 2022',
    time: '9:00 AM - 11:00 AM',
    // buttonText: 'Enroll now',
    img:img1
  },
  {
    title: 'Group Discusion',
    date: '25th August, 2022',
    time: '10:00 AM - 12:00 PM',
    // buttonText: 'Enroll now',
    img:img2
  },
  {
    title: 'Mock interview session',
    date: '26th August, 2022',
    time: '1:00 PM - 3:00 PM',
    // buttonText: 'Enroll now',
    img:img1
  },
];

export default function Aside() {
  return (
    <div className="overflow-hidden rounded-lg bg-[#F2F4F8] shadow">
      <div className="px-4 py-5 sm:p-6">
        {/* <div className="flex-shrink-0">
          <img
            alt="Aside Image"
            src={aside}
            className="h-20 w-full object-contain"
            style={{ objectFit: 'contain' }}
          />
        </div> */}


        {dataArray.map((data, index) => (
          <div key={index}>
            <div className="flex justify-center mb-4">
              <div className="text-center bg-white shadow w-full px-8 py-6 rounded-md">
              <img
            alt="Aside Image"
            src={data.img}
            className="h-20 w-full object-contain"
            style={{ objectFit: 'contain' }}
          />
                <h3 className="mb-2 text-sm">{data.title}</h3>
                <p className="text-[9px] text-gray-500">{data.date}</p>
                <p className='text-sm'>({data.time})</p>
              </div>
        
            </div>
            {/* Divider */}
            {index !== dataArray.length - 1 && (
              <div key={`divider-${index}`} className="w-full border-t border-gray-300 mb-4" />
            )}
          </div>
        ))}

        {/* Divider at the end (optional) */}
        <div className="relative mt-6">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

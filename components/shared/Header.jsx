import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { IoMapSharp } from "react-icons/io5"
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const navItems = [
    { name: 'Home', link: '#' },
    { name: 'Company', link: '#', hasDropdown: true },
    { name: 'Products', link: '#', hasDropdown: true, isHighlighted: true },
    { name: 'Projects', link: '#' },
    { name: 'Careers', link: '#' },
    { name: 'Contact Us', link: '#' },
  ];

  
const Header = () => {
  return (
    <header className="w-full bg-white border-b shadow-sm flex py-3 px-2">
       <div className='w-[290px] h-[110px] bg-slate-500 rounded-lg'></div>

       <div className='w-full'>
          <div className='py-3 border-b flex justify-between w-full flex-1'>
             <div className='flex text-sm'>
                <div className='flex gap-2 items-center px-8'>
                    <BsFillTelephoneFill/>
                    <p className='text-[#9999a1]'>Call Us: +91 44 2615 60000</p>
                </div>
                <div className='flex gap-2 items-center px-8 border-l'>
                    <IoMapSharp />
                    <p className='text-[#9999a1]'>iwl@iwl.in</p>
                </div>
                <div className='flex gap-2 items-center px-8 border-l'>
                    <MdOutlineWatchLater/>
                    <p className='text-[#9999a1]'>Mon - Fri: 9:00-17:30 / Sat: 9:00-13:00</p>
                </div>
             </div>
             <div className='flex gap-3 mr-5'>
                <FaLinkedin size={20}/>
                <IoLogoYoutube size={22}/>
             </div>
          </div>

          <div className='py-5 flex justify-between'>
            <div className='px-8'>
                <ul className="flex gap-10">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative">
                        <a href={item.link} className={`text-gray-700 ${item.isHighlighted && "flex text-yellow-400"} flex gap-2 items-center hover:text-yellow-500 transition duration-300`}>
                            {item.name}
                            {item.hasDropdown && <IoIosArrowDown/>}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='px-4 border-l'>
                <GiHamburgerMenu size={24}/>
            </div>
          </div>
       </div>
    </header>
  );
};

export default Header;

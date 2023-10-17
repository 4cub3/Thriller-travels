import Link from 'next/link';
import React from 'react';
import { RiHome2Line, RiHome2Fill, RiMailLine ,RiHeart2Line, RiSettings2Line} from 'react-icons/ri';
import { AiOutlineAppstore } from 'react-icons/ai';
type Props = {};

const NavBar = (props: Props) => {
  const active = true;
  return (
    <nav>
      <ul className=' space-y-6'>
        
        <li >
          <Link
            href={'/'}
            className={`flex items-center gap-5 font-medium relative text-[${
                active ? '#1c2551' : 'gray'
            }]`}
            >
              {active && <p className='text-4xl absolute -left-8 top-[50%] -translate-y-[50%]'>•</p>}
            {active ? (
              <RiHome2Fill color='#1c2551' />
            ) : (
              <RiHome2Line color='gray' />
            )}
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href={'/'}
            className={`flex items-center gap-5 font-medium text-[gray]`}
          >
            <AiOutlineAppstore color='gray' />
            <span>Explore City</span>
          </Link>
        </li>
        <li>
          <Link
            href={'/'}
            className={`flex items-center gap-5 font-medium text-[gray]`}
          >
            <RiMailLine color='gray' />
            <span>Ticket</span>
          </Link>
        </li>
        <li>
          <Link
            href={'/'}
            className={`flex items-center gap-5 font-medium text-[gray]`}
          >
            <RiHeart2Line color='gray' />
            <span>Favourite</span>
          </Link>
        </li>
        <li>
          <Link
            href={'/'}
            className={`flex items-center gap-5 font-medium text-[gray]`}
          >
            <RiSettings2Line color='gray' />
            <span>Setting</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

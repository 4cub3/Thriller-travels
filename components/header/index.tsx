import { ButtonWrapper, Search } from '@/shared';
import { FaRegBell } from 'react-icons/fa';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  const date = new Date(Date.now());
  const formatedDate = date.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return (
    <header className='px-20 py-5 flex bg-white-10 items-center justify-between gap-5'>
      <Search />
      <div className='flex items-center  gap-5'>
        <p className='font-medium'>{formatedDate}</p>
        <small className=' bg-red-500 test-xs p-2 rounded-full text-white self-start'>
          <p className='leading-none'>3</p>
        </small>
        <div className='flex items-center gap-2'>
          <ButtonWrapper>
            <FaRegBell />
          </ButtonWrapper>
        </div>
      </div>
    </header>
  );
};

export default Header;

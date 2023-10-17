import Image from 'next/image';
import React from 'react';
import sofa from './house.jpg';
import { BookingForm } from '..';
type Props = {};

const Booking = (props: Props) => {
  return (
    <div className='w-full relative h-96 rounded-lg '>
      <Image
        src={sofa}
        alt='sofa'
        className='w-full h-full object-cover object-center rounded-3xl '
        placeholder='blur'
      />
      <BookingForm className='absolute -bottom-16 z-50 left-1/2 -translate-x-1/2 ' />
    </div>
  );
};

export default Booking;

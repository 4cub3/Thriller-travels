import Image from 'next/image';
import React from 'react';
import girl from './girl.jpg';

type Props = {};

const ProfilePhoto = (props: Props) => {
  return (
    <figure className='w-40 h-40 flex items-center justify-center  rounded-full p-2 border border-primary'>
      <div className='w-full h-full overflow-hidden rounded-full'>
        <Image
          src={girl}
          alt='Profile image'
          placeholder='blur'
          className='w-full h-full object-cover'
        //   quality={50}
        />
      </div>
    </figure>
  );
};

export default ProfilePhoto;

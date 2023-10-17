import { Card } from '@/shared';
import Image from 'next/image';
import { BiSolidStar } from 'react-icons/bi';
import image1 from './house2.jpg';
import Link from 'next/link';
import { CiLocationOn } from 'react-icons/ci';

type Props = {};

const BEstOffers = (props: Props) => {
  return (
    <div className='space-y-10 w-full overflow-hidden'>
      <div className='flex items-center justify-between'>
        <h3 className='text-4xl font-normal'>Best Offers</h3>
        <Link href={'/'} className='text-primary'>
          View All
        </Link>
      </div>
      <div className='flex  overflow-x-scroll sc max-w-20  w-full gap-5 py-10'>
        <Card className='flex w-[20%] shrink-0 flex-col gap-5'>
          <figure className=' w-full overflow-hidden rounded-3xl'>
            <Image
              src={image1}
              alt='destination'
              className='w-full h-full object-cover'
              placeholder='blur'
            />
          </figure>
          <article className='w-[73%]'>
            <div className='flex items-center  font-bold w-full justify-between'>
              <h3>7 seasons Apartments</h3>
            </div>
            <small className=' text-slate-400 flex items-center gap-2'>
              <CiLocationOn /> Kensignthon/london
            </small>
            <p className='font-medium'>
              $45.00 <small className=' text-slate-400'>/night</small>
            </p>
          </article>
        </Card>

        <Card className='flex w-[20%] shrink-0 flex-col gap-5'>
        <figure className=' w-full overflow-hidden rounded-3xl'>
            <Image
              src={image1}
              alt='destination'
              className='w-full h-full object-cover'
              placeholder='blur'
            />
          </figure>
          <article className='w-[73%]'>
            <div className='flex items-center  font-bold w-full justify-between'>
              <h3>7 seasons Apartments</h3>
            </div>
            <small className=' text-slate-400 flex items-center gap-2'>
              <CiLocationOn /> Kensignthon/london
            </small>
            <p className='font-medium'>
              $45.00 <small className=' text-slate-400'>/night</small>
            </p>
          </article>
        </Card>

        <Card className='flex w-[20%] shrink-0 flex-col gap-5'>
        <figure className=' w-full overflow-hidden rounded-3xl'>
            <Image
              src={image1}
              alt='destination'
              className='w-full h-full object-cover'
              placeholder='blur'
            />
          </figure>
          <article className='w-[73%]'>
            <div className='flex items-center  font-bold w-full justify-between'>
              <h3>7 seasons Apartments</h3>
            </div>
            <small className=' text-slate-400 flex items-center gap-2'>
              <CiLocationOn /> Kensignthon/london
            </small>
            <p className='font-medium'>
              $45.00 <small className=' text-slate-400'>/night</small>
            </p>
          </article>
        </Card>

        <Card className='flex w-[20%] shrink-0 flex-col gap-5'>
        <figure className=' w-full overflow-hidden rounded-3xl'>
            <Image
              src={image1}
              alt='destination'
              className='w-full h-full object-cover'
              placeholder='blur'
            />
          </figure>
          <article className='w-[73%]'>
            <div className='flex items-center  font-bold w-full justify-between'>
              <h3>7 seasons Apartments</h3>
            </div>
            <small className=' text-slate-400 flex items-center gap-2'>
              <CiLocationOn /> Kensignthon/london
            </small>
            <p className='font-medium'>
              $45.00 <small className=' text-slate-400'>/night</small>
            </p>
          </article>
        </Card>
        <Card className='flex w-[20%] shrink-0 flex-col gap-5'>
        <figure className=' w-full overflow-hidden rounded-3xl'>
            <Image
              src={image1}
              alt='destination'
              className='w-full h-full object-cover'
              placeholder='blur'
            />
          </figure>
          <article className='w-[73%]'>
            <div className='flex items-center  font-bold w-full justify-between'>
              <h3>7 seasons Apartments</h3>
            </div>
            <small className=' text-slate-400 flex items-center gap-2'>
              <CiLocationOn /> Kensignthon/london
            </small>
            <p className='font-medium'>
              $45.00 <small className=' text-slate-400'>/night</small>
            </p>
          </article>
        </Card>
      </div>
    </div>
  );
};

export default BEstOffers;

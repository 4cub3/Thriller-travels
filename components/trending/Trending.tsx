import { ButtonWrapper, Card } from '@/shared';
import Image from 'next/image';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { BiSolidStar } from 'react-icons/bi';
import image1 from './house-1.jpg';

type Props = {};

const Trending = (props: Props) => {
  return (
    <div className='space-y-10 w-full overflow-hidden'>
      <div className='flex items-center justify-between'>
        <p>Trending destination</p>
        <div className='flex gap-2'>
          <ButtonWrapper className='group hover:bg-primary transition-all delay-300 ease-in'>
            <MdOutlineChevronLeft className='group-hover:text-white transition-all delay-300 ease-in' />
          </ButtonWrapper>
          <ButtonWrapper className='group hover:bg-primary transition-all delay-300 ease-in'>
            <MdOutlineChevronRight className='group-hover:text-white transition-all delay-300 ease-in' />
          </ButtonWrapper>
        </div>
      </div>
      <div className='flex  overflow-x-scroll sc max-w-20  w-full gap-5 py-10'>
        <Card className='flex flex-2 gap-5'>
          <figure className='w-[30%] overflow-hidden rounded-lg'>
            <Image
              src={image1}
              alt='destination'
              className='w-full h-full object-cover'
              placeholder='blur'
            />
          </figure>
          <article className='w-[73%]'>
            <div className='flex items-center  font-bold w-full justify-between'>
              <h3>Montmartre, France</h3>
              <span className='flex  items-center'>
                <BiSolidStar color='orange' />
                <p>5/5</p>
              </span>
            </div>
            <small className=''>
              Visiting the best tourist areas chosen by the audience
            </small>
            <p className='font-medium'>$450,000.00</p>
          </article>
        </Card>

        <Card className='flex flex-2 gap-5'>
          <figure className='w-[30%] overflow-hidden rounded-lg'>
            <Image
              src={image1}
              alt='destination'
              className='w-full h-full object-cover'
              placeholder='blur'
            />
          </figure>
          <article className='w-[73%]'>
            <div className='flex items-center font-bold justify-between'>
              <h3>Montmartre, France</h3>
              <span className='flex  items-center'>
                <BiSolidStar color='orange' />
                <p>5/5</p>
              </span>
            </div>
            <small>
              Visiting the best tourist areas chosen by the audience
            </small>
            <p className='font-medium'>$450,000.00</p>
          </article>
        </Card>

        <Card className='flex flex-2 gap-5'>
          <figure className='w-[30%] overflow-hidden rounded-lg'>
            <Image
              src={image1}
              alt='destination'
              className='w-full h-full object-cover'
              placeholder='blur'
            />
          </figure>
          <article className='w-[73%]'>
            <div className='flex items-center font-bold justify-between'>
              <h3>Montmartre, France</h3>
              <span className='flex  items-center'>
                <BiSolidStar color='orange' />
                <p>5/5</p>
              </span>
            </div>
            <small className=''>
              Visiting the best tourist areas chosen by the audience
            </small>
            <p className='font-medium'>$450,000.00</p>
          </article>
        </Card>

        <Card className='flex flex-2 gap-5'>
          <figure className='w-[30%] overflow-hidden rounded-lg'>
            <Image
              src={image1}
              alt='destination'
              className='w-full h-full object-cover'
              placeholder='blur'
            />
          </figure>
          <article className='w-[73%]'>
            <div className='flex items-center font-bold justify-between w-full'>
              <h3>Montmartre, France</h3>
              <span className='flex  items-center'>
                <BiSolidStar color='orange' />
                <p>5/5</p>
              </span>
            </div>
            <small>
              Visiting the best tourist areas chosen by the audience
            </small>
            <p className='font-medium'>$450,000.00</p>
          </article>
        </Card>
      </div>
    </div>
  );
};

export default Trending;

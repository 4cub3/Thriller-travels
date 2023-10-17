"use client"
import { Button, Card } from '@/shared';
import { CiLocationOn,CiCalendarDate } from 'react-icons/ci';
import {BsPerson} from 'react-icons/bs'
type Props = {
  className?: string;
};

const BookingForm = ({ className }: Props) => {
  return (
    <Card className={`${className}`}>
      <form action='' className=' flex items-center gap-20'>
        <div className='flex items-center border-r border-r-gray-300 gap-5 px-4'>
          <CiLocationOn  size={20}/>
          <select name="" id="">
            <option value="">where are you going?</option>
          </select>
        </div>
        <div className='flex items-center border-r border-r-gray-300 gap-5 px-4'>
          <CiCalendarDate  size={20}/>
          <select name="" id="">
            <option value="">Check in date</option>
          </select>
        </div>
        <div className='flex items-center border-r border-r-gray-300 gap-5 px-4'>
          <BsPerson  size={20}/>
          <select name="" id="">
            <option value="">3 adults</option>
          </select>
        </div>
        <Button path='/' className='text-white' >
          Search
        </Button>
      </form>
    </Card>
  );
};

export default BookingForm;

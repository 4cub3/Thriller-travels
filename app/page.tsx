import { Booking } from '@/components';
import Trending from '../components/trending/Trending';
import BEstOffers from '@/components/best-offers';

export default function Home() {
  return (
    <section className='px-5 py-10  space-y-16 w-full overflow-hidden'>
      <Booking />
      <Trending />
      <BEstOffers />
    </section>
  );
}

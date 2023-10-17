import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Aside, Header, NavBar } from '@/components';
import { ProfilePhoto, EditButton, ButtonWrapper } from '@/shared';
import { MdOutlineChevronRight } from 'react-icons/md';
const roboto = Roboto({
  subsets: ['cyrillic'],
  style: ['normal'],
  weight: ['900'],
});

export const metadata: Metadata = {
  title: 'Thriller Travels',
  description: 'Created by Akintunde Adedoyin',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <main className='flex h-screen gap-5'>
          <Aside className='flex flex-col justify-between items-center px-6 py-10'>
            <div className=' flex flex-col items-center gap-10'>
              <h1 className='font-extrabold text-primary text-center text-[2rem]'>
                Mima<span className='text-stone-400'>Booking</span>
              </h1>
              <div className='relative'>
                <ProfilePhoto />
                <EditButton className='absolute -bottom-5 left-[50%] -translate-x-[50%]' />
              </div>
              <p className='capitalize font-medium text-[2rem] text-stone-400'>
                Ilia jan
              </p>
            </div>
            <NavBar />
            <div className='flex items-center gap-5 mb-20'>
              <ButtonWrapper>
                <MdOutlineChevronRight />
              </ButtonWrapper>
              <p>Logout</p>
            </div>
          </Aside>
          <section className=' w-full overflow-y-scroll sc'>
            <Header />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}

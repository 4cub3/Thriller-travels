import React from 'react';
import { CiSearch } from 'react-icons/ci';
import ButtonWrapper from '../button-wrapper';
type Props = {};

const Search = (props: Props) => {
  return (
    <ButtonWrapper>
      <div className=' gap-5 items-center p-4 inline-flex'>
        <CiSearch />
        <input
          type='text'
          placeholder='Search any thing ...'
          className='font-medium outline-none'
        />
      </div>
    </ButtonWrapper>
  );
};

export default Search;

import React from 'react';
import { RiEditCircleLine } from 'react-icons/ri';
interface Props {
  onClick?: () => {};
  className?: string;
}

const EditButton = ({ onClick, className }: Props) => {
  return (
    <button onClick={onClick} className={`${className} bg-primary p-2 rounded-full`}>
      <RiEditCircleLine color='#fff'/>
    </button>
  );
};

export default EditButton;

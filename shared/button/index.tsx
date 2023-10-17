import Link from 'next/link';

interface Props {
  path: string;
  className?: string;
  children: React.ReactNode;
}
const Button = ({ children, className, path }: Props) => {
  return (
    <Link href={path} className={`${className} btn btn-primary`}>
      {children}
    </Link>
  );
};

export default Button;

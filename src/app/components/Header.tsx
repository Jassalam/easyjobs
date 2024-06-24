import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-4xl" href={'/'}>
        EasyJobs
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={'/'}>Home</Link>
        <Link href={''}>Agency</Link>
        <Link href={''}>Developer</Link>
        <Link href={''}>About us</Link>
        <Link href={''}>Contact Us</Link>
      </nav>
      <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
      <Link className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4" href={''}>
        Login
      </Link></nav>
    </header>
  );
}

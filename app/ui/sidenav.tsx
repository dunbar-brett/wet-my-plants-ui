import Image from 'next/image'
import Link from 'next/link';
import { Bars3Icon, Cog6ToothIcon, PowerIcon } from '@heroicons/react/24/outline';

import { Button } from '@/app/ui/formItems/button';


export default function SideNav() {
  const navBarItems = [
    { name: 'Sign Up', href: '/sign-up' },
    { name: 'Login', href: '/login' },
    { name: 'Plants', href: '/plants' },
    { name: 'Locations', href: '/locations' },
    { name: 'Assign Guest', href: '/assign-guest' },
  ];

  return (
    <>
      <div className="block md:hidden">
        {/* TODO: add a < chevron for back button */}
        {/* TODO: add a back button that only shows on some pages */}
        <Bars3Icon className="w-12 absolute right-0 top-0" />
      </div>
      <div className="h-screen flex-col px-3 py-4 md:px-2 bg-plant-green text-white hidden md:block justify-between">
        <Link
          className="mb-2 flex h-20 items-center justify-center rounded-md p-4"
          href="/"
        >
          <div className="flex md:overflow-y-auto">
            <Image
              src="/logo.svg"
              alt="Wet My Plants Logo"
              width={30}
              height={24}
              priority
            ></Image>
          </div>
        </Link>


        <div className="flex flex-col flex-grow justify-between">
          {navBarItems.map((item) => (
            // <div className='w-full h-12 mt-16 mb-3 relative'>
              <Link key={item.name}
                    href={item.href}
                    className='flex h-12 w-full mt-10 justify-center items-center rounded-3xl bg-plant-green px-4
                              text-sm font-medium text-white transition-colors hover:bg-plant-green-dark
                              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                              focus-visible:outline-plant-green active:bg-plant-green-dark
                              aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
                >
                {item.name}
              </Link>
            // </div>
          ))}
        </div>


        <form className="flex-shrink">
          {/* TODO: add user profile card */}
          <Button className="flex h-[48px] w-full grow items-center justify-center gap-2">
            <Cog6ToothIcon className="w-6" />
            <span>Account Settings</span>
          </Button>
          <Button className="flex h-[48px] w-full grow items-center justify-center gap-2">
            <PowerIcon className="w-6" />
            <span>Sign Out</span>
          </Button>
        </form>
      </div>
    </>
  );
}


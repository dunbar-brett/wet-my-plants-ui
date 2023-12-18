import Image from 'next/image'
import Link from 'next/link';
// import NavLinks from '@/app/ui/dashboard/nav-links';
import { Bars3Icon, Cog6ToothIcon, PowerIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/forms/button';


export default function SideNav() {
  return (
    <>
      <div className="block md:hidden">
        {/* TODO: add a < chevron for back button */}
        {/* TODO: add a back button that only shows on some pages */}
        <Bars3Icon className="w-12 absolute right-0 top-0"/>
      </div>
      <div className="flex h-screen flex-col px-3 py-4 md:px-2 bg-plant-green text-white hidden md:block justify-between">
        <Link
          className="mb-2 flex h-20 items-center justify-center rounded-md p-4"
          href="/"
        >
          {/* <div className="w-32 md:w-40">
            Big Logo
          </div> */}
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
        <div className="flex flex-col flex-grow justify-between space-x-2 md:space-x-0 md:space-y-2">
          {/* <NavLinks /> */}
          <Button className="flex h-[48px] w-full grow items-center justify-center gap-2">
            <span>Sign Up</span>
          </Button>
          <Button className="flex h-[48px] w-full grow items-center justify-center gap-2">
            <span>Sign In</span>
          </Button>
          <Button className="flex h-[48px] w-full grow items-center justify-center gap-2">
            <span>Plants</span>
          </Button>
          <Button className="flex h-[48px] w-full grow items-center justify-center gap-2">
            <span>Locations</span>
          </Button>
          <Button className="flex h-[48px] w-full grow items-center justify-center gap-2">
            <span>Assign Guest</span>
          </Button>
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


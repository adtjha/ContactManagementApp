import { Typography } from "@material-tailwind/react";
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";

const Nav = () => {
  // Get window size using custom hook
  const size = useWindowSize();

  // State to manage menu open/close
  const [open, setOpen] = useState<boolean>(false);

  // Function to open the menu
  const openMenu = () => setOpen(true);

  // Function to close the menu
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Conditional rendering based on window size */}
      {size.width !== null && size.width > 720 ? (
        // Large screen menu
        <nav className='min-w-[320px] border-r-2 h-auto bg-stone-200 flex flex-col items-start justify-start gap-20 p-4'>
          <div className='text-4xl font-extrabold text-gray-400 -mb-4'>
            Navigation
          </div>
          <ul className='flex-grow flex flex-col items-start justify-start gap-6'>
            <li className=''>
              <a href='/' className='hover:underline text-xl font-bold'>
                Contact
              </a>
            </li>
            <li className=''>
              <a href='/charts' className='hover:underline text-xl font-bold'>
                Charts And Map
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        // Small screen menu
        <>
          {open ? (
            // Expanded menu
            <nav className='absolute inset-0 bg-gray-200 z-20 p-10 flex flex-col items-center justify-evenly'>
              <button className='absolute top-5 left-5' onClick={closeMenu}>
                {/* Close button icon */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6'>
                  <path
                    fillRule='evenodd'
                    d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <ul className='flex-grow flex flex-col items-center justify-evenly gap-6'>
                <li>
                  <a href='/' className='text-4xl font-bold'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='/Charts' className='text-4xl font-bold'>
                    Charts And Map
                  </a>
                </li>
              </ul>
            </nav>
          ) : (
            // Collapsed menu
            <button className='absolute top-5 left-4' onClick={openMenu}>
              {/* Menu button icon */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'>
                <path
                  fillRule='evenodd'
                  d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Nav;

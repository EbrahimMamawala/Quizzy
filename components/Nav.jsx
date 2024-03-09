"use client";

import Link from "next/link"
import { CgProfile } from "react-icons/cg";
import '@styles/global.css'
import '@styles/tailwind.css'
import { useState, useEffect } from 'react' 
import { trusted } from "mongoose";
// import { signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
    // const {data:session} = useSession();

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // const [providers, setProviders ] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    // useEffect (() => {
    //     const fetchProviders = async () => {
    //         const res = await getProviders();
    //         setProviders(res);
    //         console.log("Providers:", res);
    //     };
    
    //     fetchProviders();
    // },[])

    useEffect(() => {
        console.log(isLoggedIn);
    },);

  return (
    <nav className="top-0 flex justify-between items-center w-full h-20 px-4 text-black bg-blue-400 fixed">
        <Link href='/' className="text-4xl font-bold">Quizzy</Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            {isLoggedIn ? 
                (<div className="flex gap-3 md:gap-5">
                    <Link href="/createQuiz" className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
                        Create Quiz
                    </Link>

                    <button type="button" onClick= {() => setIsLoggedIn(false)} className="rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center">
                        Sign Out
                    </button>
                </div>) : (
                <>
                {/* {providers && Object.values(providers).map((provider) => ( */}
                    <button
                        type="button"
                        // key = {provider.name} 
                        onClick={() => setIsLoggedIn(true)} 
                        className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'>
                        Sign In
                    </button>
                {/*))}*/} 
                </>)    
            }
        </div>


        {/* Mobile navigation // Needs debugging */}
        <div className='sm:hidden flex relative'>
        {isLoggedIn ? (
          <div className='flex'>
            <CgProfile
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/createQuiz'
                  className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Quiz
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    setIsLoggedIn(false);
                  }}
                  className='mt-5 w-full rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* {providers && Object.values(providers).map((provider) => ( */}
                <button
                  type='button'
                //   key={provider.name}
                  onClick={() => setIsLoggedIn(true)}
                  className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'
                >
                  Sign in
                </button>
            {/* ))} */}
          </>
        )}
      </div>  

    </nav>
  )
}

export default Nav
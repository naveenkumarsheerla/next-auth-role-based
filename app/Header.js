"use client"
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  return (
    <>
      {/* <nav className="bg-gray-800 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-row ml-4">
            {data?.user.role === 'admin' ? (
              <>
                <Link href='/films_details' className="mr-3 md:mr-6 text-white" >
                  Get Film Details
                </Link>
                <Link href='/createUser' className="mr-3 md:mr-6 text-white">
                  Create User
                </Link>
              </>
            ) : data?.user.role === 'user' ? (
              <>
                <Link href='/user' className="mr-3 md:mr-6 text-white">
                  User
                </Link>
              </>
            ) : null}
          </div>
          <div className="flex items-center">
            <span className="text-white  mr-6 md:mr-4">Hi, {data?.user?.role}</span>
            <button type="button" className="  mr-2 text-white hover:text-blue-500" onClick={() => signOut()}>Logout</button>
          </div>
        </div>
      </nav> */}

      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  {data?.user.role === 'admin' ? (
                    <>
                      <Link href='/films_details' className="mr-3 md:mr-6 text-white" >
                        Get Film Details
                      </Link>
                      <Link href='/createUser' className="mr-3 md:mr-6 text-white">
                        Create User
                      </Link>
                    </>
                  ) : data?.user.role === 'user' ? (
                    <>
                      <Link href='/user' className="mr-3 md:mr-6 text-white">
                        User
                      </Link>
                    </>
                  ) : null}


                </div>

              </div>
            </div>

            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="relative ml-3">
                <div>
                  <span className="text-white  mr-6 md:mr-4">Hi, {data?.user?.role}</span>
                  <button type="button" className="  mr-2 text-white hover:text-blue-500" onClick={() => signOut()}>Logout</button>
                </div>


              </div>
            </div>
          </div>
        </div>


      </nav>

    </>
  );
};

export default Header;

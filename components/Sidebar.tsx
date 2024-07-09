import React from 'react'
import Image from 'next/image'
import ProfilePhoto from './shared/ProfilePhoto'
import { currentUser } from '@clerk/nextjs/server'


const Sidebar = async ({ user }: { user: any }) => {
  // const User = await currentUser()
  return (
    <div className='hidden md:block w-[20%] h-fit border border-gray-400 bg-white rounded-lg'>
      <div className='flex flex-col items-center relative '>
        <div className='w-full h-16 overflow-hidden'>
          {
            user && (
              <Image
                src={'/banner.jpg'}
                alt='banner'
                width={200}
                height={200}
                className='w-full  h-full rounded-t'
              />
            )
          }
        </div>
        <div className='my-1 absolute top-11 left-[40%]'>
          <ProfilePhoto
            src={user ? user?.imageUrl! : '/banner.jpg'} />
        </div>
        <div className='mt-8 mb-4'>
          <h1 className='font-bold hover:underline cursor-pointer'>{user ? `${user?.firstName} ${user?.lastName}` : 'smile plz'}</h1>
          <p className='text-xs'>@{user ? `${user?.lastName}` : 'username'}</p>
        </div>
      </div>
      <div className='text-xs'>
        <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
          <p>Post Impression</p>
          <p className='text-blue-500 font-bold'>88</p>
        </div>
        <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
          <p>Posts</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

import React from 'react'
import Image from 'next/image'
import ProfilePhoto from './shared/ProfilePhoto'


const Sidebar = async ({ user }: { user: any }) => {
  return (
    <div className='hidden md:block w-[20%] h-fit border border-gray-400 bg-white rounded-lg'>
      <div className='flex flex-col items-center relative '>
        <div>
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
        <div className='my-1 absolute top-10 left-[40%]'>
          <ProfilePhoto
            src={user ? user?.imageUrl! : '/banner.jpg'} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar

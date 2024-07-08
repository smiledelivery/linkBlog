import Image from 'next/image'
import React from 'react'
import SearchInput from './custom ui/SearchInput'
import NavItems from './custom ui/NavItems'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-50 shadow-lg'>
            <div className='flex items-center justify-between max-w-6xl h-14 mx-auto px-3'>
                <div className='flex items-center gap-2'>
                    <Image
                        src={`/linklogo.png`}
                        alt='linklogo'
                        width={35}
                        height={35}
                    />
                    <div className='md:block hidden'>
                        <SearchInput />
                    </div>
                </div>
                <div className='md:block hidden'>
                    <NavItems />
                </div>
                <div>
                    <div>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <Button className='rounded-full' variant={'secondary'}>
                                <SignInButton />
                            </Button>
                        </SignedOut>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

import { Bell, BriefcaseBusiness, Home, MessageCircleMore, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
interface NavItem {
    src: string,
    icon: JSX.Element,
    label: string
}

const navItems: NavItem[] = [
    {
        src: '/home',
        icon: <Home />,
        label: 'Home'
    },
    {
        src: '/networks',
        icon: <User />,
        label: ' My Network'
    },
    {
        src: '/job',
        icon: <BriefcaseBusiness />,
        label: 'Jobs'
    },
    {
        src: '/message',
        icon: <MessageCircleMore />,
        label: 'Messaging'
    },
    {
        src: '/notification',
        icon: <Bell />,
        label: 'Notification'
    }
]

const NavItems = () => {
    return (
        <div className='flex gap-8'>
            {navItems.map((navItem, index) => {
                return (
                    <div key={index} className='flex flex-col items-center cursor-pointer text-black hover:text-gray-800'>
                        <span>{navItem.icon}</span>
                        <Link
                            href={navItem.src}
                            className='text-xs'>
                            {navItem.label}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default NavItems

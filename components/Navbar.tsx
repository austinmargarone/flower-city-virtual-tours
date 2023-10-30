import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import StateSwitch from './ui/StateSwitch';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const MenuItems = (isMobile): any => {
    const generateLink = () => {

    }

    return (
        <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
            {['About', 'Our Results', 'Blog'].map((item, i) => (
                <li
                key={i}
                className='flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-dark'
                >

                </li>
            ))}
        </ul>

    )
}

const Navbar = (props: Props) => {

    return (
        <nav className='flexBetween fixed z-10 w-full flex-row border bg-white p-4 dark:border-black dark:bg-black'>
            <div className='flex flex-1 flex-row justify-start'>
                <Link href="/">
                    <div className='flexCenter cursor-pointer md:hidden' >
                        <p className='text-lg font-semibold text-black dark:text-white'>Flower City Virtual Tours</p>
                    </div>
                </Link>
                <Link href="/">
                    <div className='hidden md:flex'>

                    </div>
                </Link>
            </div>
            <div className='flex flex-inital flex-row justify-center'>
                <div className='flex items-center mr-2'>
                    <StateSwitch />

                </div>
            </div>
            <div className='md:hidden flex'>
                <ul className='list-none flexCenter flex-row'>
                    <MenuItems />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
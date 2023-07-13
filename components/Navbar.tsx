import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import StateSwitch from './ui/StateSwitch';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const Navbar = (props: Props) => {

    return (
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <nav className='flexBetween fixed z-10 w-full flex-row border bg-white p-4 dark:border-black dark:bg-black'>
            <div className='flex flex-1 flex-row justify-start'>
                <Link href="/">
                    <div>
                        {/* <Image src={image.} objectFit='cointain' width={32} height={32} alt="logo" /> */}
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
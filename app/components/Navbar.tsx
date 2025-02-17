import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import SignIn from './auth-component';
import { auth } from '@/auth';

const Navbar = async () => {
    const session = await auth();

  return (
    <header className='bg-gray-800 text-white p-4'>
        <nav className='flex justify-between items-center container mx-auto'>
            {/* logo */}
            <div className='text-lg font-semibold'>
                <Link href="/">Logo</Link>
            </div>

            {/* navigational items */}
            <ul className='flex gap-4 items-center'>
                <li><Link href="/" className='hover:text-yellow-300'>Home</Link></li>
                <li><Link href="/about" className='hover:text-yellow-300'>About</Link></li>
                <li><Link href="/dashboard" className='hover:text-yellow-300'>Dashboard</Link></li>
                <li><Link href="/contacts" className='hover:text-yellow-300'>Contacts</Link></li>
            </ul>

            {/* user profile */}
            {
                session?.user != null
                ?   <div className='flex gap-4 items-center'>
                        <Link href='/profile'>
                            <Image src={session?.user?.image ?? "/mystery-man.jpg"} alt='' height={35} width={35} className='rounded-full' />
                        </Link>
                        <button>Logout</button>
                    </div>

                :   <div className='flex gap-4 items-center'>
                        <SignIn
                            className='px-4 py-1 rounded-full bg-blue-500 hover:bg-blue-700 active:bg-blue-900 transition-colors duration-300 cursor-pointer'
                        >Login</SignIn>
                    </div>
            }
        </nav>
    </header>
  )
}

export default Navbar

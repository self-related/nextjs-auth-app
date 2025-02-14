import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-gray-800 text-white p-4'>
        <nav className='flex justify-between items-center container mx-auto'>
            {/* logo */}
            <div className='text-lg font-semibold'>
                <Link href="/">Logo</Link>
            </div>

            {/* navigational items */}
            <ul className='flex gap-4 items-center'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar

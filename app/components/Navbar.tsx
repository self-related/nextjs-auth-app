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
                <li><Link href="/" className='hover:text-yellow-300'>Home</Link></li>
                <li><Link href="/about" className='hover:text-yellow-300'>About</Link></li>
                <li><Link href="/dashboard" className='hover:text-yellow-300'>Dashboard</Link></li>
                <li><Link href="/contacts" className='hover:text-yellow-300'>Contacts</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[var(--header-bg)] py-8">
      <div className="container">
        <div className="flex gap-y-4 sm:gap-y-0 flex-col sm:flex-row justify-between items-center text-[#3D3D3D] text-[12px] sm:text-[14px] leading-[112%] font-normal">
            <ul className="flex gap-5 items-center ">
                <li>
                    <Link href="#">Terms and Conditions</Link>
                </li>
                <li>
                    <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#">Help & Support</Link>
                </li>
            </ul>

            <p className='text-center'>All rights reserved, © Behad LLC</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

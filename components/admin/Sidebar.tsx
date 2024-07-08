'use client'

import { FC, useState } from 'react'
import { adminSidebarData } from '@data/adminSidebar'
import { INavLink } from '@modules/NavLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import Button from '@components/shared/Button'

const AdminSidebar: FC = () => {
  const pathname = usePathname()
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false)

  return (
    <div className="lg:sticky block left-0 top-0 lg:min-w-[15rem] lg:h-max border border-bordersColor">
      
      <div className="lg:hidden flex gap-3 items-center">
        <div className='flex flex-col gap-1'>
          <span className='w-8 h-0.5 block bg-whiteColor' />
          <span className='w-8 h-0.5 block bg-whiteColor' />
          <span className='w-6 h-0.5 block bg-whiteColor' />
        </div>

        <p className='label uppercase'>Menu</p>
      </div>

      <ul>
        {adminSidebarData.map((link: INavLink, key: number) => {
          const { text, route } = link
          return (
            <li
              key={key}
              className={`${route && pathname.includes(route) ? 'bg-primaryColor' : ''} 
            py-4 px-4 border-b border-bordersColor duration-300 hover:bg-terniaryColor`}
            >
              {route ? <Link href={route}>{text}</Link> : <button
                onClick={() => signOut()}>{text}</button>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AdminSidebar

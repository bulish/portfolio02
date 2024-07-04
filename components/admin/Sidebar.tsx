'use client'

import { FC } from 'react'
import { adminSidebarData } from '@data/adminSidebar'
import { INavLink } from '@modules/NavLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

const AdminSidebar: FC = () => {
  const pathname = usePathname()

  return (
    <div className="sticky left-0 top-0 min-w-[15rem] h-max border border-borders">
      <ul>
        {adminSidebarData.map((link: INavLink, key: number) => {
          const { text, route } = link
          return (
            <li
              key={key}
              className={`${route && pathname.includes(route) ? 'bg-primary' : ''} 
            py-4 px-4 border-b border-borders duration-300 hover:bg-terniary`}
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

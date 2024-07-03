'use client'

import { FC } from 'react'

// link and routes
import Link from 'next/link'
import * as ROUTES from '@constants/routes'
import { usePathname } from 'next/navigation'

// data and types
import { headerData } from '@data/header'
import { INavLink } from '@modules/NavLink'

export const Header: FC = () => {
  const pathname = usePathname()

  return (
    <header className="fixed w-full py-12">
      <div className="max-width flex justify-between">
        <Link href={ROUTES.HOME} className="label">
          &lt;Libuše Babičková <span className="text-primary">/</span>&gt;
        </Link>

        <nav>
          <ul className="flex gap-12 items-center">
            {headerData.map((item: INavLink, key: number) => {
              const { text, route } = item
              return (
                <li key={key} className="cursor-pointer">
                  <Link
                    href={route}
                    className={`${pathname === route ? 'label--active' : ''} label link`}
                  >
                    {text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

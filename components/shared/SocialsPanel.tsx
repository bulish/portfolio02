import { FC } from 'react'

// data and model
import { ISocial } from '@modules/Socials'
import { socialsData } from '@data/socials'

import Image from 'next/image'

export const SocialsPanel: FC = () => {
  return (
    <div className="fixed top-0 h-full w-16 border-r-[0.5px] border-borders">
      <ul className="flex flex-col justify-center items-center gap-4 h-full w-full">
        {socialsData.map((item: ISocial, key: number) => {
          const { icon, link, alt } = item
          return (
            <li key={key}>
              <a
                target="_blank"
                href={link}
                rel="noreferrer"
                className="social cursor-pointer relative"
              >
                <Image src={icon} alt={alt} width={25} height={25} />

                <span
                  className="absolute top-0 left-0 -traslate-x-1/2 -traslate-y-1/2 w-full h-full rounded-full
                        border-white border-2 duration-300"
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

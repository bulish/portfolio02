import { FC } from 'react'

export const NamePanel: FC = () => {
  return (
    <div className="lg:fixed hidden top-0 right-0 h-full w-16 border-r-[0.5px] border-bordersColor w-16 border-l-[0.5px] border-bordersColor flex items-center justify-center">
      <p className="heading-4 rotate-90 whitespace-nowrap">
        Libuše Babičková | FE developer
      </p>
    </div>
  )
}

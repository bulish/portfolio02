'use client'

import { FC } from 'react'
import { languageOptions } from '@data/languageSwitcher'
import { ILanguageSwitcherProps, IOptionIcon } from '@modules/forms/LanguageSwitcher'
import Image from 'next/image'
import { SelectButton } from 'primereact/selectbutton'

export const LanguageSwitcher: FC<ILanguageSwitcherProps> = (props) => {

  const justifyTemplate = (option: IOptionIcon) => {
    const isSelected = props.activeLanguage?.toLowerCase() === option.value.toLowerCase()
    const borderColor = isError(option.value) ? "red-400 bg-error/50" : isSelected ? "borders" : " inactiv"

    return (
      <div className={`border-2 border-${borderColor} p-2 rounded-md h-full`}>
        <Image
          src={option.icon}
          alt={option.label}
          width={25}
          height={25}
          className='object-cover'
        />
      </div>
    )
  }
  
  const isError = (lang: string) => {
    return Object.keys(props.errors).some(e => e.endsWith(`_${lang.toLowerCase()}`))
  }

  const handleChange = (e: { value: string }) => {
    if (e.value && e.value !== props.activeLanguage) {
      props.setActiveLanguage(e.value)
    }
  }

  return (
    <SelectButton
      value={props.activeLanguage}
      onChange={e => handleChange(e)}
      itemTemplate={justifyTemplate}
      optionLabel="value"
      options={languageOptions}
      className='mb-8'
    />
  )
}

'use client'

import {
  IBasicInput,
  ICheckbox,
  IRadioInput,
  ISelect,
  InputType,
} from '@modules/forms/Inputs'
import { BasicInput } from './BasicInput'
import { FieldValues } from 'react-hook-form'
import { Select } from './Select'
import { RadioInput } from './RadioInput'
import { Checkbox } from './Checkbox'
import { IForm } from '@modules/forms/Form'
import { Textarea } from './Textarea'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useState } from 'react'
import { Languages } from '@modules/forms/LanguageSwitcher'
import { IoFlagOutline } from 'react-icons/io5'

export const Form = <T extends FieldValues>(props: IForm<T>) => {
  const [activeLanguage, setActiveLanguage] = useState<string>(Languages.CS.toString())
    
  return (
    <>
      <LanguageSwitcher
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
        errors={props.errors}
      />
      
      {props.data.map(input => {
        if (
          [InputType.NUMBER, InputType.TEXT, InputType.PASSWORD].includes(input.type)
        ) {
          const {
            placeholder,
            id,
            required,
            pattern,
            type,
            min,
            max,
            minLengthErr,
            maxLengthErr,
            noPaddingOnMobile,
            isLocalized,
          } = input as IBasicInput<T>
          return (
            <BasicInput
              key={id}
              placeholder={placeholder}
              id={id}
              errors={props.errors}
              register={props.register}
              required={required}
              type={type}
              pattern={pattern}
              min={min}
              max={max}
              minLengthErr={minLengthErr}
              maxLengthErr={maxLengthErr}
              noPaddingOnMobile={noPaddingOnMobile}
              readOnly={props.readOnly}
              isLocalized={isLocalized}
              activeLanguage={activeLanguage}
            />
          )
        } else if (input.type === InputType.SELECT) {
          const {
            placeholder,
            id,
            required,
            options,
            type,
            noPaddingOnMobile,
            isLocalized
          } = input as ISelect<T>
          return (
            <Select
              key={id}
              register={props.register}
              placeholder={placeholder}
              id={id}
              errors={props.errors}
              required={required}
              options={options}
              type={type}
              noPaddingOnMobile={noPaddingOnMobile}
              readOnly={props.readOnly}
              isLocalized={isLocalized}
              activeLanguage={activeLanguage}
            />
          )
        } else if (input.type === InputType.RADIO) {
          const {
            placeholder,
            id,
            required,
            options,
            type,
            noPaddingOnMobile,
            isLocalized
          } = input as IRadioInput<T>
          return (
            <RadioInput
              key={id}
              register={props.register}
              placeholder={placeholder}
              id={id}
              required={required}
              options={options}
              type={type}
              noPaddingOnMobile={noPaddingOnMobile}
              readOnly={props.readOnly}
              isLocalized={isLocalized}
              activeLanguage={activeLanguage}
            />
          )
        } else if (input.type === InputType.CHECKBOX) {
          const {
            placeholder,
            id,
            required,
            options,
            type,
            noPaddingOnMobile,
            isLocalized
          } = input as ICheckbox<T>
          return (
            <Checkbox
              key={id}
              register={props.register}
              placeholder={placeholder}
              id={id}
              required={required}
              options={options}
              type={type}
              noPaddingOnMobile={noPaddingOnMobile}
              readOnly={props.readOnly}
              isLocalized={isLocalized}
              activeLanguage={activeLanguage}
            />
          )
        } else if (input.type === InputType.TEXTAREA) {
          const {
            placeholder,
            id,
            required,
            pattern,
            type,
            min,
            max,
            minLengthErr,
            maxLengthErr,
            noPaddingOnMobile,
            isLocalized
          } = input as IBasicInput<T>
          return (
            <Textarea
              key={id}
              placeholder={placeholder}
              id={id}
              errors={props.errors}
              register={props.register}
              required={required}
              type={type}
              pattern={pattern}
              min={min}
              max={max}
              minLengthErr={minLengthErr}
              maxLengthErr={maxLengthErr}
              noPaddingOnMobile={noPaddingOnMobile}
              readOnly={props.readOnly}
              isLocalized={isLocalized}
              activeLanguage={activeLanguage}
            />
          )
        }
      })}

      <div className='text-[12px] flex gap-4'>
        <p className='text-darkGrey'>Fields marked <span className='text-white inline'>*</span> are required.</p>
        <p className='text-darkGrey'>Fields marked <IoFlagOutline className='inline' /> are localized.</p>
      </div>
    </>
  )
}

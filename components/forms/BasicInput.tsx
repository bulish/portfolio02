"use client"

import { IBasicInput, InputType } from '@modules/forms/Inputs'
import { FieldValues, Path } from 'react-hook-form'
import { InputLabel } from './InputLabel'
import { isInputVisible } from '@utils/localization'
import { Languages } from '@modules/forms/LanguageSwitcher'

export const BasicInput = <T extends FieldValues>(props: IBasicInput<T>) => {
  const error = props.errors[props.id]

  return (
    <div
      className={`${props.noPaddingOnMobile ? 'md:' : ''} mb-4 form__input 
        ${isInputVisible(props, props.activeLanguage ?? Languages.CS) ? "block" : "hidden"}`}
    >
      
      <InputLabel 
        id={props.id}
        placeholder={`${props.placeholder} ${props.required ? "*" : null}`}
        isLocalized={props.isLocalized}
      />

      <input
        className={`${error ? 'mb-3 input__error' : 'mb-0'}
          ${props.type === InputType.PASSWORD && props.readOnly ? 'hidden opacity-0 h-0' : ''}`}
        id={props.id}
        type={props.type}
        placeholder={`${props.placeholder} ${props.required ? "*" : null}`}
        readOnly={props.readOnly}
        {...props.register(props.id as Path<T>, {
          required: props.readOnly ? false : props.required,
          pattern: props.pattern,
          maxLength: props.max,
          minLength: props.min,
        })}
      />

      {/* error message */}
      {error && error.type === 'required' && (
        <p className="h-6 text-left error">{error.message}</p>
      )}

      {error && error.type === 'pattern' && (
        <p className="h-6 text-left error">{`${props.placeholder} is invalid`}</p>
      )}

      {error && error.type === 'minLength' && (
        <p className="h-6 text-left error">{props.minLengthErr}</p>
      )}

      {error && error.type === 'maxLength' && (
        <p className="h-6 text-left error">{props.maxLengthErr}</p>
      )}
    </div>
  )
}

'use client'

import { ISelect, IOption } from '@modules/forms/Inputs'
import { FieldValues, Path } from 'react-hook-form'
import { InputLabel } from './InputLabel'
import { isInputVisible } from '@utils/localization'
import { Languages } from '@modules/forms/LanguageSwitcher'

export const Select = <T extends FieldValues>(props: ISelect<T>) => {
  const error = props.errors[props.id]

  return (
    <div className={`${props.noPaddingOnMobile ? 'md:' : ''}mb-4 form__input 
      ${isInputVisible(props, props.activeLanguage ?? Languages.CS) ? "block" : "hidden"}`}>
      
      <InputLabel 
        id={props.id}
        placeholder={`${props.placeholder} ${props.required ? "*" : null}`}
        isLocalized={props.isLocalized}
      />

      <select
        disabled={props.readOnly}
        className={error ? "input__error" : ""}
        id={props.id}
        {...props.register(props.id as Path<T>, {
          required: props.required,
        })}
      >
        {props.options &&
          props.options.map((item: IOption) => {
            const { value, label } = item
            return (
              <option key={value} value={value}>
                {label}
              </option>
            )
          })}
      </select>

      {/* error message */}
      {error && error.type === 'required' && (
        <p className="h-6 text-left error">{error.message}</p>
      )}
    </div>
  )
}

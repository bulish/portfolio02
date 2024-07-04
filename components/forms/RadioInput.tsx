import { IRadioInput, IOption } from '@modules/forms/Inputs'
import { FieldValues, Path } from 'react-hook-form'
import { InputLabel } from './InputLabel'
import { isInputVisible } from '@utils/localization'
import { Languages } from '@modules/forms/LanguageSwitcher'

export const RadioInput = <T extends FieldValues>(props: IRadioInput<T>) => {
  return (
    <div className={`${props.noPaddingOnMobile ? 'md:' : ''}mb-4 form__input 
      ${isInputVisible(props, props.activeLanguage ?? Languages.CS) ? "block" : "hidden"}`}>

      <InputLabel 
        id={props.id}
        placeholder={`${props.placeholder} ${props.required ? "*" : null}`}
        isLocalized={props.isLocalized}
      />

      <div>
        {props.options.map((option: IOption, key: number) => {
          return (
            <div
              key={key}
              className={props.options.length > 2 ? 'w-full my-2' : 'inline'}
            >
              <input
                type="radio"
                readOnly={props.readOnly}
                id={option.value}
                value={option.value}
                className="hidden"
                defaultChecked={key === 0}
                {...props.register(props.id as Path<T>, {
                  required: props.required,
                })}
                name={props.id}
              />
              <label
                htmlFor={option.value}
                className={`${key === 1 && props.options.length === 2 ? 'ml-2' : ''}
                  ${props.options.length > 2 ? 'w-full block' : ''}
                  button button--small button--light cursor-pointer`}
              >
                {option.label}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

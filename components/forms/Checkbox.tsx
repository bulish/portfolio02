import { ICheckbox, IOption } from '@modules/forms/Inputs'
import { FieldValues, Path } from 'react-hook-form'
import { InputLabel } from './InputLabel'
import { isInputVisible } from '@utils/localization'
import { Languages } from '@modules/forms/LanguageSwitcher'

export const Checkbox = <T extends FieldValues>(props: ICheckbox<T>) => {
  return (
    <div className={`${props.noPaddingOnMobile ? 'md:' : ''}mb-4 form__input 
      ${isInputVisible(props, props.activeLanguage ?? Languages.CS) ? "block" : "hidden"}`}>
      
      <InputLabel 
        id={props.id}
        placeholder={`${props.placeholder} ${props.required ? "*" : null}`}
        isLocalized={props.isLocalized}
      />

      <div className="w-full h-full flex flex-col gap-y-1 mt-1">
        {props.options.map((option: string | IOption, key: number) => {
          const isOptionString = typeof option === 'string'
          return (
            <label
              key={key}
              htmlFor={isOptionString ? option : option.value}
              className="checkbox-container"
            >
              {isOptionString ? option : option.label}
              <input
                type="checkbox"
                readOnly={props.readOnly}
                id={isOptionString ? option : option.value}
                value={isOptionString ? option : option.value}
                {...props.register(props.id as Path<T>, {
                  required: props.required,
                })}
                name={props.id}
              />
              <span className="checkbox__span" />
            </label>
          )
        })}
      </div>
    </div>
  )
}

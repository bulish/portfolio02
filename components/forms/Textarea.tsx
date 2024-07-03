import { ITextarea, InputType } from '@modules/forms/Inputs'
import { FieldValues, Path } from 'react-hook-form'

export const Textarea: <T extends FieldValues>(
  props: ITextarea<T>
) => JSX.Element = <T extends FieldValues>({
  placeholder,
  id,
  required,
  pattern,
  register,
  errors,
  type = InputType.TEXTAREA,
  min,
  max,
  minLengthErr,
  maxLengthErr,
  noPaddingOnMobile,
  readOnly,
}: ITextarea<T>) => {
  const error = errors[id]
  const showLabel =
    type !== InputType.PASSWORD || !readOnly || id === 'new_password'
  const labelContent =
    type !== InputType.PASSWORD || !readOnly ? placeholder : 'Heslo'

  return (
    <div
      className={`${noPaddingOnMobile ? 'md:' : ''} form__input ${showLabel ? 'mb-4' : ''}`}
    >
      {showLabel && <label htmlFor={id}>{labelContent}</label>}

      <textarea
        className={`${error ? 'mb-3' : 'mb-0'} resize-none`}
        id={id}
        placeholder={placeholder}
        readOnly={readOnly}
        {...register(id as Path<T>, {
          required: readOnly ? false : required,
          pattern,
          maxLength: max,
          minLength: min,
        })}
      />

      {/* error message */}
      {error && error.type === 'required' && (
        <p className="h-6 text-left error">{error.message}</p>
      )}

      {error && error.type === 'pattern' && (
        <p className="h-6 text-left error">{`${placeholder} nemĂˇ sprĂˇvnĂ˝ tvar`}</p>
      )}

      {error && error.type === 'minLength' && (
        <p className="h-6 text-left error">{minLengthErr}</p>
      )}

      {error && error.type === 'maxLength' && (
        <p className="h-6 text-left error">{maxLengthErr}</p>
      )}
    </div>
  )
}

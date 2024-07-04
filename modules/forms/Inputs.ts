import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
  PASSWORD = 'password',
  SELECT = 'select',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  TEXTAREA = 'textarea',
}

export type IGeneralInput<T extends FieldValues> =
  | Omit<ISelect<T>, 'register' | 'errors'>
  | Omit<IBasicInput<T>, 'register' | 'errors'>
  | Omit<IRadioInput<T>, 'register' | 'errors'>
  | Omit<ICheckbox<T>, 'register' | 'errors'>
  | Omit<ITextarea<T>, 'register' | 'errors'>

export interface IBaseInput<T extends FieldValues> {
  placeholder: string
  id: Path<T> | string
  required?: string
  register: UseFormRegister<T>
  errors: any
  type: InputType
  noPaddingOnMobile?: boolean
  readOnly?: boolean
  isLocalized: boolean
  activeLanguage?: string
}

export interface IBasicInput<T extends FieldValues> extends IBaseInput<T> {
  pattern?: RegExp
  min?: number
  max?: number
  minLengthErr?: string
  maxLengthErr?: string
}

export interface ITextarea<T extends FieldValues> extends IBaseInput<T> {
  pattern?: RegExp
  min?: number
  max?: number
  minLengthErr?: string
  maxLengthErr?: string
}

export interface ISelect<T extends FieldValues> extends IBaseInput<T> {
  options: IOption[]
}

export interface IOption {
  value: string
  label: string
}

export interface IRadioInput<T extends FieldValues> extends Omit<IBaseInput<T>, 'errors'> {
  options: IOption[]
}

export interface ICheckbox<T extends FieldValues> extends Omit<IBaseInput<T>, 'errors'> {
  options: string[] | IOption[]
}

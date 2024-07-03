import { ReactElement } from 'react'

export enum ButtonType {
  submit,
  button,
  edit,
  add,
  delete,
}

export enum ButtonSize {
  normal,
  large,
}

export interface IButton {
  label?: string
  type?: ButtonType
  icon?: ReactElement
  size?: ButtonSize
  loading?: boolean
  handleClick?: () => Promise<void>
}

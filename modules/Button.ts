export enum ButtonType {
  submit,
  button,
  edit,
  add,
  delete
}

export enum ButtonSize {
  normal,
  large
}

export interface IButton {
  label?: string
  type?: ButtonType,
  icon?: string
  size?: ButtonSize
  loading?: boolean
  handleClick?: () => Promise<void>
}

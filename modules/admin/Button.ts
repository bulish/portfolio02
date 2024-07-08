import { ButtonType } from '@modules/Button'

export interface IAdminButton {
  tableName?: string
  routeName?: string
  id?: string
  type: ButtonType
  loading?: boolean
}

export interface IEditButton {
  tableName: string
  id: string
}

export interface IDeleteButton {
  tableName: string
  id: string
}

export interface IAddButton {
  tableName: string
}

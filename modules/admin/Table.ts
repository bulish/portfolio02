import { IButton } from '@modules/Button'

export interface IAdminTableConfig {
  tableName: string
  columns: IColumn[]
  buttons: IButton[]
  routeName: string
}

export interface IAdminTableProps<T> {
  data: T[]
  config: IAdminTableConfig
}

export interface IColumn {
  field: string
  header: string
  sortable: boolean
}

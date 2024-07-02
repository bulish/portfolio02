import { IButton } from "@modules/Button"

export interface IAdminTableConfig {
  tableName: string
  thead: string[]
  parameters: string[]
  colgroups: number[]
  buttons: IButton[]
}

export interface IAdminTableProps<T> {
  data: T[];
  config: IAdminTableConfig
}

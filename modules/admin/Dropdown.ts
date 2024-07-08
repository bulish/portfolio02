import { CatTechReq } from "@modules/forms/CatTechForm"

export interface IActionOption {
  label: string
  icon: string
  command: () => void
}

export interface IBulkActionsDropdownProps {
  actions: IActionOption[];
  disabled: boolean
}

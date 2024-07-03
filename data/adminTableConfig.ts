import { ButtonType } from "@modules/Button"
import { IAdminTableConfig } from "@modules/admin/Table"

export const categoriesTableConfig: IAdminTableConfig = {
  tableName: "Category",
  thead: ["Label", "Edit", "Delete"],
  parameters: ["label"],
  colgroups: [40, 10, 10],
  buttons: [
    {
      type: ButtonType.edit,
    },
    {
      type: ButtonType.delete,
    }
  ]
}

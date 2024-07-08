import { ButtonType } from '@modules/Button'
import { IAdminTableConfig } from '@modules/admin/Table'

const catTechTableConfig: Omit<IAdminTableConfig, "tableName" | "routeName"> = {
  columns: [
    {
      header: "Label CS",
      field: "label_cs",
      sortable: true
    },
    {
      header: "Label EN",
      field: "label_en",
      sortable: true
    }
  ],
  buttons: [
    {
      type: ButtonType.edit,
    },
    {
      type: ButtonType.delete,
    },
  ],
}

export const categoriesTableConfig: IAdminTableConfig = {
  tableName: 'Category',
  routeName: 'Categories',
  ...catTechTableConfig
}

export const technologiesTableConfig: IAdminTableConfig = {
  tableName: 'Technology',
  routeName: 'Technologies',
  ...catTechTableConfig
}

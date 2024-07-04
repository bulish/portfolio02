import { ButtonType } from '@modules/Button'
import { IAdminTableConfig } from '@modules/admin/Table'

const catTechTableConfig: Omit<IAdminTableConfig, "tableName"> = {
  thead: ['Label CS', 'Label EN', 'Edit', 'Delete'],
  parameters: ['label_cs', 'label_en'],
  colgroups: [30, 30, 15, 15],
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
  ...catTechTableConfig
}

export const technologiesTableConfig: IAdminTableConfig = {
  tableName: 'Technologies',
  ...catTechTableConfig
}

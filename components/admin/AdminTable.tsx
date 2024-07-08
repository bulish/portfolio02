'use client'

import { ButtonType, IButton } from '@modules/Button'
import { IAdminTableProps, IColumn } from '@modules/admin/Table'
import AdminButton from './Buttons'
import { BulkActionsDropdown } from './BulkActionsDropdown'
import { IActionOption } from '@modules/admin/Dropdown'
import { TriStateCheckbox } from 'primereact/tristatecheckbox'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { handleDelete } from '@utils/common'
import { Column } from 'primereact/column'
import { TreeNode } from 'primereact/treenode'
import { DataTable, DataTableValue } from 'primereact/datatable'

export const transformDataToTableData = <T extends { [key: string]: string | number  }>(data: T[], columns: IColumn[]): DataTableValue[] => {
  return data.map(item => ({
    id: item.id as string,
    key: item.id,
    ...columns.reduce((acc, col) => ({ ...acc, [col.field]: item[col.field] }), {})
  }))
}

const AdminTable = <T extends { [key: string]: string | number }>({
  data,
  config,
}: IAdminTableProps<T>) => {
  const { columns, buttons } = config
  const [selectedItems, setSelectedItems] = useState<DataTableValue[]>([])
  const router = useRouter()

  const handleCheckboxChange = (val: boolean, item: T) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item)
      } else {
        return [...prevSelectedItems, item]
      }
    })
  }

  const handleCommonCheckboxChange = () => {
    if (selectedItems.length === data.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(data)
    }
  }

  const bulkActions: IActionOption[] = [
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: async () => {
        const deletedIds = await handleDelete(
          config.tableName.toLowerCase(),
          selectedItems.map(s => s.id as string),
          () => { router.refresh() }
        )

        if (deletedIds) {
          setSelectedItems(selectedItems.filter(item => !deletedIds.includes(item.id as string)))
        }
      }
    },
  ]

  const isCheckboxActive = (item: T) => {
    return selectedItems.some(selectedItem => selectedItem.id === item.id)
  }

  useEffect(() => {
    if (data.length === 0 && selectedItems.length > 0) {
      setSelectedItems([])
    }
  }, [data, selectedItems])

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <BulkActionsDropdown
          actions={bulkActions}
          disabled={selectedItems.length === 0}
        />
          
        <AdminButton
          type={ButtonType.add}
          tableName={config.routeName}
        />
      </div>

      <DataTable
        value={transformDataToTableData(data, columns)}
        selection={selectedItems}
        onSelectionChange={e => setSelectedItems(e.value)}
        selectionMode="checkbox"
        dataKey="id"
      >
        <Column
          selectionMode="multiple"
          header={<TriStateCheckbox value={selectedItems.length === data.length} onChange={handleCommonCheckboxChange} />}
        />
        {columns.map(col => {
          const { header, field } = col
          return <Column
            key={field}
            field={field}
            header={header}
            sortable
          />
        })}
        {buttons.map((button: IButton, buttonKey: number) => (
          <Column
            key={buttonKey}
            body={rowData => (
              <AdminButton
                type={button.type as ButtonType}
                tableName={config.tableName}
                routeName={config.routeName}
                id={rowData.id as string}
              />
            )}
          />
        ))}
      </DataTable>

    </div>
  )
}

export default AdminTable

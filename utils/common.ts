import { toast } from 'sonner'
import { confirmDialog } from 'primereact/confirmdialog'

export async function handleDelete(tableName: string, ids: string[], refresh: () => void): Promise<string[] | null> {
  return new Promise((resolve) => {
    const accept = async () => {
      try {
        const response = await fetch(`/api/${tableName}/delete`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ids),
        })

        const result = await response.json()

        if (result.message) {
          toast.success(result.message)
          refresh()
          resolve(ids)
        } else if (result.error) {
          toast.error(result.error)
          resolve(null)
        }
      } catch (e) {
        toast.error(`An error occurred while deleting the ${ids.length === 1 ? 'item' : 'items'}.`)
        resolve(null)
      }
    }

    const rejectAction = () => {
      resolve(null)
    }

    confirmDialog({
      message: `Do you want to delete ${ids.length === 1 ? 'this record' : `these records (${ids.length})`}?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'p-button-danger',
      accept,
      reject: rejectAction,
    })
  })
}

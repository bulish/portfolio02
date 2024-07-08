'use client'

import { FC } from 'react'
import Button from '@components/shared/Button'
import { ButtonSize, ButtonType } from '@modules/Button'
import Link from 'next/link'
import { FaPlusCircle, FaEdit, FaTrash } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { IAdminButton } from '@modules/admin/Button'
import { handleDelete } from '@utils/common'

const AdminButton: FC<IAdminButton> = ({ tableName, id, type, loading, routeName }) => {
  const router = useRouter()

  async function handleDeleteHelper() {
    await handleDelete(
      tableName?.toLowerCase() as string,
      [id as string],
      () => { router.refresh() }
    )
  }
  
  switch (type) {
    case ButtonType.edit:
      return (
        <Link
          className="button flex items-center gap-3 w-max font-medium"
          href={`/admin/${routeName?.toLowerCase()}/${id}`}
        >
          <FaEdit />
          Edit
        </Link>
      )

    case ButtonType.add:
      return (
        <Link
          className="button flex items-center gap-3 w-max h-max"
          href={`/admin/${routeName?.toLowerCase()}/new`}
        >
          <FaPlusCircle />
          Add
        </Link>
      )

    case ButtonType.delete:
      return (
        <Button
          label="Delete"
          size={ButtonSize.normal}
          handleClick={handleDeleteHelper}
          icon={<FaTrash />}
        />
      )

    case ButtonType.submit:
      return (
        <Button
          type={type}
          label="Save"
          size={ButtonSize.normal}
          loading={loading}
        />
      )

    default:
      return <Button label="Button" />
  }
}

export default AdminButton

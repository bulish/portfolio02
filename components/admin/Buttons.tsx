"use client"

import { FC } from "react"
import Button from "@components/shared/Button"
import { ButtonSize, ButtonType } from "@modules/Button"
import Link from "next/link"
import { FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { IAdminButton } from "@modules/admin/Button"

const AdminButton: FC<IAdminButton> = ({ tableName, id, type, loading }) => {
  const router = useRouter()

  async function handleDelete() {
    try {
      const response = await fetch(`/api/${tableName?.toLowerCase()}/${id}`, {
        method: "DELETE"
      })

      const result = await response.json()

      if (result.mess) toast.success(result.mess)
      else if (result.error) toast.error(result.error)

      router.refresh()
    } catch(e) {
      toast.error(e as string)
    }
  }

  switch (type) {
    case ButtonType.edit:
      return <Link
      className="button flex items-center gap-3 w-max font-medium"
      href={`/admin/${tableName?.toLowerCase()}/${id}`}
    >
      <FaEdit />
      Edit
    </Link>

    case ButtonType.add:
      return (
        <Link
          className="button flex items-center gap-3 w-max"
          href={`/admin/${tableName?.toLowerCase()}/new`}
        >
          <FaPlusCircle />
          Add
        </Link>
      )

    case ButtonType.delete:
      return <Button
        label="Delete"
        size={ButtonSize.normal}
        handleClick={handleDelete}
        icon={<FaTrash />} />

    case ButtonType.submit:
      return <Button
        type={type}
        label="Save"
        size={ButtonSize.normal}
        loading={loading}
       />

    default:
      return <Button label="Button" />
  }
}

export default AdminButton

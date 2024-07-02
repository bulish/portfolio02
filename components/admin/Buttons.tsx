"use client"

import { FC } from "react";
import Button from "@components/shared/Button";
import { ButtonSize, ButtonType } from "@modules/Button";
import Link from "next/link";
import { FaPlusCircle, FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

export interface IButton {
  label?: string;
  type?: ButtonType;
  icon?: string;
}

export interface IAdminButton {
  tableName?: string;
  id?: string;
  type: ButtonType;
  loading?: boolean
}

export interface IEditButton {
  tableName: string;
  id: string;
}

export interface IDeleteButton {
  tableName: string;
  id: string;
}

export interface IAddButton {
  tableName: string;
}

const AdminButton: FC<IAdminButton> = ({ tableName, id, type, loading }) => {
  const router = useRouter()

  async function handleDelete() {
    try {
      await fetch(`/api/${tableName?.toLowerCase()}/${id}`, {
        method: "DELETE"
      })
      router.refresh()
    } catch(e) {
      console.error(e)
    }
  }

  switch (type) {
    case ButtonType.edit:
      return <Link
      className="button flex items-center gap-3"
      href={`/admin/${tableName?.toLowerCase()}/${id}`}
    >
      <FaEdit />
      Edit
    </Link>;

    case ButtonType.add:
      return (
        <Link
          className="button flex items-center gap-3"
          href={`/admin/${tableName?.toLowerCase()}/new`}
        >
          <FaPlusCircle />
          Add
        </Link>
      );

    case ButtonType.delete:
      return <Button
        label="Delete"
        size={ButtonSize.normal}
        handleClick={handleDelete} />;

    case ButtonType.submit:
      return <Button
        type={type}
        label="Save"
        size={ButtonSize.normal}
        loading={loading}
       />;

    default:
      return <Button label="Button" />;
  }
};

export default AdminButton;

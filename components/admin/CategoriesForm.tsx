"use client"

import { FC, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Form } from "@components/forms/Form"
import { ICategoryOption } from "@modules/CategoryOption"
import { categoryInputs } from "@modules/forms/CategoryForm"
import AdminButton from "./Buttons"
import { ButtonType } from "@modules/Button"
import * as API_ROUTES from "@constants/apiRoutes"
import * as ROUTES from "@constants/routes"
import { useRouter } from "next/navigation"
import { Status } from "@modules/admin/Status"
import { ICategoryFormProps } from "@modules/admin/Category"
import { toast } from "sonner"

const CategoryForm: FC<ICategoryFormProps> = (props: ICategoryFormProps) => {
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false)
  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<ICategoryOption>()

  useEffect(() => {
    if (props.data) {
      (Object.keys(props.data) as (keyof ICategoryOption)[]).forEach((key) => {
        if (props.data) setValue(key, props.data[key])
      })
    }
  }, [props.data, setValue])

  const onSubmit = async (data: ICategoryOption) => {
    setLoadingBtn(true)
    const route = props.status === Status.NEW ? API_ROUTES.ADD_CATEGORY : API_ROUTES.EDIT_CATEGORY

    try {
      const response = await fetch(route, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)}
    )

    const result = await response.json()
    if (result.mess) toast.success(result.mess)
    else if (result.error) toast.error(result.error)

    router.push(ROUTES.ADMIN_CATEGORIES)
    } catch(error) {
      toast.error(error as string)
    } finally {
      setLoadingBtn(false)
    }
  }

  return (
    <form
      className="basic-form basic-form--full-width"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form
        data={categoryInputs}
        errors={errors}
        register={register}
      />

      <div className="flex justify-end">
        <AdminButton
          type={ButtonType.submit}
          loading={loadingBtn}
        />
      </div>
    </form>
  )
}

export default CategoryForm

'use client'

import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@components/forms/Form'
import AdminButton from './Buttons'
import { ButtonType } from '@modules/Button'
import { useRouter } from 'next/navigation'
import { ICatTechFormProps } from '@modules/admin/Category'
import { toast } from 'sonner'
import { CatTechReq, catTechInputs } from '@modules/forms/CatTechForm'

const CatTechForm: FC<ICatTechFormProps> = (props: ICatTechFormProps) => {
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false)
  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<CatTechReq>()

  useEffect(() => {
    if (props.activeData) {
      (Object.keys(props.activeData) as (keyof CatTechReq)[]).forEach(key => {
        if (props.activeData) setValue(key, props.activeData[key])
      })
    }
  }, [props.activeData, setValue])

  const onSubmit = async (data: CatTechReq) => {
    if (props.allData.map(c => c.label_cs.toUpperCase()).includes(data.label_cs.toUpperCase())) {
      toast.error(`The ${props.tableName.toLowerCase()} with czech label "${data.label_cs}" already exists`)
      return
    }

    if (props.allData.map(c => c.label_en.toUpperCase()).includes(data.label_en.toUpperCase())) {
      toast.error(`The ${props.tableName.toLowerCase()} with english label "${data.label_en}" already exists`)
      return
    }

    setLoadingBtn(true)
    const route = props.apiRoute

    try {
      const response = await fetch(route, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      router.refresh()

      const result = await response.json()
      if (result.mess) toast.success(result.mess)
      else if (result.error) toast.error(result.error)
      
      setTimeout(() => {
        router.push(props.redirectRoute)
      }, 1000)

    } catch (error) {
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
      <Form data={catTechInputs} errors={errors} register={register} />

      <div className="flex justify-end">
        <AdminButton type={ButtonType.submit} loading={loadingBtn} />
      </div>
    </form>
  )
}

export default CatTechForm

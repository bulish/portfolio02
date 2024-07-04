'use client'

import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IProject } from '@modules/Project'
import { Form } from '@components/forms/Form'
import { projectInputs } from '@modules/forms/ProjectForm'
import { ISelect } from '@modules/forms/Inputs'
import { ISelectOption } from '@modules/SelectOption'

export interface IProjectsFormProps {
  categories: ISelectOption[]
}

const ProjectsForm: FC<IProjectsFormProps> = (props: IProjectsFormProps) => {
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false)
  const [inputs, setInputs] = useState(projectInputs)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IProject>()

  const onSubmit = (data: IProject) => {
    setLoadingBtn(true)
  }

  useEffect(() => {
    setInputs(prevInputs =>
      prevInputs.map(input => {
        if (input.id === 'categoryId') {
          return {
            ...input,
            options: props.categories,
          } as ISelect<IProject>
        }
        return input
      }))
  }, [props.categories])

  return (
    <form
      className="basic-form basic-form--full-width"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form data={inputs} errors={errors} register={register} />
    </form>
  )
}

export default ProjectsForm

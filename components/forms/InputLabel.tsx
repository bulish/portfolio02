import { IInputLabelProps } from "@modules/forms/InputLabel"
import { FC } from "react"
import { IoFlagOutline } from "react-icons/io5"

export const InputLabel: FC<IInputLabelProps> = (props: IInputLabelProps) => {
  return (
    <label htmlFor={props.id}
    className='flex gap-2'>
    {props.placeholder}
    {props.isLocalized ? <IoFlagOutline /> : null}
  </label>
  )
}

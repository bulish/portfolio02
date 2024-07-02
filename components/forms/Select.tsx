"use client"

import { ICategoryOption } from "@modules/CategoryOption"
import { ISelect, IOption } from "@modules/forms/Inputs"
import { act, useEffect, useState } from "react"
import { FieldValues, Path } from "react-hook-form"

export const Select: <T extends FieldValues>(
  props: ISelect<T>
) => JSX.Element = <T extends FieldValues>({
  placeholder,
  id,
  required,
  register,
  errors,
  options,
  noPaddingOnMobile,
  readOnly,
}: ISelect<T>) => {

  const error = errors[id]

  return (
    <div className={`${noPaddingOnMobile ? "md:" : ""}mb-4 form__input`}>
      <label htmlFor={id}>{placeholder}</label>
      <select
        disabled={readOnly}
        id={id}
        {...register(id as Path<T>, {
          required,
        })}
      >
        {options && options.map((item: IOption) => {
            const { value, label } = item
            return (
              <option key={value} value={value}>
                {label}
              </option>
            )
          })}
      </select>
      {/* error message */}
      {error && error.type === "required" && (
        <p className="h-6 text-left error">{error.message}</p>
      )}
    </div>
  )
}
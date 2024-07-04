import { FieldValues } from 'react-hook-form'
import { IGeneralInput } from '@modules/forms/Inputs'

export const isInputVisible = <T extends FieldValues>(input: IGeneralInput<T>, activeLanguage: string): boolean => {
  return !input.isLocalized || (input.isLocalized && input.id.endsWith(`_${activeLanguage.toLowerCase()}`))
}

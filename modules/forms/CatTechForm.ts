import { IProject } from '@modules/Project'
import { IGeneralInput, InputType } from './Inputs'

export const catTechInputs: IGeneralInput<IProject>[] = [
  {
    placeholder: 'Label CS',
    id: 'label_cs',
    required: 'Label is required',
    type: InputType.TEXT,
    isLocalized: true
  },
  {
    placeholder: 'Label EN',
    id: 'label_en',
    required: 'Label is required',
    type: InputType.TEXT,
    isLocalized: true
  },
]

export interface CatTechReq {
  label_cs: string
  label_en: string
  value: string
  id: string
}

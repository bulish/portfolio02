import { IProject } from '@modules/Project'
import { IGeneralInput, InputType } from './Inputs'

export const categoryInputs: IGeneralInput<IProject>[] = [
  {
    placeholder: 'Label',
    id: 'label',
    required: 'Label is required',
    type: InputType.TEXT,
  },
]

import { ICategoryOption } from '@modules/CategoryOption'
import { Status } from './Status'

export interface ICategoryFormProps {
  categories: ICategoryOption[]
  status: Status
  data?: ICategoryOption | null
}

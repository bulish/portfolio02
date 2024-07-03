import { Dispatch, SetStateAction } from 'react'
import { ICategoryOption } from './CategoryOption'

export interface AppProviderInterface {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  categories: ICategoryOption[]
  setCategories: Dispatch<SetStateAction<ICategoryOption[]>>
}

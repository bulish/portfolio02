import { Dispatch, SetStateAction } from 'react'

export interface AppProviderInterface {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  activeLanguage: string
  setActiveLanguage: Dispatch<SetStateAction<string>>
}

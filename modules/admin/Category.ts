import { CatTechReq } from '@modules/forms/CatTechForm'

export interface ICatTechFormProps {
  allData: CatTechReq[]
  activeData?: CatTechReq | null
  tableName: string
  apiRoute: string
  redirectRoute: string
}

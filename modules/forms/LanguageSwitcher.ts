import { ISelectOption } from "@modules/SelectOption"
import { Dispatch, SetStateAction } from "react"

export interface IOptionIcon extends Omit<ISelectOption, "id"> {
  icon: string
}

export enum Languages {
  CS = "CS",
  EN = "EN"
}

export interface ILanguageSwitcherProps {
  activeLanguage: string
  setActiveLanguage: Dispatch<SetStateAction<string>>
  errors: any
}

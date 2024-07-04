import { IOptionIcon, Languages } from "@modules/forms/LanguageSwitcher"

import cs_flag from "../public/images/icons/flags/cs.png"
import en_flag from "../public/images/icons/flags/en.png"

export const languageOptions: IOptionIcon[] = [
  { 
    label: 'Czech',
    value: Languages.CS.toString(),
    icon: cs_flag.src
  },
  { 
    label: 'English',
    value: Languages.EN.toString(),
    icon: en_flag.src
  },
]

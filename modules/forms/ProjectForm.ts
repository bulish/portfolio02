import { IProject } from '@modules/Project'
import { IGeneralInput, InputType } from './Inputs'

export const projectInputs: IGeneralInput<IProject>[] = [
  {
    placeholder: 'Title',
    id: 'title_cs',
    required: 'Title is required',
    type: InputType.TEXT,
    isLocalized: true
  },
  {
    placeholder: 'Title',
    id: 'title_en',
    required: 'Title is required',
    type: InputType.TEXT,
    isLocalized: true
  },
  {
    placeholder: 'Description',
    id: 'description_cs',
    required: 'Popis projektu je povinný',
    type: InputType.TEXTAREA,
    isLocalized: true
  },
  {
    placeholder: 'Description',
    id: 'description_en',
    required: 'Popis projektu je povinný',
    type: InputType.TEXTAREA,
    isLocalized: true
  },
  {
    placeholder: 'Kategorie',
    id: 'categoryId',
    required: 'Kategorie je povinná',
    type: InputType.SELECT,
    options: [],
    isLocalized: false
  },
  {
    placeholder: 'Technologie',
    id: 'technologies',
    required: 'Technologie jsou povinné',
    type: InputType.TEXT,
    isLocalized: false
  },
  {
    placeholder: 'Obrázky',
    id: 'images',
    required: 'Obrázky jsou povinné',
    type: InputType.TEXT,
    isLocalized: false
  },
]

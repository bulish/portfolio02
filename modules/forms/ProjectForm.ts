import { IProject } from "@modules/Project";
import { IGeneralInput, InputType } from "./Inputs";

export const projectInputs: IGeneralInput<IProject>[] = [
  {
    placeholder: "Název projektu",
    id: "title",
    required: "Název projektu je povinný",
    type: InputType.TEXT,
  },
  {
    placeholder: "Popis projektu",
    id: "description",
    required: "Popis projektu je povinný",
    type: InputType.TEXTAREA,
  },
  {
    placeholder: "Kategorie",
    id: "categoryId",
    required: "Kategorie je povinná",
    type: InputType.SELECT,
    options: [],
  },
  {
    placeholder: "Publikovaný",
    id: "published",
    options: [
      { value: "true", label: "YES" },
      { value: "false", label: "NO" },
    ],
    type: InputType.RADIO,
  },
  {
    placeholder: "Technologie",
    id: "technologies",
    required: "Technologie jsou povinné",
    type: InputType.TEXT,
  },
  {
    placeholder: "Obrázky",
    id: "images",
    required: "Obrázky jsou povinné",
    type: InputType.TEXT,
  },
];

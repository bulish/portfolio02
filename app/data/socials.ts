import linkedin from "../../public/images/icons/linkedin.svg"
import github from "../../public/images/icons/github.svg"
import gmail from "../../public/images/icons/gmail.svg"
import { ISocial } from "@modules/Socials"

export const socialsData: ISocial[] = [
    {
        icon: linkedin.src,
        link: "https://cz.linkedin.com/in/libuse-babickova",
        alt: "LinkedIn"
    },
    {
        icon: github.src,
        link: "https://github.com/bulish",
        alt: "Github"
    },
    {
        icon: gmail.src,
        link: "mailto:babickovalibuse@gmail.com",
        alt: "Gmail"
    }
]

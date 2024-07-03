import { INavLink } from '@modules/NavLink'
import * as ROUTES from '@constants/routes'

export const headerData: INavLink[] = [
  {
    text: 'Home',
    route: ROUTES.HOME,
  },
  {
    text: 'About',
    route: ROUTES.ABOUT,
  },
  {
    text: 'Projects',
    route: ROUTES.PROJECTS,
  },
  {
    text: 'Experience',
    route: ROUTES.EXPERIENCE,
  },
]

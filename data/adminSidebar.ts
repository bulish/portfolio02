import { INavLink } from "@modules/NavLink";
import * as ROUTES from "@constants/routes"

export const adminSidebarData: INavLink[] = [
  {
    text: "Projects",
    route: ROUTES.ADMIN_PROJECTS
  },
  {
    text: "Categories",
    route: ROUTES.ADMIN_CATEGORIES
  },
  {
    text: "Technologies",
    route: ROUTES.ADMIN_TECHNOLOGIES
  },
  {
    text: "Log out",
    route: ROUTES.LOGOUT
  }
]

import PageHome from "../page/home/home";
import PageLogin from "../page/login/login";
import PageProfile from "../page/profile/profile";
import PageRegister from "../page/register/register";
import PageSchemeEdit from "../page/scheme/scheme-edit";
import PageSchemeList from "../page/scheme/scheme-list";
import * as Api from "./api";

export const routes = [
  {
    path: "/",
    component: PageHome,
    exact: true
  },
  {
    path: "/register",
    component: PageRegister,
    exact: true
  },
  {
    path: "/login",
    component: PageLogin,
    exact: true
  },
  {
    path: "/scheme/add",
    component: PageSchemeEdit,
    exact: true,
    protected: true
  },
  {
    path: "/scheme/list",
    component: PageSchemeList,
    exact: true,
    protected: true
  },
  {
    path: "/scheme/:id/edit",
    component: PageSchemeEdit,
    exact: true,
    protected: true,
    resolve: Api.getSchemeById
  },
  {
    path: "/login",
    component: PageLogin,
    exact: true
  },
  {
    path: "/profile",
    component: PageProfile,
    exact: true,
    protected: true
  }
];

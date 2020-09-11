import User from "./User";
import { authRoutes } from "auth";

export const UserConfig = {
  settings: {
    layout: "Admin",
    showSideBar: true,
  },
  auth: authRoutes.user,
  routes: [
    {
      path: "/user",
      component: User,
    },
  ],
};

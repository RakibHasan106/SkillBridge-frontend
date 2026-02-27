
import { Route } from './../types/routes.type';


export const adminRoutes: Route[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Analytics",
        url: "/analytics",
      },
      {
        title: "users",
        url: "/users",
      },
      {
        title: "reviews",
        url: "/reviews"
      },
      {
       title: "tutor profiles",
       url: "/tutor-profiles" 
      }
    ],
  },
];
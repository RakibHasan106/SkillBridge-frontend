
import { Route } from './../types/routes.type';


export const adminRoutes: Route[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Analytics",
        url: "/dashboard/analytics",
      },
      {
        title: "users",
        url: "/dashboard/users",
      },
      {
        title: "reviews",
        url: "/dashboard/reviews"
      },
      {
       title: "tutor profiles",
       url: "/dashboard/tutor-profiles" 
      }
    ],
  },
];

import { Route } from './../types/routes.type';


export const studentRoutes: Route[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Manage Profile",
        url: "/dashboard/profile",
      },
      {
        title: "bookings",
        url: "/dashboard/bookings"
      },
      {
        title: "reviews",
        url: "/dashboard/review"
      }
    ],
  },
];
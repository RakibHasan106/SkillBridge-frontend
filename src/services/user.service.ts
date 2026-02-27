import { cookies } from "next/headers";
import { redirect } from 'next/navigation';

const AUTH_URL = process.env.AUTH_URL;

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();

      const cookieHeader = cookieStore.getAll()
        .map(c => `${c.name}=${c.value}`)
        .join("; ");

      if (!cookieHeader) {
        return { data: null, error: { message: "No cookies found." } };
      }

      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieHeader,
        },
        credentials: "include",
        cache: "no-store",
      });

      const session = await res.json();

      if (session === null) {
        return { data: null, error: { message: "Session is missing." } };
      }

      return { data: session, error: null };
    } catch (err) {
      console.error(err);
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};

// export const redirectionFromLoginandSignup = {
  
//   getSession: async function () {
//     try {
//       const cookieStore = await cookies();

//       const cookieHeader = cookieStore.getAll()
//         .map(c => `${c.name}=${c.value}`)
//         .join("; ");

//       if (!cookieHeader) {
//         return;
//       }

//       const res = await fetch(`${AUTH_URL}/get-session`, {
//         headers: {
//           Cookie: cookieHeader,
//         },
//         cache: "no-store",
//       });

//       const session = await res.json();

//       if (session === null) {
//         return;
//       }

//       redirect("/");
//     } catch (err) {
//       console.error(err);
//       return { data: null, error: { message: "Something Went Wrong" } };
//     }
//   },
// }
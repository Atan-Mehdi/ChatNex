//[[...sign-in]] ---> This is the special convention folder inside of it so it has all the neccessary routes for clerk.

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn />;
}
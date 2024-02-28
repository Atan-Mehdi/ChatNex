import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  // "/" means the landing page is now unprotected meaning that both logged in and logged  out users can visit it.
  publicRoutes: ["/", "/api/webhook"],

  // ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)", "/dashboard"],

});

export const config = {

  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["ar", "en"],

  // Used when no locale matches
  defaultLocale: "ar",
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(ar|en)/:path*"],
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // If the request is already locale-specific, do nothing
//   if (["/ar", "/en"].some((locale) => pathname.startsWith(locale))) {
//     return NextResponse.next();
//   }

//   // Force redirect to Arabic locale
//   return NextResponse.redirect(new URL(`/ar${pathname}`, request.url));
// }

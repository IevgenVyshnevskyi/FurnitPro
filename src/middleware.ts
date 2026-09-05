import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … Next.js metadata file-convention routes (icon/apple-icon/opengraph-image
  //   must be reachable without a locale prefix — they have no dot in the URL,
  //   so they wouldn't otherwise fall under the exception below)
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|icon|apple-icon|opengraph-image|twitter-image|.*\\..*).*)",
};

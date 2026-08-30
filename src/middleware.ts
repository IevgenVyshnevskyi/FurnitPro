import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … Next.js metadata file-convention routes (icon/apple-icon/opengraph-image
  //   мають бути доступні без префікса локалі — вони не мають крапки в URL,
  //   тож інакше не потрапили б під виняток нижче)
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|icon|apple-icon|opengraph-image|twitter-image|.*\\..*).*)",
};

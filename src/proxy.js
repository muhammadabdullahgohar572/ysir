import { NextResponse } from "next/server";

export function proxy(request) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const jwt = request.cookies.get("AuthToken")?.value;

  const pathname =
    request.nextUrl.pathname == "/Page/Login" ||
    request.nextUrl.pathname == "/Page/Signup";

  if (!jwt && !pathname) {
    return NextResponse.redirect(new URL("/Page/Login", request.url));
  }

  if (jwt && pathname) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/Page/PatchOrderForm", "/Page/OrderDetails"],
};

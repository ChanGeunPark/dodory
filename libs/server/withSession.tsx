import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const cookieOptions = {
  cookieName: "dodorysession",
  password: process.env.COOKIE_PASSWORD!,
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}

export function withSsrSession(handler: any) {
  return withIronSessionSsr(handler, cookieOptions);
}

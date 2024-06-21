import {defineMiddleware, sequence} from "astro/middleware";
import type {APIContext, MiddlewareNext} from "astro";


export const cookieChecking = defineMiddleware( (context: APIContext, next: MiddlewareNext) => {
  const whitelist = ['/login', '/register', '/forgot-password', '/reset-password']
  let cookies = context.cookies

  console.log(context.url.pathname)
  if (cookies.get('token') || whitelist.includes(context.url.pathname)) {
    return next();
  }

  context.redirect('/login');
  return next();
});


export const onRequest = sequence(cookieChecking);
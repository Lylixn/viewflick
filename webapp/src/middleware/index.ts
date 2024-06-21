import {defineMiddleware, sequence} from "astro/middleware";
import type {APIContext, MiddlewareNext} from "astro";


export const cookieChecking = defineMiddleware( (context: APIContext, next: MiddlewareNext) => {
  let cookies = context.cookies

  if (cookies.get('token')) {
    console.log('token found')
    return next();
  }

  console.log('redirecting to login')
  context.redirect('/login', 302)
  return next();
});


export const onRequest = sequence(cookieChecking);
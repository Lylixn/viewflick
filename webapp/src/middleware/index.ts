import {defineMiddleware, sequence} from "astro/middleware";
import type {APIContext, MiddlewareNext} from "astro";


export const cookieChecking = defineMiddleware( (context: APIContext, next: MiddlewareNext) => {
  let cookies = context.cookies

  if (cookies.get('token')) {
    console.log('token found')
    return next();
  }

  return Response.redirect(new URL('/login', context.request.url).toString(), 301);
});


export const onRequest = sequence(cookieChecking);
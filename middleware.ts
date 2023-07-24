import { authMiddleware } from '@clerk/nextjs'

// Docs: https://clerk.com/docs/nextjs/middleware
export default authMiddleware({
  publicRoutes: ['/'],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}

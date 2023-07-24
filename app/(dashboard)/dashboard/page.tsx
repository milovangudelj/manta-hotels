import { currentUser, UserButton } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import { SignOutButton } from '~/components/SignOutButton'

export default async function Home() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div>
      <p>Hi, {user.firstName}!</p>
      <SignOutButton />
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

import { auth, currentUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { SignOutButton } from '~/components/SignOutButton'

export default async function Home() {
  return (
    <div>
      <p>Public page</p>
      <Link href={'/dashboard'}>Go to dashboard</Link>
    </div>
  )
}

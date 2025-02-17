import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import React from 'react'

const DashboardPage = async () => {
    const session = await auth();

    if (!session) {
        return redirect("/");
    }

  return (
    <div>Dashboard page</div>
  )
}

export default DashboardPage

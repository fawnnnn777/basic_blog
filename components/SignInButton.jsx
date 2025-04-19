
"use client"

import { signIn } from "next-auth/react"
 
export default function SignIn() {
  return <button className="border border-white/30 p-2 rounded-3xl" onClick={() => signIn("google")}>Sign In</button>
}

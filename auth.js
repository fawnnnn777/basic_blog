import NextAuth from "next-auth"
import NeonAdapter from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless"
import Google from 'next-auth/providers/google'
 
 
export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  return {
    adapter: NeonAdapter(pool),
    providers: [Google],
    callbacks:{
        async session({session, user}){
            session.user.userId = user.id
            return session
        }
    }
  }
})
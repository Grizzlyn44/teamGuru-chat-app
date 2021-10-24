import NextAuth, {Session as NextAuthSession, User} from "next-auth"

const user: User = {
    
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    expires: string,
    user: {
        email: string,
        image: string,
        isNewUser: boolean,
        name: string,
    }
  }
}
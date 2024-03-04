


import users from '../../../data/users';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", placeholder: 'Email' },
                password: { label: "Password", placeholder: 'Password' }
            },
            async authorize(credentials) {
                const user = users.find(u => u.email === credentials.email);
                if (user && user.password === credentials.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token

        },

        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            return session
        },

    },
    pages: {
        signIn: '/',
    },


    secret: process.env.NEXTAUTH_SECRET
};

export default (req, res) => NextAuth(req, res, authOptions);

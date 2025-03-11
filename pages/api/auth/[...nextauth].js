import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch("https://your-backend.com/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const user = await res.json();

          if (!res.ok || !user) {
            throw new Error("Geçersiz giriş bilgileri!");
          }

          // API'nin döndüğü token varsa, onu kullanıcıya ekle
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: user.token, // API'den gelen token
          };
        } catch (error) {
          throw new Error(error.message || "Giriş başarısız!");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.token = user.token; // JWT'yi sakla
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.token = token.token; // Session içine token ekle
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", // Eğer özel bir giriş sayfan varsa buraya yönlendir
  },
  secret: process.env.NEXTAUTH_SECRET, // Çevre değişkenlerinde tanımlı olmalı
});

import type { ReactNode } from 'react';

export const metadata = {
  title: "Sign Up for Electroplix - Create Your Account",
  description: "Join Electroplix today! Sign up to create an account and unlock a world of opportunities. Start your journey with us.",
  keywords: "Electroplix, signup, create account, join Electroplix, user registration",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99/" 
  },
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}

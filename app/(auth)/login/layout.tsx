import type { ReactNode } from 'react';

export const metadata = {
  title: "Log In to Electroplix - Access Your Account",
  description: "Welcome back to Electroplix! Log in to your account to continue enjoying our services. Secure your access today.",
  keywords: "Electroplix, login, access account, user authentication",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99/" 
  },
};

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}

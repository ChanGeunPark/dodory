import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import useUser from "@libs/client/useUser";
import React from "react";
import { User } from "@prisma/client";

interface LayoutProps {
  topAbsolute?: boolean;
  useFooter?: boolean;
  children: React.ReactNode;
}

export default function Layout({ children, useFooter = true }: LayoutProps) {
  const { user } = useUser();
  return (
    <>
      <Navbar user={user} />
      <div>{children}</div>

      {useFooter ? <Footer /> : null}
    </>
  );
}

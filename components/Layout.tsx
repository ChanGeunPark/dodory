import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import useUser from "@libs/client/useUser";
import React, { useContext, useRef } from "react";
import { User } from "@prisma/client";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

interface LayoutProps {
  topAbsolute?: boolean;
  useFooter?: boolean;
  children: React.ReactNode;
}

export default function Layout({ children, useFooter = true }: LayoutProps) {
  const { user } = useUser();
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Navbar user={user} />
        <div>{children}</div>

        {useFooter ? <Footer /> : null}
      </div>
    </LocomotiveScrollProvider>
  );
}

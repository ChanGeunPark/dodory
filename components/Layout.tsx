import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import useUser from "@libs/client/useUser";
import React, { useContext, useRef } from "react";
import { User } from "@prisma/client";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRouter } from "next/router";
import Image from "next/image";

interface LayoutProps {
  topAbsolute?: boolean;
  useFooter?: boolean;
  children: React.ReactNode;
}

export default function Layout({ children, useFooter = true }: LayoutProps) {
  const { user } = useUser();
  const containerRef = useRef(null);
  const router = useRouter();
  return (
    <div ref={containerRef}>
      <Navbar user={user} />
      {router.pathname !== "/" ? (
        <div className="w-full h-[350px] bg-black overflow-hidden">
          <img
            src="/index/subBannerBg.jpg"
            alt="subBanner"
            className="w-full h-full object-cover opacity-70"
          />
          {/* <Image
          src={"/index/subBannerBg.jpg"}
          layout="fill"
          className="object-cover"
        /> */}
        </div>
      ) : null}

      <div>{children}</div>

      {useFooter ? <Footer /> : null}
    </div>
  );
}

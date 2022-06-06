import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { cls } from "@libs/client/utils";
import { User } from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import useSWR, { useSWRConfig } from "swr";
import Image from "next/image";
import CustomCursorContext from "./CustomCursor/context/CustomCursorContext";

interface UserSesstion {
  user?: User;
}
//deploytest
export default function Navbar(session?: UserSesstion) {
  const { setType } = useContext(CustomCursorContext);
  const router = useRouter();
  const [logoutSession] = useMutation("/api/users/logout");

  const logout = async () => {
    await logoutSession({}); //세션에 빈배열을 전송하여 세션을 초기화시킬거다
    router.reload();
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={cls("px-4 bg-transparent absolute top-0 left-0 w-full z-50")}
    >
      <header className="mx-auto container flex justify-between items-center h-20">
        <div className="flex items-center">
          <h1 className={cls("text-3xl font-bold text-white")}>
            <Link href="/">
              <a> dodo:&#41;ry</a>
            </Link>
          </h1>
        </div>
        <nav className="hidden sm:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex space-x-8 font-medium">
            <li className={cls("text-white")}>
              <Link href="/items">
                <a
                  onMouseOver={() => setType("link")}
                  onMouseOut={() => setType("default")}
                >
                  다육이
                </a>
              </Link>
            </li>
            <li className={cls("text-white")}>이벤트</li>
            <li className={cls("text-white")}>소품샵</li>
            <li className={cls("text-white")}>고객센터</li>
          </ul>
        </nav>
        <div className={cls("flex space-x-3 items-center")}>
          {session?.user ? (
            <>
              {session?.user.avatar ? (
                <span className="w-12 h-12 bg-zinc-100 rounded-full relative overflow-hidden">
                  <Image
                    layout="fill"
                    src={`https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/${session?.user.avatar}/avatar`}
                    className="object-cover"
                  />
                </span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 stroke-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
              <details className="focus:border cursor-pointer relative group">
                <summary className="block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 stroke-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="absolute top-12 opacity-0 right-0 bg-white rounded-lg w-[200px] p-1 shadow-lg transition-all group-open:opacity-100 -translate-y-5 group-open:translate-y-0 ease-in-out duration-500">
                  <Link href="/profile">
                    <a
                      className={cls(
                        "flex items-center text-zinc-600 w-full justify-center text-center py-3 rounded-lg transition-all hover:bg-red-400 hover:text-white hover:stroke-white -translate-y-2 group-open:translate-y-0 ease-in-out duration-300"
                      )}
                    >
                      MY SHOP
                    </a>
                  </Link>
                  <button
                    onClick={logout}
                    type="button"
                    className={cls(
                      "text-zinc-600 w-full text-center py-3 rounded-lg transition-all hover:bg-red-400 hover:text-white -translate-y-2 group-open:translate-y-0 ease-in-out duration-300"
                    )}
                  >
                    로그아웃
                  </button>
                </div>
              </details>
            </>
          ) : (
            <>
              <Link href="/login">
                <a className={cls("text-white")}>로그인</a>
              </Link>
              <Link href="/join">
                <a className={cls("text-white")}>회원가입</a>
              </Link>
            </>
          )}
        </div>
        <div className="flex-row space-x-2 hidden">
          {/*로그인 했을때 보여주기*/}
          <svg
            className={cls("w-7 h-7 stroke-zinc-90")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>

          <svg
            className={cls("w-7 h-7 stroke-zinc-900")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </div>
      </header>
    </div>
  );
}

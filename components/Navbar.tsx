import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { cls } from "@libs/client/utils";
import { User } from "@prisma/client";

interface UserSesstion {
  user: User;
}

export default function Navbar(user?: UserSesstion) {
  console.log(user?.user);
  const router = useRouter();
  const [ScrollY, setScrollY] = useState(0);
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };

  // useEffect(() => {
  //   console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  // }, [ScrollY])

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
    };
  });

  return (
    <div
      className={cls(
        "dodory-top bg-white px-4 border-b border-zinc-100 sticky top-0 z-50",
        ScrollY > 1 ? "shadow-md" : ""
      )}
    >
      <header className="mx-auto container flex justify-between items-center h-20">
        <div className="flex items-center">
          <h1 className={cls("text-3xl font-bold text-zinc-900")}>
            <Link href="/">
              <a> dodo:&#41;re</a>
            </Link>
          </h1>
          <nav className="ml-14 hidden sm:flex">
            <ul className="flex space-x-8 font-medium">
              <li className={cls("text-zinc-900")}>
                {" "}
                <Link href="/items">
                  <a>다육이</a>
                </Link>
              </li>
              <li className={cls("text-zinc-900")}>이벤트</li>
              <li className={cls("text-zinc-900")}>소품샵</li>
              <li className={cls("text-zinc-900")}>고객센터</li>
            </ul>
          </nav>
        </div>
        <div
          className={cls(
            "flex text-white space-x-6 border px-6 py-2 rounded-full font-medium"
          )}
        >
          <Link href="/login">
            <a className={cls("text-zinc-600")}>로그인</a>
          </Link>
          <Link href="/join">
            <a className={cls("text-zinc-600")}>회원가입</a>
          </Link>
        </div>
        <div className="flex-row space-x-2 hidden">
          {/*로그인 했을때 보여주기*/}
          <svg
            className={cls(
              "w-7 h-7",
              ScrollY > 1 ? "stroke-zinc-900" : "stroke-white"
            )}
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
            className={cls(
              "w-7 h-7",
              ScrollY > 1 ? "stroke-zinc-900" : "stroke-white"
            )}
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

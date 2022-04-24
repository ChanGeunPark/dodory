import useUser from "@libs/client/useUser";
import { cls } from "@libs/client/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface ProfileChild {
  children: React.ReactNode;
  menuName?: string;
}

export default function ProfileLayout({ children, menuName }: ProfileChild) {
  const route = useRouter();
  const { user } = useUser();

  return (
    <div className="h-screen flex">
      <nav className="w-[270px] h-full">
        <h1
          className={cls("text-3xl font-bold text-zinc-900 text-center mt-4")}
        >
          <Link href="/">
            <a> dodo:&#41;ry</a>
          </Link>
        </h1>
        <ul className="w-full flex flex-col">
          <li className="w-full mt-6">
            <Link href={`/profile`}>
              <a
                className={cls(
                  "flex items-center px-5 py-4 transition-all",
                  menuName == "home" ? "bg-gray-100 text-blue-500" : ""
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cls(
                    "h-5 w-5 mr-1 transition-all",
                    menuName == "home" ? " stroke-blue-500" : ""
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </a>
            </Link>
          </li>
          <li>
            <a className="flex items-center px-5 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              찜 목록
            </a>
          </li>
          <li>
            <a className="flex items-center px-5 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              장바구니
            </a>
          </li>
          <li>
            <a className="flex items-center px-5 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              톡톡
            </a>
          </li>
          <li>
            <Link href={`/profile/myProduct/${user?.id}`}>
              <a
                className={cls(
                  "flex items-center px-5 py-4 transition-all",
                  menuName == "myProduct" ? " bg-gray-100 text-blue-500" : ""
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cls(
                    "transition-all h-5 w-5  mr-1",
                    menuName == "myProduct" ? "stroke-blue-500" : ""
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                나의 아이템
              </a>
            </Link>
          </li>
          <li>
            <a className="flex items-center px-5 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              판매목록
            </a>
          </li>
          <li>
            <Link href="/profile/edit">
              <a
                className={cls(
                  "flex items-center px-5 py-4",
                  menuName == "edit" ? "text-blue-500 bg-gray-100" : ""
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cls(
                    "h-5 w-5 mr-1",
                    menuName == "edit" ? "stroke-blue-500" : ""
                  )}
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
                나의정보 변경
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <article className="mainBoard bg-gray-100 px-3 overflow-auto">
        <div className="mt-10 w-[1280px] max-w-full mx-auto">
          <div className="shadow-lg rounded-lg">
            <section className="w-full h-[300px] bg-gray-300 rounded-t-lg relative">
              <Image
                src="/index/subBanner2.jpg"
                layout="fill"
                className="object-cover"
                priority
              />

              <div className="bg-[rgba(0,0,0,0.5)] absolute bottom-0 left-0 h-20 z-10 w-full flex items-center justify-center space-x-10">
                <span className="text-white flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 stroke-white mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  1개
                </span>
                <span className="text-white flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 stroke-white mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  2개
                </span>
                <span className="text-white flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 stroke-white mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  3개
                </span>
                <span className="text-white flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 stroke-white mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                  4개
                </span>
              </div>
            </section>
            <section className="w-full bg-white h-20 rounded-b-lg flex justify-between items-center px-3">
              <div className="flex items-center w-1/3">
                <div className="bg-gray-500 w-14 h-14 rounded-full flex justify-center items-center relative overflow-hidden">
                  {user?.avatar ? (
                    <Image
                      src={`https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/${user.avatar}/avatar`}
                      layout="fill"
                      quality="100"
                    />
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
                </div>
                <div className="pl-5">
                  <span className="font-semibold">{user?.name}</span>
                  <br />
                  <span className="text-zinc-500 text-sm">{user?.user_id}</span>
                </div>
              </div>
              <div className="flex">
                <span
                  className={cls(
                    "w-[100px] text-center text-zinc-500 h-20 flex items-center justify-center relative before:contents-[''] before:absolute before:bottom-0 before:left-0 before:w-full",
                    menuName == "home"
                      ? "before:h-1 text-red-500 before:bg-red-500"
                      : ""
                  )}
                >
                  Home
                </span>
                <span className="w-[100px] text-center text-zinc-500 h-20 flex items-center justify-center relative before:contents-[''] before:absolute before:bottom-0 before:left-0 before:w-full">
                  찜 목록
                </span>
                <span className="w-[100px] text-center text-zinc-500 h-20 flex items-center justify-center relative before:contents-[''] before:absolute before:bottom-0 before:left-0 before:w-full">
                  장바구니
                </span>
                <span className="w-[100px] text-center text-zinc-500 h-20 flex items-center justify-center relative before:contents-[''] before:absolute before:bottom-0 before:left-0 before:w-full">
                  톡톡
                </span>
                <Link href={`/profile/myProduct/${user?.id}`}>
                  <a
                    className={cls(
                      "w-[100px] text-center text-zinc-500 h-20 flex items-center justify-center relative before:contents-[''] before:absolute before:bottom-0 before:left-0 before:w-full",
                      menuName == "myProduct"
                        ? "before:h-1 text-red-500 before:bg-red-500"
                        : ""
                    )}
                  >
                    나의 아이템
                  </a>
                </Link>
              </div>
              <div className="w-1/3"></div>
            </section>
          </div>
          <article className="mt-9">{children}</article>
          <footer className="mt-9 border-t border-zinc-300 py-3">
            <div className="text-center">
              <h1 className="font-bold text-xl">dodory</h1>
              <div className="flex space-x-3 justify-center mt-3">
                <span className="w-12 h-12 bg-gray-500 rounded-full"></span>
                <span className="w-12 h-12 bg-gray-500 rounded-full"></span>
                <span className="w-12 h-12 bg-gray-500 rounded-full"></span>
                <span className="w-12 h-12 bg-gray-500 rounded-full"></span>
              </div>
              <div className="text-center text-zinc-500 text-sm mt-3">
                dodory.com
              </div>
            </div>
          </footer>
        </div>
      </article>

      <style>{`
      .mainBoard{width:calc(100% - 270px)}
      `}</style>
    </div>
  );
}

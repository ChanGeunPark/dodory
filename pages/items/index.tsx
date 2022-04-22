import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import SwipeItems from "@components/SwipeItems";
import Layout from "@components/Layout";

export default function Items() {
  const keyword = ["봄", "따듯한", "선물", "둥글둥글", "저렴함"];

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Layout>
      <div className="py-24">
        <article className="container mx-auto">
          <div className="mb-24">
            <h1 className="text-2xl font-semibold text-center">다육이</h1>
            <div className="space-x-2 flex flex-wrap justify-center mt-5">
              {keyword.map((keyword) => (
                <span
                  className="px-5 py-2 border rounded-full text-zinc-500"
                  key={keyword}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <section>
            <h2 className="text-xl font-semibold">새로 들어온 가족</h2>
            <div className="mt-1 mb-9 flex justify-between w-full">
              <p className="text-zinc-500">
                이번달 새로 들어온 다육이 가족을 만나보세요
              </p>
              <span className="text-zinc-500">12개의 상품</span>
            </div>

            <SwipeItems />
          </section>

          <section className="mt-24">
            <div className="flex justify-between mb-9 items-center">
              <h2 className="text-xl font-semibold">다육이 친구들</h2>
              <div className="flex space-x-1">
                <button
                  type="button"
                  className="py-1 px-5 rounded-full bg-red-400 text-white"
                >
                  추천순
                </button>
                <button
                  type="button"
                  className="border py-1 text-zinc-500 px-5 rounded-full"
                >
                  신상품
                </button>
                <button
                  type="button"
                  className="border py-1 text-zinc-500 px-5 rounded-full"
                >
                  낮은가격
                </button>
                <button
                  type="button"
                  className="border py-1 text-zinc-500 px-5 rounded-full"
                >
                  높은가격
                </button>
              </div>
            </div>

            <div className="w-full">
              <div className="itemList flex flex-wrap">
                {items.map((items) => (
                  <div
                    key={items}
                    className=" w-1/4 mb-16 relative -left-10 pl-10"
                  >
                    <div className="h-72 overflow-hidden rounded-lg relative group">
                      <Link href="/items/123">
                        <a>
                          <img
                            src="/index/succulent1.png"
                            alt="succulent img"
                            className="w-full h-full object-cover"
                          />
                        </a>
                      </Link>

                      <div className="flex space-x-2 bg-[rgba(255,255,255,0.8)] px-3 py-1 absolute right-3 bottom-3 rounded-full ">
                        <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          ></path>
                        </svg>
                        <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <div className="pt-3">
                      <span className="text-zinc-500">
                        둥글둥글 귀여운 다육
                      </span>
                      <h3 className="text-lg font-semibold">눈꽃 다육</h3>
                      <div className="flex justify-between items-end mt-2">
                        <h4 className="font-bold text-2xl text-red-500">
                          30,000
                          <span className="text-sm text-zinc-500">원</span>
                        </h4>
                        <span className="text-sm text-zinc-500">
                          남은수량 1개
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
}
//강의 23

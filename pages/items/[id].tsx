import { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import SwipeItems from "@components/SwipeItems";
import Layout from "@components/Layout";

const ItemDetail: NextPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Layout>
      <div className="py-24 px-3">
        <article className="container mx-auto flex flex-col sm:flex-row">
          <section className="w-full sm:w-1/2 sm:pr-10">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide className="rounded-lg overflow-hidden">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg overflow-hidden">
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg overflow-hidden">
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg overflow-hidden">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg overflow-hidden">
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg overflow-hidden">
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg overflow-hidden">
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg overflow-hidden">
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg overflow-hidden">
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg overflow-hidden">
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide>
            </Swiper>

            <div className="mt-2">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>

          <section className="w-full sm:w-1/2 sm:pl-10 mt-10 sm:mt-0">
            <div className="w-full border-b pb-5">
              <h1 className="text-xl font-semibold mb-6">
                플로볼루스 테누이프로루스
              </h1>
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">
                  10,000<span className="text-sm font-normal">원</span>
                </h2>
                <span>재고 1개</span>
              </div>
            </div>

            <div className="py-9 space-y-3 border-b">
              <div className="flex">
                <h3 className="min-w-[120px] font-semibold text-zinc-700">
                  사이즈
                </h3>
                <span className="text-zinc-600">15cm X 18cm</span>
              </div>
              <div className="flex">
                <h3 className="min-w-[120px] font-semibold text-zinc-700">
                  배송구분
                </h3>
                <span className="text-zinc-600">무료배송</span>
              </div>
              <div className="flex">
                <h3 className="min-w-[120px] font-semibold text-zinc-700">
                  배송예상
                </h3>
                <p className="text-zinc-600">
                  <span className="text-red-500 font-semibold">
                    화요일 03/02(화)
                  </span>{" "}
                  도착예정
                </p>
              </div>
            </div>

            <div className="flex py-5 border-b justify-between items-center">
              <h3 className="font-semibold">총금액</h3>
              <h2 className="text-xl font-bold text-red-500">
                10,000<span className="text-sm text-zinc-600">원</span>
              </h2>
            </div>

            <div className="flex py-5 items-center space-x-2">
              <button
                type="button"
                className="text-center w-12 h-12 aspect-square border text-xl rounded-md border-zinc-300 text-red-500"
              >
                ❤
              </button>
              <button
                type="button"
                className="w-1/2 border rounded h-12 border-zinc-300"
              >
                장바구니
              </button>
              <button
                type="button"
                className="w-1/2 bg-red-500 h-12 rounded text-white"
              >
                구매하기
              </button>
            </div>
          </section>
        </article>

        <article className="container mx-auto mt-24">
          <nav className="flex justify-between">
            <button
              type="button"
              className="text-center w-1/4 border-t border-b-2 py-5 border-b-zinc-500"
            >
              상품정보
            </button>
            <button
              type="button"
              className="text-center w-1/4 border-t border-b-2 py-5"
            >
              관련상품
            </button>
            <button
              type="button"
              className="text-center w-1/4 border-t border-b-2 py-5"
            >
              상품문의
            </button>
            <button
              type="button"
              className="text-center w-1/4 border-t border-b-2 py-5"
            >
              구매후기
            </button>
          </nav>
          <section className='max-h-screen relative overflow-hidden after:contents-[""] after:absolute after:bottom-0 after:w-full after:h-[300px] after:bg-gradient-to-b after:from-transparent after:to-white border-b-2'>
            <img src="/index/items_img.png" alt="상품 상세이미지" />
            <button className="absolute left-1/2 bottom-5 z-10 -translate-x-1/2 border border-indigo-500 text-indigo-500 bg-white px-12 py-4 rounded-full">
              상세정보 펼쳐보기
            </button>
          </section>
        </article>

        <article className="container mx-auto mt-24">
          <h2 className="text-xl font-semibold">더 만나보시겠어요?</h2>
          <div className="flex justify-between mt-1 mb-9">
            <p className="text-zinc-500">
              예쁜 다육이들과 함께해보세요 마음이 편안해집니다
            </p>
            <span className="text-zinc-500">12개의 상품</span>
          </div>
          <SwipeItems />
        </article>

        <style>{`
      .swiper-slide-visible{opacity:0.5; border-radius:10px; overflow:hidden;}
      .swiper-slide-thumb-active{opacity:1}
      .swiper-button-prev{color:#fff;}
      .swiper-button-next{color:#fff;}
      `}</style>
      </div>
    </Layout>
  );
};

export default ItemDetail;

import type { NextPage } from 'next'
import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import { Navigation, Pagination } from 'swiper';
import { useEffect, useState } from 'react';
import { cls } from '../libs/utils'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Home: NextPage = () => {


  return (
    <div>
      <div className='w-full absolute z-20 h-96 bg-gradient-to-b from-gray-800 to-transparent mix-blend-multiply'>
        <span className='hidden'>shadow</span>
      </div>

      <main>
        <article className="banner h-[800px] w-full overflow-hidden relative bg-[url(/main_banner1.png)] bg-center px-4">
          <video autoPlay loop muted className='absolute w-full left-0 bottom-0 object-cover h-full'>
              <source src='/mp4/succulent_video.mp4' type="video/mp4" />
          </video>
          <div className='container mx-auto h-full flex items-center relative'>
            <div>
              <h2 className='banner-sub-title text-3xl text-white'>Wellcome to dodore</h2>
              <h1 className='text-3xl font-bold mb-8 text-white'>인테리어와 어울리는 <br className="sm:hidden" />나만의 다육이!</h1>
              <p className='leading-8 text-white'>
                너희는 언제나 정성으로 보살핀 사랑이 가득한<br />
                다육이와 함께하고 있습니다<br />
                저희 dodory와 남다른 하루를 시작해보세요.
              </p>
            </div>
          </div>
        </article>

        <article className='mx-auto container flex flex-col sm:flex-row mt-32 mb-32 px-3 sm:px-0'>
          <div className="w-full sm:w-1/3 mb-10 sm:mb-0">
            <h1 className="text-2xl font-semibold">도도리가 추천하는<br/>이달의 행복!</h1>
            <p className='text-zinc-500 my-5'>이계절 나를 행복해해줄 당신만의 다육이에요!</p>
            <div className='flex flex-wrap w-10/12'>
              <span className='border border-zinc-400 px-5 py-2 mr-3 mb-3 rounded-full text-zinc-500 text-sm'>봄</span>
              <span className='border border-zinc-400 px-5 py-2 mr-3 mb-3 rounded-full text-zinc-500 text-sm'>새로운 시작</span>
              <span className='border border-zinc-400 px-5 py-2 mr-3 mb-3 rounded-full text-zinc-500 text-sm'>인테리어</span>
              <span className='border border-zinc-400 px-5 py-2 mr-3 mb-3 rounded-full text-zinc-500 text-sm'>시원함</span>
              <span className='border border-zinc-400 px-5 py-2 mr-3 mb-3 rounded-full text-zinc-500 text-sm'>소중한 시간</span>
            </div>
            <a href="#" className='bg-indigo-500 text-white py-3 block w-52 text-center rounded-full hover:bg-indigo-600 transition-colors hover:text-white mt-8'>
              다육이 더알아보기
            </a>
          </div>
          <div className='w-full sm:w-2/3'>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.50": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='h-96 overflow-hidden rounded-xl relative group'>
                  <svg
                      className="w-6 h-6 stroke-white absolute top-3 right-3 z-20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <img src="/index/succulent1.png" alt="succulent img" className='w-full h-full object-cover transition-all group-hover:blur-lg duration-200'/>
                  <div className='absolute left-0 top-0 w-full h-full z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <div className='text-center'>
                      <h2 className='text-white text-lg mb-3'>블루베리 다육이</h2>
                      <p className='text-white text-sm'>블루베리처럼 둥글궁글한<br />나만의 귀여운 다육이</p>
                      <h3 className='text-lg font-bold text-white mt-3'>30,000<span className='text-sm text-white font-normal'>원</span></h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-96 overflow-hidden rounded-xl relative group'>
                  <svg
                      className="w-6 h-6 stroke-white absolute top-3 right-3 z-20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <img src="/index/succulent2.png" alt="succulent img" className='w-full h-full object-cover transition-all group-hover:blur-lg duration-200'/>
                  <div className='absolute left-0 top-0 w-full h-full z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <div className='text-center'>
                      <h2 className='text-white text-lg mb-3'>블루베리 다육이</h2>
                      <p className='text-white text-sm'>블루베리처럼 둥글궁글한<br />나만의 귀여운 다육이</p>
                      <h3 className='text-lg font-bold text-white mt-3'>30,000<span className='text-sm text-white font-normal'>원</span></h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-96 overflow-hidden rounded-xl relative group'>
                  <svg
                      className="w-6 h-6 stroke-white absolute top-3 right-3 z-20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <img src="/index/succulent3.png" alt="succulent img" className='w-full h-full object-cover transition-all group-hover:blur-lg duration-200'/>
                  <div className='absolute left-0 top-0 w-full h-full z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <div className='text-center'>
                      <h2 className='text-white text-lg mb-3'>블루베리 다육이</h2>
                      <p className='text-white text-sm'>블루베리처럼 둥글궁글한<br />나만의 귀여운 다육이</p>
                      <h3 className='text-lg font-bold text-white mt-3'>30,000<span className='text-sm text-white font-normal'>원</span></h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-96 overflow-hidden rounded-xl relative group'>
                  <svg
                      className="w-6 h-6 stroke-white absolute top-3 right-3 z-20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <img src="/index/succulent4.png" alt="succulent img" className='w-full h-full object-cover transition-all group-hover:blur-lg duration-200'/>
                  <div className='absolute left-0 top-0 w-full h-full z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <div className='text-center'>
                      <h2 className='text-white text-lg mb-3'>블루베리 다육이</h2>
                      <p className='text-white text-sm'>블루베리처럼 둥글궁글한<br />나만의 귀여운 다육이</p>
                      <h3 className='text-lg font-bold text-white mt-3'>30,000<span className='text-sm text-white font-normal'>원</span></h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </article>

        <article className='py-28 bg-[#F9F9F9]'>
          <div className='container mx-auto'>
            <h2 className="text-2xl font-semibold mb-1">새로 들어온 가족</h2>
            <p className='text-zinc-500 mb-10'>오래 같이할수록 색이 예뻐지는 다육이와 함께하세요</p>
            <div>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                
              >
                <SwiperSlide>
                  <div className='h-72 overflow-hidden rounded-lg relative group'>
                    <img src="/index/succulent1.png" alt="succulent img" className='w-full h-full object-cover'/>
                    <div className='flex space-x-2 bg-[rgba(255,255,255,0.8)] px-3 py-1 absolute right-3 bottom-3 rounded-full '>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                  </div>

                  <div className='pt-3'>
                    <span className='text-zinc-500'>둥글둥글 귀여운 다육</span>
                    <h3 className='text-lg font-semibold'>눈꽃 다육</h3>
                    <div className='flex justify-between items-end mt-2'>
                      <h4 className='font-bold text-2xl text-red-500'>30,000<span className='text-sm text-zinc-500'>원</span></h4>
                      <span className='text-sm text-zinc-500'>남은수량 1개</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-72 overflow-hidden rounded-lg relative group'>
                    <img src="/index/succulent2.png" alt="succulent img" className='w-full h-full object-cover'/>
                    <div className='flex space-x-2 bg-[rgba(255,255,255,0.8)] px-3 py-1 absolute right-3 bottom-3 rounded-full '>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='pt-3'>
                    <span className='text-zinc-500'>둥글둥글 귀여운 다육</span>
                    <h3 className='text-lg font-semibold'>눈꽃 다육</h3>
                    <div className='flex justify-between items-end mt-2'>
                      <h4 className='font-bold text-2xl text-red-500'>30,000<span className='text-sm text-zinc-500'>원</span></h4>
                      <span className='text-sm text-zinc-500'>남은수량 1개</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-72 overflow-hidden rounded-lg relative group'>
                    <img src="/index/succulent3.png" alt="succulent img" className='w-full h-full object-cover'/>
                    <div className='flex space-x-2 bg-[rgba(255,255,255,0.8)] px-3 py-1 absolute right-3 bottom-3 rounded-full '>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='pt-3'>
                    <span className='text-zinc-500'>둥글둥글 귀여운 다육</span>
                    <h3 className='text-lg font-semibold'>눈꽃 다육</h3>
                    <div className='flex justify-between items-end mt-2'>
                      <h4 className='font-bold text-2xl text-red-500'>30,000<span className='text-sm text-zinc-500'>원</span></h4>
                      <span className='text-sm text-zinc-500'>남은수량 1개</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-72 overflow-hidden rounded-lg relative group'>
                    <img src="/index/succulent4.png" alt="succulent img" className='w-full h-full object-cover'/>
                    <div className='flex space-x-2 bg-[rgba(255,255,255,0.8)] px-3 py-1 absolute right-3 bottom-3 rounded-full '>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='pt-3'>
                    <span className='text-zinc-500'>둥글둥글 귀여운 다육</span>
                    <h3 className='text-lg font-semibold'>눈꽃 다육</h3>
                    <div className='flex justify-between items-end mt-2'>
                      <h4 className='font-bold text-2xl text-red-500'>30,000<span className='text-sm text-zinc-500'>원</span></h4>
                      <span className='text-sm text-zinc-500'>남은수량 1개</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </article>


        <article className='bg-gradient-to-r from-[#F2F6FF] to-[#E3F5F0] h-52'>
          <div className='container mx-auto h-full flex items-center justify-between'>
              <div>
              <h2 className='text-2xl font-semibold'>다육이 띠배너</h2>
              <p className='text-zinc-500 mt-1'>오래 같이할수록 색이 예뻐지는 다육이와 함께하세요</p>
              </div>
              <div className='self-end'>
                <img src="/index/subbaner2.png" alt="sub banner" />
              </div>
          </div>
        </article>

        <article className='py-28'>
          <div className='container mx-auto'>
                <h2 className='text-2xl font-semibold'>다육이와 함께할 소품</h2>
                <p className='text-zinc-500 mb-10'>다육이를 더욱 돋보이게할 소품들을 준비했어요</p>
                <div>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                
              >
                <SwiperSlide>
                  <div className='h-72 overflow-hidden rounded-lg relative group'>
                    <img src="/index/succulent1.png" alt="succulent img" className='w-full h-full object-cover'/>
                    <div className='flex space-x-2 bg-[rgba(255,255,255,0.8)] px-3 py-1 absolute right-3 bottom-3 rounded-full '>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                  </div>

                  <div className='pt-3'>
                    <span className='text-zinc-500'>둥글둥글 귀여운 다육</span>
                    <h3 className='text-lg font-semibold'>눈꽃 다육</h3>
                    <div className='flex justify-between items-end mt-2'>
                      <h4 className='font-bold text-2xl text-red-500'>30,000<span className='text-sm text-zinc-500'>원</span></h4>
                      <span className='text-sm text-zinc-500'>남은수량 1개</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-72 overflow-hidden rounded-lg relative group'>
                    <img src="/index/succulent2.png" alt="succulent img" className='w-full h-full object-cover'/>
                    <div className='flex space-x-2 bg-[rgba(255,255,255,0.8)] px-3 py-1 absolute right-3 bottom-3 rounded-full '>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='pt-3'>
                    <span className='text-zinc-500'>둥글둥글 귀여운 다육</span>
                    <h3 className='text-lg font-semibold'>백조 다육</h3>
                    <div className='flex justify-between items-end mt-2'>
                      <h4 className='font-bold text-2xl text-red-500'>30,000<span className='text-sm text-zinc-500'>원</span></h4>
                      <span className='text-sm text-zinc-500'>남은수량 1개</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-72 overflow-hidden rounded-lg relative group'>
                    <img src="/index/succulent3.png" alt="succulent img" className='w-full h-full object-cover'/>
                    <div className='flex space-x-2 bg-[rgba(255,255,255,0.8)] px-3 py-1 absolute right-3 bottom-3 rounded-full '>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='pt-3'>
                    <span className='text-zinc-500'>둥글둥글 귀여운 다육</span>
                    <h3 className='text-lg font-semibold'>눈꽃 다육</h3>
                    <div className='flex justify-between items-end mt-2'>
                      <h4 className='font-bold text-2xl text-red-500'>30,000<span className='text-sm text-zinc-500'>원</span></h4>
                      <span className='text-sm text-zinc-500'>남은수량 1개</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-72 overflow-hidden rounded-lg relative group'>
                    <img src="/index/succulent4.png" alt="succulent img" className='w-full h-full object-cover'/>
                    <div className='flex space-x-2 bg-[rgba(255,255,255,0.8)] px-3 py-1 absolute right-3 bottom-3 rounded-full '>
                      <svg
                          className="w-6 h-6 stroke-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='pt-3'>
                    <span className='text-zinc-500'>둥글둥글 귀여운 다육</span>
                    <h3 className='text-lg font-semibold'>눈꽃 다육</h3>
                    <div className='flex justify-between items-end mt-2'>
                      <h4 className='font-bold text-2xl text-red-500'>30,000<span className='text-sm text-zinc-500'>원</span></h4>
                      <span className='text-sm text-zinc-500'>남은수량 1개</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </article>



      </main>
    <style jsx>{`
      .banner-sub-title{
        font-family: 'Oooh Baby', cursive;
      }
    `}</style>

    </div>
  )
}

export default Home
//참고 템플릿 찾기

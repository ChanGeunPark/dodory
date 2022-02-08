import type { NextPage } from 'next'
import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import { Navigation, Pagination } from 'swiper';


const Home: NextPage = () => {

 
  return (
    <div>
      <div className="px-4">
        <div className='mx-auto max-w-[1250px] flex justify-end py-2 items-center space-x-5'>
          <Link href="/">
            <a className="text-sm">로그인</a>
          </Link>
          <Link href="/">
            <a className="text-sm">회원가입</a>
          </Link>
        </div>
        <header className='mx-auto max-w-[1250px] flex justify-between items-center h-20'>
          <h1 className="text-3xl font-bold">dodo:)re</h1>
          <nav>
            <ul className='flex space-x-8 font-medium'>
              <li>다육이</li>
              <li>이벤트</li>
              <li>소품샵</li>
              <li>고객센터</li>
            </ul>
          </nav>
          <div className='flex flex-row space-x-2'>
            <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          
            <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
        </header>
      </div>

      <main>
        <article className="banner h-[630px] w-full overflow-hidden relative bg-[url(/main_banner1.png)] bg-center px-4">
          <div className='max-w-[1250px] mx-auto h-full flex items-center'>
            <div>
              <h2 className='banner-sub-title text-3xl text-zinc-500'>Wellcome to dodore</h2>
              <h1 className='text-3xl font-bold mb-8'>인테리어와 어울리는 나만의 다육이!</h1>
              <p className='leading-8 text-zinc-500'>
                너희는 언제나 정성으로 보살핀 사랑이 가득한<br />
                다육이와 함께하고 있습니다<br />
                저희 dodory와 남다른 하루를 시작해보세요
              </p>
            </div>
          </div>
        </article>

        <article className='mx-auto max-w-[1250px] flex mt-32 mb-32'>
          <div className="w-1/3">
            <h1 className="text-2xl font-semibold">도도리가 추천하는<br />이달의 행복!</h1>
            <p className='text-zinc-500 my-5 font-medium'>이계절 나를 행복해해줄 당신만의 다육이에요!</p>
            <div className='flex flex-wrap w-10/12'>
              <span className='border border-zinc-400 px-5 py-2 mr-3 mb-3 rounded-full text-zinc-500 text-sm'>봄</span>
              <span className='border border-zinc-400 px-5 py-2 mr-3 mb-3 rounded-full text-zinc-500 text-sm'>새로운 시작</span>
              <span className='border border-zinc-400 px-5 py-2 mr-3 mb-3 rounded-full text-zinc-500 text-sm'>인테리어</span>
              <span className='border border-zinc-400 px-5 py-2 mr-3 mb-3 rounded-full text-zinc-500 text-sm'>시원함</span>
              <span className='border border-zinc-400 px-5 py-2 mr-3 mb-3 rounded-full text-zinc-500 text-sm'>소중한 시간</span>
            </div>
            <a href="#" className='bg-zinc-200 py-3 block w-52 text-center rounded-full hover:bg-indigo-600 transition-colors hover:text-white mt-8'>
              다육이 더알아보기
            </a>
          </div>
          <div className='w-2/3'>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
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
                <div className='h-96 overflow-hidden rounded-xl relative group'>
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

        <article className='py-28 bg-[#edeee9]'>
          <div className='max-w-[1250px] mx-auto'>
            <h2 className="text-2xl font-semibold mb-1">새로 들어온 가족</h2>
            <p className='font-medium text-zinc-500 mb-10'>오래 같이할수록 색이 예뻐지는 다육이와 함께하세요</p>
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
                  <div className='h-72 overflow-hidden rounded-lg relative group'>
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
                  <div className='h-72 overflow-hidden rounded-lg relative group'>
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
                  <div className='h-72 overflow-hidden rounded-lg relative group'>
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

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function SwipeItems(){
  return(
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

      <style>{`
        .itemList{width:calc(100% + 40px)}
        .mySwiper{padding-bottom:40px}
        .swiper-button-prev{color:#fff}
        .swiper-button-next{color:#fff}
      `}</style>
    </div>
  )
}
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <div className="px-4">
        <div className='mx-auto max-w-[1250px] flex justify-end py-2 items-center'>
          <Link href="/">
            <a className="text-sm">로그인</a>
          </Link>
          <span className='mx-3'>|</span>
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

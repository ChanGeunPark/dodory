

export default function Footer(){
  return(
    <footer className='py-16 bg-gray-100 border-t border-zinc-100'>
        <div className='container mx-auto flex justify-between'>
          <div className='flex flex-col'>
            <h2 className='text-2xl mb-5 font-semibold text-zinc-700'>DODO:&#41;re</h2>
            <p className='text-zinc-700'>
              도도리 문의 : 010-2002-2003 <span className='text-zinc-500'>(평일 10:00 ~ 18:00)</span><br/>
              상호명: 도도리(dodory) | 사업자 등록번호: 000-0000-0000 | 대표자 : 곽은희<br />
              소재지: 경기도 김포시 중봉로 1-1 | 통신판매신고번호: 000-0000-0000

            </p>
          </div>
          <div className='flex flex-col self-end'>
            <h2 className='text-2xl mb-5 font-semibold text-zinc-700'>SNS</h2>
            <div className='flex space-x-2'>
              <span className='aspect-square w-16 flex justify-center items-center border rounded-lg text-zinc-500'>talk</span>
              <span className='aspect-square w-16 flex justify-center items-center border rounded-lg text-zinc-500'>blog</span>
              <span className='aspect-square w-16 flex justify-center items-center border rounded-lg text-zinc-500'>face</span>
            </div>
          </div>
        </div>
      </footer>
  );
}
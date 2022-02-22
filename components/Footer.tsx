

export default function Footer(){
  return(
    <footer className='py-16 bg-zinc-500'>
        <div className='container mx-auto flex justify-between'>
          <div className='flex flex-col'>
            <h2 className='text-2xl mb-5 font-semibold text-white'>DODO:)re</h2>
            <p className='text-white'>
              도도리 문의 : 010-2002-2003 <span className='text-zinc-300'>(평일 10:00 ~ 18:00)</span><br/>
              상호명: 도도리(dodory) | 사업자 등록번호: 000-0000-0000 | 대표자 : 곽은희<br />
              소재지: 경기도 김포시 중봉로 1-1 | 통신판매신고번호: 000-0000-0000

            </p>
          </div>
          <div className='flex flex-col self-end'>
            <h2 className='text-2xl mb-5 font-semibold text-white'>SNS</h2>
            <div className='flex space-x-2'>
              <span className='aspect-square w-16 flex justify-center items-center border rounded-lg text-white'>talk</span>
              <span className='aspect-square w-16 flex justify-center items-center border rounded-lg text-white'>blog</span>
              <span className='aspect-square w-16 flex justify-center items-center border rounded-lg text-white'>face</span>
            </div>
          </div>
        </div>
      </footer>
  );
}
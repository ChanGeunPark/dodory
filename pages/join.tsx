import Input from '../components/Input';

const tels = ['010','02','031','032','033','041','042','043','051','052','053','054','055','063','061','062','064'];





export default function Join(){








  return(
    <div className='bg-gray-100 py-16'>
      <article className='w-[650px] max-w-full mx-auto'>
        <div className='pb-16 text-center'>
          <h1 className='text-2xl font-semibold'>dodo:&#41;re 회원가입</h1>
          <p className='mt-3 text-zinc-500'>간편하게 SNS등으로 신규 가입하세요!</p>
        </div>

        <form action="" className='bg-white p-10'>
          <div>
            <Input
              label='아이디'
              name="user_id"
              placeholder="아이디를 입력해주세요"
              important={true}
              type="text"
            />
          </div>

          <div className='mt-9'>
            <Input
                label='비밀번호'
                name="user_pw"
                important={true}
                type="password"
                moreText='영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자'
            />
          </div>

          <div className='mt-9'>
          <Input
                label='비밀번호 확인'
                name="user_pw_check"
                important={true}
                type="password"
          />
          </div>

          <div className='mt-9'>
          <Input
                label='이름'
                name="user_name"
                important={true}
                type="text"
                placeholder="이름을 입력해주세요"
          />
          </div>

          <div className='mt-9'>
            <label htmlFor="">휴대전화<span className='text-red-500'>*</span></label>
            <div className='flex items-center'>
              <select className='w-full h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none focus:ring-2 focus:ring-red-400' id="num1">
                {tels.map((x,i)=>(
                  <option id={x} value={x}>{x}</option>
                ))}
              </select>
              <span className='px-3 mt-2'>-</span>
              <input type="text" className='w-full h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none focus:ring-2 focus:ring-red-400' id="num2" />
              <span className='px-3 mt-2'>-</span>
              <input type="text" className='w-full h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none focus:ring-2 focus:ring-red-400' id="num3"/>
            </div>
          </div>

          <div className='mt-9'>
          <Input
                label='이메일'
                name="email"
                important={true}
                type="email"
                placeholder="이메일을 입력해주세요"
          />
          </div>

          <div className='mt-9'>
            <label htmlFor="">주소<span className='text-red-500'>*</span></label>
            <div className='flex items-center space-x-2'>
              <input type="text" className='w-2/3 h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none focus:ring-2 focus:ring-red-400' name="address" />
              <button type="button" className='w-1/3 h-10 rounded-md bg-zinc-600 mt-2 px-3 outline-none text-white'>우편번호 검색</button>
            </div>
            <input type="text" className='w-full h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none focus:ring-2 focus:ring-red-400' name="address_more" placeholder='상세주소 입력' />
          </div>

          <div className='mt-9'>
            <label className='h-16 flex items-center justify-center border border-red-500 w-full rounded-md relative cursor-pointer'>
              <input type="checkbox" className='absolute left-5' />
              <h3 className='text-red-500'>전체 약관에 동의합니다</h3>
            </label>
            <div>
              <div className='flex items-center mt-5'>
              <input type="checkbox" /><label htmlFor="" className='text-zinc-500 ml-2'>쇼핑몰 이용약관에 모두 동의합니다.(필수)</label>
              </div>
              <div className='flex items-center mt-2'>
              <input type="checkbox" /><label htmlFor="" className='text-zinc-500 ml-2'>쇼개인정보 수집 및 이용에 동의합니다.(필수)</label>
              </div>
              <div className='flex items-center mt-2'>
              <input type="checkbox" /><label htmlFor="" className='text-zinc-500 ml-2'>마케팅 정보수신 및 활용에 동의합니다.(선택)</label>
              </div>
            </div>
          </div>
          <button type="submit" className='w-full h-16 bg-red-500 text-white text-xl mt-10 rounded-md'>회원가입</button>
        </form>
      </article>
    </div>
  )
}
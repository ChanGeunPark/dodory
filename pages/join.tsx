import Input from '@components/Input';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import useMutation from '@libs/client/useMutation';
import DaumPostcode from 'react-daum-postcode';
import PopupPostCode from '@components/PopupPostCode';
import PopupDom from '@components/PopupDom';


const tels = ['010','02','031','032','033','041','042','043','051','052','053','054','055','063','061','062','064'];

interface joinForm{
  user_id:string,
  password:string,
  phone:string,
  address:string,
  name:string,
  email:string,
  errors:string,
}






export default function Join(){


console.log(useRef);

  const [join, {loading, data, error}] = useMutation("/api/users/join");
  //array의 첫번째 item은 우리가 호출할 수 있는 function이 될것이다. 그 function이 백엔드로 POST fetch를 할 것이다. 그걸 뮤테이션이라 부른다.
  //두번째 어레이는 어떤일이 일어나는지 보여주고싶다.

  const [submitting, setSubmitting] = useState(false);

  const {register, watch, reset, formState:{ errors }, handleSubmit} = useForm<joinForm>();



  const phone = register('phone', {value : "asdfasd"});//핸드폰







  const onValid = (validForm:joinForm) => {

    console.log(validForm);

    join(validForm);//join에 데이터를 보내줄것이다.

    // setSubmitting(true);
    // fetch("/api/users/join",{
    //   method:"POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type":"application/json",
    //   }
    // }).then(()=>{setSubmitting(false)});
  }
  let daumHandler = (data:any) => {
    console.log(data);
  }

  console.log(loading, data, error);
  return(
    <div className='bg-gray-100 py-16'>
      <article className='w-[650px] max-w-full mx-auto'>
        <div className='pb-16 text-center'>
          <h1 className='text-2xl font-semibold'>dodo:&#41;re 회원가입</h1>
          <p className='mt-3 text-zinc-500'>간편하게 SNS등으로 신규 가입하세요!</p>
        </div>

        <form onSubmit={handleSubmit(onValid)} className='bg-white p-10'>
          <div>
            <Input
              label='아이디'
              name="user_id"
              register={register("user_id",{
                required:"아이디는 필수입니다.",
                minLength:{
                  value:5,
                  message:"5글자 이상 입력해 주세요",
                }
              })}
              placeholder="아이디를 입력해주세요"
              important={true}
              type="text"
            />
            <p className='text-red-500 mt-1'>{errors.user_id?.message}</p>
          </div>

          <div className='mt-9'>
            <Input
                label='비밀번호'
                register={register("password",{
                  required:"비밀번호는 필수입니다.",
                  minLength:{
                    value:8,
                    message:"비밀번호는 8글자이상 사용해주세요"
                  }
                })}
                name="password"
                important={true}
                type="password"
                moreText='영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자'
            />
          </div>

          <div className='mt-9'>
          <Input
                label='비밀번호 확인'
                name="password_check"
                important={true}
                type="password"
          />
          </div>

          <div className='mt-9'>
          <Input
                label='이름'
                name="name"
                register={register("name")}
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
                  <option key={i} id={x} value={x}>{x}</option>
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
                register={register("email")}
                important={true}
                type="email"
                placeholder="이메일을 입력해주세요"
          />
          </div>

          <div className='mt-9'>
            <label htmlFor="">주소<span className='text-red-500'>*</span></label>
            <div id='popupDom'>
              <PopupDom name="address" register={register('address')}/>
            </div>
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
          <button type="submit" className='w-full h-16 bg-red-500 text-white text-xl mt-10 rounded-md'>{submitting ? "loading" : "회원가입"}</button>
        </form>
      </article>
    </div>
  )
}
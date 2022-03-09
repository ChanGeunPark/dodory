import Input from '@components/Input';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import useMutation from '@libs/client/useMutation';
import DaumPostcode from 'react-daum-postcode';
import PopupPostCode from '@components/PopupPostCode';
import PopupDom from '@components/PopupDom';


const tels = ['010','02','031','032','033','041','042','043','051','052','053','054','055','063','061','062','064'];

interface joinForm{
  user_id:string,
  password:string,
  password_confire:string,
  phone:string,
  address:string,
  name:string,
  email?:string,
  errors:string,
  detailedAddress:string,
  termsOfUse:boolean,
  privacy:boolean,
  marketing?:boolean,
}






export default function Join(){



  const [join, {loading, data, error}] = useMutation("/api/users/join");
  //array의 첫번째 item은 우리가 호출할 수 있는 function이 될것이다. 그 function이 백엔드로 POST fetch를 할 것이다. 그걸 뮤테이션이라 부른다.
  //두번째 어레이는 어떤일이 일어나는지 보여주고싶다.
  const {register, watch, reset, formState:{ errors }, handleSubmit, setValue, getValues} = useForm<joinForm>();

  const [submitting, setSubmitting] = useState(false);
  const [isPopupOpen, setIsPopupOpen ] = useState(false);//팝업

  const openPostCode = () =>{
    return setIsPopupOpen(true);
  };//주소 모달 열기
  const closePostCode = () => {
    return setIsPopupOpen(false);
  };//주소 모달 닫기

  const handlePostCode = async(data:any) => {//duam 주소
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    // console.log(data);
    // console.log(fullAddress);
    // console.log(data.zonecode);
    await setValue("address",fullAddress);
    closePostCode();
  };//duam 주소

  
  const password = useRef<HTMLInputElement | any>();
  password.current = watch("password");

  const allCheckedRef = useRef<any>();//전체 동의
  
  // useEffect(()=>{
  //   console.log(termsOfUseRef.current);
  // },[])

  const allChecked = () => {
    if(allCheckedRef.current.checked === true){
      setValue("termsOfUse",true);
      setValue("privacy",true);
    }else{
      setValue("termsOfUse",false);
      setValue("privacy",false);
    }
  };//전체약관 동의


  const onValid = (validForm:joinForm) => {
    //console.log(validForm);
    join(validForm);//join에 데이터를 보내줄것이다.
  };

  //console.log(loading, data, errors);
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
                  },
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
                register={register("password_confire",{
                  required:"비밀번호 확인해주세요",
                  validate: (value) => value === password.current || "비밀번호와 일치하지 않습니다",
                })}
                name="password_check"
                important={true}
                type="password"
          />
          <p className='mt-1 text-red-500'>{errors.password_confire?.message}</p>
          
          </div>

          <div className='mt-9'>
          <Input
                label='이름'
                name="name"
                register={register("name",{required:"이름은 필수입니다."})}
                important={true}
                type="text"
                placeholder="이름을 입력해주세요"
          />
          <p className='mt-1 text-red-500'>{errors.name?.message}</p>
          </div>

          <div className='mt-9'>
          <Input
                label='핸드폰'
                name="phone"
                register={register("phone",{required:"핸드폰은 필수입니다."})}
                important={true}
                type="number"
                placeholder="핸드폰 번호를 입력해주세요"
          />
          <p className='mt-1 text-red-500'>{errors.name?.message}</p>
          </div>

          <div className='mt-9'>
          <Input
                label='이메일'
                name="email"
                register={register("email")}
                type="email"
                placeholder="이메일을 입력해주세요"
          />
          </div>

          <div className='mt-9'>
            <label htmlFor="">주소<span className='text-red-500'>*</span></label>
            <div id='popupDom'>
            {isPopupOpen && (
              <div className='fixed w-full h-full left-0 top-0 z-10'>
                <span className='block fixed bg-[rgba(0,0,0,0.5)] left-0 top-0 z-10 w-full h-full' onClick={()=>{closePostCode()}}>{/*clouse*/}</span>
                
                <div className='fixed left-1/2 top-1/2 -translate-x-1/2 w-[500px] max-w-[90%] -translate-y-1/2 z-50'>
                  <button type='button' onClick={() => {closePostCode()}} className='postCode_btn w-full'>
                      <svg
                          className="w-8 h-8 stroke-white float-right"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                    <div className='rounded-md overflow-hidden'>
                      <DaumPostcode onComplete={handlePostCode} />
                    </div>
                </div>
              </div>
              )}

              <div className='flex items-center space-x-2'>
                <input
                  type="text"
                  {...register("address")}
                  id="address"
                  readOnly
                  className='w-2/3 h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none focus:ring-2 focus:ring-red-400'
                  name="address"/>
                <button type="button" className='w-1/3 h-10 rounded-md bg-zinc-600 mt-2 px-3 outline-none text-white' onClick={openPostCode}>우편번호 검색</button>
              </div>
              <input
                type="text"
                className='w-full h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none focus:ring-2 focus:ring-red-400'
                {...register("detailedAddress",{required:"상세주소를 입력해주세요"})}
                name="detailedAddress"
                placeholder='상세주소 입력'/>
            </div>
          </div>

          <div className='mt-9'>
            <label className='h-16 flex items-center justify-center border border-red-500 w-full rounded-md relative cursor-pointer'>
              <input type="checkbox" ref={allCheckedRef} className='absolute left-5' onChange={allChecked}/>
              <h3 className='text-red-500'>전체 약관에 동의합니다</h3>
            </label>
            <div>
              <div className='flex items-center mt-5'>
              <input 
                type="checkbox"
                {...register("termsOfUse",{required:true})}
                id="termsOfUse"
                />
              <label htmlFor="termsOfUse" className='text-zinc-500 ml-2'>쇼핑몰 이용약관에 모두 동의합니다.(필수)</label>
              </div>
              <div className='flex items-center mt-2'>
              <input
                  type="checkbox"
                  id="privacy"
                  {...register("privacy",{required:true})}
              />
                <label htmlFor="privacy" className='text-zinc-500 ml-2'>개인정보 수집 및 이용에 동의합니다.(필수)</label>
              </div>
              <div className='flex items-center mt-2'>
              <input type="checkbox" {...register("marketing")} /><label className='text-zinc-500 ml-2'>마케팅 정보수신 및 활용에 동의합니다.(선택)</label>
              </div>
            </div>
          </div>
          <button type="submit" className='w-full h-16 bg-red-500 text-white text-xl mt-10 rounded-md'>{submitting ? "loading" : "회원가입"}</button>
        </form>
      </article>
    </div>
  )
}
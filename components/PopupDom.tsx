import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useForm } from 'react-hook-form';


interface PopupForm{
  name:string,
  [key:string]:any;
}


export default function PopupDom({name,register}:PopupForm){

  const [isPopupOpen, setIsPopupOpen ] = useState(false);

  const [addresss, setAddresss] = useState("");

  const openPostCode = () =>{
    return setIsPopupOpen(true);
  }

  const closePostCode = () => {
    return setIsPopupOpen(false);
  }


  const handlePostCode = (data:any) => {
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
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    setAddresss(fullAddress);
    
    closePostCode();

  }

  return (
    <div>
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
          {...register}
          inputRef={register.ref}
          id="address"
          className='w-2/3 h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none focus:ring-2 focus:ring-red-400'
          name={name}/>
        <button type="button" className='w-1/3 h-10 rounded-md bg-zinc-600 mt-2 px-3 outline-none text-white' onClick={openPostCode}>우편번호 검색</button>
      </div>
      <input type="text" className='w-full h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none focus:ring-2 focus:ring-red-400' name="address_more" placeholder='상세주소 입력' />
    </div>
  )
}
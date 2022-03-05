import DaumPostcode from 'react-daum-postcode';

interface PopupPostCode{
  props:any,
}

export default function PopupPostCode(props:any){
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
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
    console.log(data)
    console.log(fullAddress)
    console.log(data.zonecode)

    props.onClose()

  }

  return(
    <div className='fixed w-full h-full left-0 top-0 z-10'>
      <span className='block fixed bg-[rgba(0,0,0,0.5)] left-0 top-0 z-10 w-full h-full' onClick={()=>{props.onClose()}}>{/*clouse*/}</span>
      
      <div className='fixed left-1/2 top-1/2 -translate-x-1/2 w-[500px] max-w-[90%] -translate-y-1/2 z-50'>
        <button type='button' onClick={() => {props.onClose()}} className='postCode_btn w-full'>
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
  )
}
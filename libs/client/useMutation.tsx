import { useState } from 'react'



//타입스크립트를 쓰고있다면 useMutation의 return type을 설정해줘야 한다.
export default function useMutation(url:string):[(data:any)=>void, {loading:boolean;data:undefined|any;error:undefined|any}]{
  const [loading, setLoading]=useState(false);
  const [data, setData]=useState<undefined | any>(undefined);
  const [error, setError]=useState<undefined | any>(undefined);
  function mutation(data:any){
    setLoading(true);
    fetch(url, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data),
    }).then((response)=> response.json().catch(()=>{}))//response.json을 하게되면 promise로 데이터를 받게됨  -> 그 다음 json데이터를 받아서 setData(json)을 해줘야함
    .then(json => setData(json))// => 다른표현으로 (setData)라고 할수 있음
    .catch(setError).finally(()=>setLoading(false));
  }
  return [mutation,{loading, data, error}];
}
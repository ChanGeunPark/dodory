import { useState } from 'react'



//타입스크립트를 쓰고있다면 useMutation의 return type을 설정해줘야 한다.
export default function useMutation(url:string):[(data:any)=>void, {loading:boolean;data:undefined|any;error:undefined|any}]{
  const [loading, setLoading]=useState(false);
  const [data, setData]=useState<undefined | any>(undefined);
  const [error, setError]=useState<undefined | any>(undefined);
  function mutation(data:any){}
  return [mutation,{loading, data, error}]
}
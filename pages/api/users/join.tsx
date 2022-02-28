import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../libs/client';


export default function handler(
  req:NextApiRequest, res:NextApiResponse
){
  if(req.method !== "POST"){
    res.status(401).end();
  }
  console.log(req.body.user_id);
  res.status(200).end();//임시.  어떤 요청이 오든 status200을 보내고 그다음에 연결을 끝내도록 함
  
}
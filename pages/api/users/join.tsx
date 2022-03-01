import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';


function handler(
  req:NextApiRequest, res:NextApiResponse
){
  // if(req.method !== "POST"){
  //   res.status(401).end();
  // }
  console.log(req.body);
  res.status(200).end();
  //res.json({ok:true});
  //res.status(200).end();//임시.  어떤 요청이 오든 status200을 보내고 그다음에 연결을 끝내도록 함
  
}

export default withHandler("POST",handler);



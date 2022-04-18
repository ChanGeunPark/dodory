import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const {
    user_id,
    password,
    name,
    phone,
    email,
    address,
    detailedAddress,
    termsOfUse,
    privacy,
    marketing,
  } = req.body;
  const phoneNum = parseInt(phone);

  await client.user.create({
    data: {
      user_id,
      password,
      name,
      phone: +phoneNum,
      email,
      address,
      detailedAddress,
      termsOfUse,
      privacy,
      marketing,
    },
  });

  // const {name} = req.body;
  // let user;

  // if(!name){
  //   console.log("Did not find. Will create.");
  //   user = await client.user.create({
  //     data:{
  //       name:"Anonymous",
  //     }
  //   });
  // }
  // console.log(user);
  // if(req.method !== "POST"){
  //   res.status(401).end();
  // }123

  return res.json({
    ok: true,
  });
  //res.json({ok:true});
  //res.status(200).end();//임시.  어떤 요청이 오든 status200을 보내고 그다음에 연결을 끝내도록 함
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });

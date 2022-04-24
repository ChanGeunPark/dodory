import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
    body: {
      address,
      avatar,
      detailedAddress,
      name,
      password,
      phone,
      user_id,
      email,
    },
  } = req;
  if (req.method === "POST") {
    if (avatar) {
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          address,
          avatar,
          detailedAddress,
          name,
          password,
          phone,
          user_id,
          email,
        },
      });
    } else {
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          address,
          detailedAddress,
          name,
          password,
          phone,
          user_id,
          email,
        },
      });
    }
  }

  if (req.method === "GET") {
    const profile = await client.user.findUnique({
      where: { id: req.session.user?.id },
    });
    res.json({
      ok: true,
      profile,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
// 여기에 핸들러는 유저만 호출할 수 있다.
//GET으로 받아야지 브라우저에서 확인할 수 있다.
//9.9 3분 36초부터 다시 시작

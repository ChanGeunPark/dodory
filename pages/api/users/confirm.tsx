import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user_id, password } = req.body;

  const foundUser = await client.user.findUnique({
    where: {
      user_id,
    },
  });

  if (!foundUser) {
    console.log("일치하는 아이디가 없습니다.");
    return res.json({
      ok: false,
      message: "비밀번호와 아이디가 올바르지 않습니다.",
    });
  }

  if (foundUser.password !== password) {
    console.log("아이디와 비밀번호가 같지 않음");
    return res.json({
      ok: false,
      message: "아이디와 비밀번호가 같지 않습니다.",
    });
  }

  req.session.user = {
    id: foundUser.id,
  };

  await req.session.save();

  res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);

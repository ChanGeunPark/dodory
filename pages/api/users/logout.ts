import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await req.session.destroy();

  res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({ methods: ["POST", "GET"], handler, isPrivate: false })
);

import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    const {
      body: {
        name,
        price,
        deliveryCharge,
        description,
        precautions,
        xSize,
        ySize,
        mainThumb,
        thumb1,
        thumb2,
        thumb3,
      },
      session: { user },
    } = req;

    const product = await client.product.create({
      data: {
        name,
        price: +price,
        deliveryCharge: +deliveryCharge,
        description,
        precautions,
        xSize: +xSize,
        ySize: +ySize,
        mainThumb: mainThumb ? mainThumb : "",
        thumb1: thumb1 ? thumb1 : "",
        thumb2: thumb2 ? thumb2 : "",
        thumb3: thumb3 ? thumb3 : "",
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    res.json({
      ok: true,
      product,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);

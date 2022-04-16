import { NextApiRequest, NextApiResponse } from "next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = "GET" | "POST" | "DELETE";

interface ConfigType {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

export default function whitHandler({
  methods,
  handler,
  isPrivate = true,
}: ConfigType) {
  //nextJS가 실행해야 할 것을 return해야한다.
  // 이함수가 nextJS가 실행할 함수이다.
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    //promise<void>는 iron-session 에서 promise를 사용하기 때문에 넣어준다.
    if (req.method && !methods.includes(req.method as any)) {
      //method가 배열에 들어가서 includes를 해서 찾을 것이다.
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "로그인을 해주세요" }); //401은 인증되지 않은 요청
    } //로그인되어있지 않으면 api에 에러가 안나오도록 ok:false를 표출시킬것이다.
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}

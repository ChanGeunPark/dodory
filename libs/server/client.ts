import { PrismaClient } from "@prisma/client";
//자동완성 기능을 가진 PrismaClient로 데이터베이스에 대화를 걸도록 만들것

declare global {
  var client: PrismaClient | undefined;
}

const client = global.client || new PrismaClient();
if (process.env.NODE_ENV === "development") global.client = client;

export default client;

import ProfileLayout from "@components/ProfileLayout";
import Link from "next/link";
import client from "@libs/server/client";
import useUser from "@libs/client/useUser";
import { Product } from "@prisma/client";
import { NextPage } from "next";
import Image from "next/image";

interface productsResponse {
  ok: boolean;
  products: Product[];
}

const myProduct: NextPage<{ products: Product[] }> = ({ products }) => {
  return (
    <ProfileLayout menuName={"myProduct"}>
      <div className="flex justify-between items-center">
        <h3 className="text-zinc-500">상품개수 8개</h3>
        <Link href="/profile/myProduct/upload">
          <a className="bg-blue-500 text-white px-6 py-3 rounded-md flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-white mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            상품 추가하기
          </a>
        </Link>
      </div>
      {products.length == 0 ? (
        <div className="text-center w-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-zinc-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          <span className="text-zinc-500">등록된 상품이 없습니다.</span>
        </div>
      ) : null}
      <section className="mt-3 grid grid-cols-4 gap-8">
        {products?.map((products) => (
          <div key={products.id} className="w-full border">
            <div className="h-48 bg-gray-500 rounded-t-lg relative overflow-hidden">
              <Image
                layout="fill"
                src={`https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/${products.mainThumb}/public`}
                alt="메인 섬네일"
              />
            </div>
            <div className="p-3 rounded-b-lg">
              <h3>{products.name}</h3>
              <span>{products.price}원</span>
            </div>
          </div>
        ))}
      </section>
    </ProfileLayout>
  );
};

export async function getServerSideProps(context: any) {
  const products = await client.product.findMany({
    where: {
      userId: +context.query?.id,
    },
  });
  return {
    props: {
      ok: true,
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default myProduct;

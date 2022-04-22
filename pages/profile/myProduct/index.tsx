import ProfileLayout from "@components/ProfileLayout";
import Link from "next/link";

export default function myProduct() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <ProfileLayout menuName={"myProduct"}>
      <div className="flex justify-between items-center">
        <h3 className="text-zinc-500">상품개수 8개</h3>
        <Link href="/profile/myProduct/upload">
          <a className="bg-blue-500 text-white px-10 py-3 rounded-md">
            상품 추가하기
          </a>
        </Link>
      </div>
      <section className="mt-3 grid grid-cols-4 gap-8">
        {items.map((items) => (
          <div key={items} className="w-full border">
            <div className="h-48 bg-gray-500 rounded-t-lg"></div>
            <div className="p-3 rounded-b-lg">
              <h3>name</h3>
              <span>price</span>
            </div>
          </div>
        ))}
      </section>
    </ProfileLayout>
  );
}

import { NextPage } from "next";
import Navbar from "@components/Navbar";
import useUser from "@libs/client/useUser";
import Layout from "@components/Layout";
import Link from "next/link";
import { cls } from "@libs/client/utils";
import ProfileLayout from "@components/ProfileLayout";

const Profile: NextPage = () => {
  const { user } = useUser();

  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <ProfileLayout menuName="home">
      <section className="mt-9 grid grid-cols-4 gap-8">
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
};

export default Profile;

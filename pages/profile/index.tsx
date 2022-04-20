import { NextPage } from "next";
import Navbar from "@components/Navbar";
import useUser from "@libs/client/useUser";

const Profile: NextPage = () => {
  const { user } = useUser();
  return (
    <div className="h-screen flex">
      <nav className="w-[270px] h-full"></nav>
      <article className="mainBoard bg-gray-100 px-3">
        <div className="border mt-10 w-[1280px] max-w-full mx-auto">
          <div className="shadow-lg rounded-lg">
            <section className="w-full h-[300px] bg-gray-300 rounded-t-lg relative">
              <div className="bg-[rgba(0,0,0,0.3)] absolute bottom-0 left-0 h-20 z-10 w-full flex items-center justify-center space-x-16">
                <span className="text-white">1</span>
                <span className="text-white">2</span>
                <span className="text-white">3</span>
                <span className="text-white">4</span>
              </div>
            </section>
            <section className="w-full bg-white h-20 rounded-b-lg flex justify-between items-center px-3">
              <div className="flex items-center w-1/3">
                <div className="bg-gray-500 w-14 h-14 rounded-full"></div>
                <div className="pl-5">
                  <span className="font-semibold">박찬근</span>
                  <br />
                  <span className="text-zinc-500 text-sm">
                    design795@naver.com
                  </span>
                </div>
              </div>
              <div className="flex">
                <span className="w-[100px] text-center text-red-500 h-20 flex items-center justify-center relative before:contents-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-red-500">
                  Home
                </span>
                <span className="w-[100px] text-center text-zinc-500 h-20 flex items-center justify-center relative before:contents-[''] before:absolute before:bottom-0 before:left-0 before:w-full">
                  찜 목록
                </span>
                <span className="w-[100px] text-center text-zinc-500 h-20 flex items-center justify-center relative before:contents-[''] before:absolute before:bottom-0 before:left-0 before:w-full">
                  장바구니
                </span>
                <span className="w-[100px] text-center text-zinc-500 h-20 flex items-center justify-center relative before:contents-[''] before:absolute before:bottom-0 before:left-0 before:w-full">
                  톡톡
                </span>
                <span className="w-[100px] text-center text-zinc-500 h-20 flex items-center justify-center relative before:contents-[''] before:absolute before:bottom-0 before:left-0 before:w-full">
                  나의 아이템
                </span>
              </div>
              <div className="w-1/3"></div>
            </section>
          </div>
        </div>
      </article>

      <style>{`
      .mainBoard{width:calc(100% - 270px)}
      `}</style>
    </div>
  );
};

export default Profile;

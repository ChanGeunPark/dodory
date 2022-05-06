import type { NextPage } from "next";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import { useContext, useEffect, useState } from "react";
import { cls } from "@libs/client/utils";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useUser from "@libs/client/useUser";
import Layout from "@components/Layout";
import Image from "next/image";
import CustomCursor from "@components/CustomCursor";
import CustomCursorManager from "@components/CustomCursor/context/manager";
import CustomCursorContext from "@components/CustomCursor/context/CustomCursorContext";

const Home: NextPage = () => {
  const { setType } = useContext(CustomCursorContext); //costomCursorContext를 가져올거다

  return (
    <CustomCursorManager>
      <Layout>
        <CustomCursor />
        <main>
          <article className="banner h-screen w-full overflow-hidden relative bg-[#353535]">
            <div className="absolute left-0 w-full top-36 flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="70.211"
                height="70.211"
                viewBox="0 0 70.211 70.211"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="사각형_202"
                      data-name="사각형 202"
                      width="70.211"
                      height="70.211"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="그룹_160"
                  data-name="그룹 160"
                  transform="translate(0 0)"
                >
                  <g
                    id="그룹_159"
                    data-name="그룹 159"
                    transform="translate(0 0)"
                    clipPath="url(#clip-path)"
                  >
                    <path
                      id="패스_1737"
                      data-name="패스 1737"
                      d="M40.823,20.644a3.876,3.876,0,1,1-3.879-3.877,3.878,3.878,0,0,1,3.879,3.877"
                      transform="translate(29.388 14.9)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1738"
                      data-name="패스 1738"
                      d="M0,20.644a3.876,3.876,0,1,0,3.876-3.877A3.875,3.875,0,0,0,0,20.644"
                      transform="translate(0 14.9)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1739"
                      data-name="패스 1739"
                      d="M20.177,40.823a3.876,3.876,0,1,1,3.877-3.876,3.875,3.875,0,0,1-3.877,3.876"
                      transform="translate(14.488 29.388)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1740"
                      data-name="패스 1740"
                      d="M20.178,0a3.876,3.876,0,1,0,3.876,3.879A3.877,3.877,0,0,0,20.178,0"
                      transform="translate(14.487 0)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1741"
                      data-name="패스 1741"
                      d="M28.622,3.254a2.559,2.559,0,1,0,2.557,2.557,2.556,2.556,0,0,0-2.557-2.557"
                      transform="translate(23.159 2.892)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1742"
                      data-name="패스 1742"
                      d="M34.505,9.063a2.559,2.559,0,1,0,2.559,2.557,2.558,2.558,0,0,0-2.559-2.557"
                      transform="translate(28.389 8.054)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1743"
                      data-name="패스 1743"
                      d="M34.505,25.712a2.56,2.56,0,1,0,2.559,2.559,2.559,2.559,0,0,0-2.559-2.559"
                      transform="translate(28.389 22.849)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1744"
                      data-name="패스 1744"
                      d="M28.62,31.6a2.559,2.559,0,1,0,2.557,2.557A2.556,2.556,0,0,0,28.62,31.6"
                      transform="translate(23.159 28.081)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1745"
                      data-name="패스 1745"
                      d="M10.888,31.754a2.557,2.557,0,1,0,2.557,2.557,2.559,2.559,0,0,0-2.557-2.557"
                      transform="translate(7.398 28.219)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1746"
                      data-name="패스 1746"
                      d="M4.847,25.635A2.56,2.56,0,1,0,7.406,28.2a2.562,2.562,0,0,0-2.559-2.561"
                      transform="translate(2.03 22.781)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1747"
                      data-name="패스 1747"
                      d="M5,9.14A2.559,2.559,0,1,0,7.56,11.7,2.56,2.56,0,0,0,5,9.14"
                      transform="translate(2.168 8.123)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1748"
                      data-name="패스 1748"
                      d="M11,3.061A2.559,2.559,0,1,0,13.558,5.62,2.559,2.559,0,0,0,11,3.061"
                      transform="translate(7.502 2.721)"
                      fill="#fff"
                    />
                    <path
                      id="패스_1749"
                      data-name="패스 1749"
                      d="M20.74,26.966a4.648,4.648,0,1,1,4.644-4.648,4.653,4.653,0,0,1-4.644,4.648m0-6.463a1.815,1.815,0,1,0,1.811,1.815A1.817,1.817,0,0,0,20.74,20.5"
                      transform="translate(14.3 15.703)"
                      fill="#fff"
                    />
                    <rect
                      id="사각형_200"
                      data-name="사각형 200"
                      width="3.777"
                      height="12.865"
                      transform="matrix(0.707, -0.707, 0.707, 0.707, 22.065, 28.685)"
                      fill="#fff"
                    />
                    <rect
                      id="사각형_201"
                      data-name="사각형 201"
                      width="18.218"
                      height="3.778"
                      transform="translate(35.981 35.104) rotate(-44.595)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>

              <h1 className="text-white banner-title text-5xl mt-6">
                Wellcome to dodory
              </h1>
              <p className="text-white text-center mt-6">
                저희는 언제나 정성으로 보살핀 사랑스러운 다육이와 함께하고
                있습니다 <br />
                저희 dodo:)ry와 남다른 하루를 시작해보세요
              </p>
            </div>
            <div className="w-full h-full flex items-end">
              <div className="w-full">
                <div className="w-full h-[400px] lg:h-full relative flex justify-end items-end">
                  <img
                    src="/index/main_bh.png"
                    className="w-full h-full lg:h-auto object-cover lg:object-contain z-20"
                    alt="메인 이미지"
                  />
                </div>
              </div>
              <img
                src="/index/object1.png"
                className="absolute bottom-[5%] w-[180px] lg:w-[13%] origin-bottom object1"
                alt="object1"
              />
              <img
                src="/index/object2.png"
                className="absolute bottom-[15%] w-[150px] lg:w-[12%] left-[23%] origin-bottom object2"
                alt="object2"
              />
              <img
                src="/index/object3.png"
                className="absolute bottom-[10%] w-[250px] lg:w-[22%] right-0 lg:right-[15%] origin-bottom object3"
                alt="object3"
              />
            </div>
          </article>
        </main>
        <style>{`
      .banner-title{
        font-family: Oooh Baby;
      }
      .object1{
        animation:move 5s ease-in-out infinite;
      }
      .object2{
        animation:move 6s ease-in-out infinite;
      }
      .object3{
        animation:move 8s ease-in-out infinite;
      }

      @keyframes move { 
        0%{
          transform:rotate(5deg);
        }
        50%{
          transform:rotate(-5deg);
        }
        100%{
          transform:rotate(5deg);
        }
      }
    `}</style>
      </Layout>
    </CustomCursorManager>
  );
};

export default Home;
//참고 템플릿 찾기

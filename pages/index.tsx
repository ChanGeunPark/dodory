import type { NextPage } from "next";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useContext, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "@components/Layout";
import Image from "next/image";
import SucculentButton from "@components/SucculentButton";
import { Product } from "@prisma/client";
import CustomCursorContext from "@components/CustomCursor/context/CustomCursorContext";
import CustomCursorManager from "@components/CustomCursor/context/manager";
import CustomCursor from "@components/CustomCursor";
import DodoryImg from "@components/LandingLayout3";
import useUser from "@libs/client/useUser";
import LandingLayout3 from "@components/LandingLayout3";
import LandingLayout4 from "@components/LandingLayout4";
import client from "@libs/server/client";
import { motion } from "framer-motion";
import { BookPlant, Spline3d } from "@components/Spline3d";

const Home: NextPage<{ products: Product[] }> = ({ products }) => {
  return (
    <CustomCursorManager>
      <CustomCursor />
      <Layout>
        <main>
          <article className="w-full h-screen relative z-0">
            <Spline3d />
            <div className="absolute left-0 w-full top-24 flex flex-col justify-center items-center z-40 pointer-events-none">
              <h1 className="text-white mainText text-5xl mt-6">
                Wellcome to dodory
              </h1>
              <p className="text-white text-center mt-6">
                저희는 언제나 정성으로 보살핀 사랑스러운 다육이와 함께하고
                있습니다 <br />
                저희 dodo:&#41;ry와 남다른 하루를 시작해보세요
              </p>
            </div>
          </article>

          <article className="banner h-screen w-full overflow-hidden relative bg-[#353535] hidden">
            <div className="absolute left-0 w-full top-36 flex flex-col justify-center items-center z-40">
              <h1 className="text-white mainText text-5xl mt-6">
                Wellcome to dodo:&#41;ry
              </h1>
              <p className="text-white text-center mt-6">
                저희는 언제나 정성으로 보살핀 사랑스러운 다육이와 함께하고
                있습니다 <br />
                저희 dodo:&#41;ry와 남다른 하루를 시작해보세요
              </p>
            </div>
            <div className="w-full h-full flex items-end">
              <div className="w-full">
                <div className="w-full h-[500px] relative flex justify-end items-end">
                  <img
                    src="/index/main_bh.png"
                    className="w-full h-full object-cover z-30"
                    alt="메인 이미지"
                  />
                  {/* <img
                    src="/index/>main_bh_black.png"
                    className="w-full h-full object-cover z-10"
                    alt="메인 이미지"
                  /> */}
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
              <div className="w-full h-[560px] absolute bottom-0 left-0 z-20 hidden">
                <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <radialGradient
                      id="Gradient1"
                      cx="50%"
                      cy="50%"
                      fx="10%"
                      fy="50%"
                      r=".5"
                    >
                      <animate
                        attributeName="fx"
                        dur="34s"
                        values="0%;3%;0%"
                        repeatCount="indefinite"
                      />
                      <stop offset="0%" stopColor="#ff0" />
                      <stop offset="100%" stopColor="#ff00" />
                    </radialGradient>
                    <radialGradient
                      id="Gradient2"
                      cx="50%"
                      cy="50%"
                      fx="10%"
                      fy="50%"
                      r=".5"
                    >
                      <animate
                        attributeName="fx"
                        dur="23.5s"
                        values="0%;3%;0%"
                        repeatCount="indefinite"
                      />
                      <stop offset="0%" stopColor="#0ff" />
                      <stop offset="100%" stopColor="#0ff0" />
                    </radialGradient>
                    <radialGradient
                      id="Gradient3"
                      cx="50%"
                      cy="50%"
                      fx="50%"
                      fy="50%"
                      r=".5"
                    >
                      <animate
                        attributeName="fx"
                        dur="21.5s"
                        values="0%;3%;0%"
                        repeatCount="indefinite"
                      />
                      <stop offset="0%" stopColor="#f0f" />
                      <stop offset="100%" stopColor="#f0f0" />
                    </radialGradient>
                  </defs>
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="url(#Gradient1)"
                  >
                    <animate
                      attributeName="x"
                      dur="20s"
                      values="25%;0%;25%"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      dur="21s"
                      values="0%;25%;0%"
                      repeatCount="indefinite"
                    />
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 50 50"
                      to="360 50 50"
                      dur="17s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="url(#Gradient2)"
                  >
                    <animate
                      attributeName="x"
                      dur="23s"
                      values="-25%;0%;-25%"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      dur="24s"
                      values="0%;50%;0%"
                      repeatCount="indefinite"
                    />
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 50 50"
                      to="360 50 50"
                      dur="18s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="url(#Gradient3)"
                  >
                    <animate
                      attributeName="x"
                      dur="25s"
                      values="0%;25%;0%"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      dur="26s"
                      values="0%;25%;0%"
                      repeatCount="indefinite"
                    />
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="360 50 50"
                      to="0 50 50"
                      dur="19s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </svg>
              </div>
            </div>
          </article>

          <article className="bg-[#F9F9F9] h-[787px] relative">
            <section className="flex flex-col items-center absolute w-full h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137.823"
                height="151.188"
                viewBox="0 0 137.823 151.188"
                className="mt-40 hidden"
              >
                <g
                  id="그룹_191"
                  data-name="그룹 191"
                  transform="translate(-891.088 -1248)"
                >
                  <path
                    id="패스_1705"
                    data-name="패스 1705"
                    d="M137.507,106.33a4.523,4.523,0,0,0-2.08-.3c-1.044,0-3.006-.107-4.364-.235-2.02-.19-2.393-.323-2.057-.728.227-.273.3-.5.171-.5s-.081-.3.113-.66c.787-1.469.006-1.722-5.026-1.623l-4.723.094-.161-5.393a30.274,30.274,0,0,1,.134-5.73.657.657,0,0,0-.088-.8,2.371,2.371,0,0,1-.266-1.489c.118-1.025.127-1.028,3.406-1.224,3.5-.208,4.938-.716,4.929-1.735s-.509-1.53-1.848-1.926c-2.171-.647-11.63-1.426-17.39-1.435-5.087-.006-5.526-.059-5.385-.647.329-1.366,4.157-28.223,4.163-29.208a22.434,22.434,0,0,1,2.354-.028c2.444.037,3.5-.416,3.492-1.505,0-.327,1.176-4.149,2.616-8.491s2.523-8.151,2.4-8.464c-.181-.472-.724-.535-3.258-.371l-3.039.2,2.894-1.906c3.476-2.29,6.757-5.347,8.208-7.647,1.494-2.37,1.7-3.219.848-3.49-.588-.187-5.954.872-7.579,1.494-.367.142-.194-.515.557-2.119,1.323-2.83,2.752-10.58,2.391-12.981-.317-2.114-.845-2.083-6.311.371-5.232,2.347-8.215,4.316-11.452,7.552l-2.423,2.424-.226-5.69C98.319,7.292,97.377.859,96.77.271A3.579,3.579,0,0,0,94.894.013c-.909.063-5.524,4.141-7.2,6.367a35.906,35.906,0,0,0-4.669,9.2,6.62,6.62,0,0,1-.818,2.009,15.867,15.867,0,0,1-1.65-2.768C78.747,11.39,76.018,7.95,74.977,7.8a1.338,1.338,0,0,0-1.319.731,64.984,64.984,0,0,0-2.8,10.769c0,1.414-.457,1.154-2.544-1.45C63.674,12.06,57.753,7.221,53.916,6.081c-1.85-.549-3.606-.7-3.962-.349s2.677,9.782,4.616,14.3a42.8,42.8,0,0,1,1.788,4.509A13.426,13.426,0,0,1,54.75,23.8c-2.647-1.35-7.308-2.909-8.7-2.909a4.14,4.14,0,0,0-2.009.47c-.609.445-.607.514.047,1.37.38.5,1.307,1.929,2.06,3.184a26.591,26.591,0,0,0,6.233,7.069,4.238,4.238,0,0,1,1.3,1.139,8.085,8.085,0,0,1-2.831.365l-2.832.107.08,1.087c.044.6,1.019,4.573,2.167,8.836,2.318,8.617,2.005,8.152,5.5,8.162a4.5,4.5,0,0,1,2.087.31c.1.169.536,2.677.959,5.573,1.222,8.347,3.948,24.787,4.17,25.146.362.585-.875.769-5.214.777A67.85,67.85,0,0,0,38.7,86.932c-3.808,1.128-5.69,2.194-7.67,4.341a8.029,8.029,0,0,0-2.554,6.436,8.328,8.328,0,0,0,2.534,6.377l1.189,1.158-8.473.121c-10,.143-9.51-.08-9.51,4.348,0,4.214.247,5.032,1.694,5.637,1.125.471,1.235.655,1.285,2.177.03.915.071,1.869.091,2.12.024.311-.869.531-2.814.688a13.248,13.248,0,0,0-3.089.47c-.445.445-.848,11.251-.438,11.746.268.323.263.536-.018.709-.25.154-.274.408-.065.672a6.166,6.166,0,0,1,.517,2.126l.181,1.7-1.5.219c-.827.12-2.984.24-4.794.266a12.515,12.515,0,0,0-4.333.575c-.994.5-1.033.614-.825,2.418.121,1.039.252,3.339.29,5.11.06,2.72.177,3.278.75,3.585a56.49,56.49,0,0,0,7.7.855c5.574.393,18.8.464,64.323.353,31.518-.079,57.475-.246,57.68-.373.227-.141.357-2.044.33-4.849-.023-2.541-.046-5.18-.046-5.867a4.662,4.662,0,0,0-.193-1.553,6.384,6.384,0,0,0-2.562-.306H126l.169-24.4,4.06-.254a35.708,35.708,0,0,1,5.326-.032c2.107.368,2.366-.059,2.244-3.684a20.908,20.908,0,0,0-.291-3.489M124.355,86.363c-.205.333-4.258.309-14.031-.083-3.517-.141-7.793-.3-9.5-.352-3.088-.1-3.094-.1-1.1-.374,4.865-.673,25.133-.006,24.629.809M45.092,103.622c-3.95-.567-5.992-1-7.006-1.479-2.855-1.355-2.081-1.42,14.819-1.279,9.525.08,19.426-.037,23.8-.281,4.12-.23,14.954-.581,24.077-.781s16.708-.44,16.856-.531c.455-.281.794,2.822.356,3.26-.275.276-9.516.467-30.253.625-16.422.126-32.489.319-35.7.426s-6.34.127-6.944.04m-.913,4.495c-1.1,0-1.558-.068-1.005-.151a8.048,8.048,0,0,1,2.01,0c.553.083.1.151-1,.151M117.9,23.129c1.592-.43,3.015-.781,3.163-.781a10.421,10.421,0,0,1-1.612,2.724,25.113,25.113,0,0,1-8.442,7.537c-2.112,1.233-2.749,1.432-4.582,1.416l-2.13-.017,1.279-.964c.7-.531,3.114-2.8,5.356-5.05,4.073-4.083,4.077-4.086,6.968-4.865M97.345,24.345c1.039-3.777,2.033-5.383,5.378-8.684A34.018,34.018,0,0,1,113.63,8.474C115.5,7.663,117.063,7,117.106,7c.313,0,.354,2.173.086,4.427a25.714,25.714,0,0,1-2.307,8.364A40.726,40.726,0,0,1,103.748,32.4l-2.475,1.644H97.415c-3.806,0-4.728-.258-3.769-1.055.8-.667,2.767-5.253,3.7-8.642M83.934,21.889a17.867,17.867,0,0,1,.635-3.837A50.944,50.944,0,0,1,89.5,7.916C90.947,5.822,94.583,2.1,94.886,2.4c.482.483.562,14.788.1,17.7a31.849,31.849,0,0,1-5.1,12.757c-.822,1.09-1.051,1.18-2.993,1.18a4.784,4.784,0,0,1-2.323-.357,107.935,107.935,0,0,1-.632-11.8M74.181,16.5c1.183-5.834.936-5.456,2.234-3.424a32.061,32.061,0,0,1,4.128,10c.818,3.86.941,9.5.227,10.358-.521.629-3.488.855-4.291.325-.651-.428-1.827-2.982-2.706-5.874-.921-3.034-.842-5.216.408-11.386m-21.6-8.887c0-.55.237-.509,1.919.337,4.536,2.276,8.914,6.28,13.47,12.318,2,2.656,2.152,2.99,2.152,4.809a15.23,15.23,0,0,0,2.36,7.695l.966,1.268H68.188L64.477,30.3a51.786,51.786,0,0,1-5.075-5.84c-2.475-3.8-6.818-14.524-6.818-16.841M51.107,28.992c-1.895-2.122-4.232-5.806-3.895-6.143.26-.261,3.189.768,5.475,1.924,3.952,2,5.976,3.452,10.433,7.5l1.949,1.769h-7.65l-2.228-1.487a26.026,26.026,0,0,1-4.084-3.563m3.65,22.043-.323-1.279c-.178-.7-.995-3.937-1.817-7.186s-1.495-6.06-1.495-6.247c0-.32,62.387-1.045,62.7-.729.177.178-4.534,14.61-4.884,14.96-.144.144-12.4.313-27.224.373Zm7.356,2.825-.027-.829,7.925.1,7.924.1.46,1.827a6.8,6.8,0,0,0,4.361,4.575c2.642.872,6.011-1.088,7.488-4.357l.791-1.751,6.249-.224c3.436-.124,6.3-.168,6.374-.1a44.005,44.005,0,0,1-.852,5.967c-.123.6-.429.822-1.12.822a3.985,3.985,0,0,0-2.368,1.42C98,62.723,97.9,62.978,97.9,64.908c0,1.8.139,2.212,1.019,3.057a11.812,11.812,0,0,0,1.65,1.342c.6.346.589.7-.12,6.4-.414,3.316-.815,6.218-.892,6.446-.194.571-3.276.8-16.275,1.228-6.13.2-12.476.458-14.1.575l-2.959.213L65.984,81.4c-.128-1.52-.338-3.425-.468-4.231-.214-1.345-.167-1.466.587-1.466a4.6,4.6,0,0,0,2.239-1.42,4,4,0,0,0,.99-4.967,6.556,6.556,0,0,0-4.076-2.725L64.12,66.36l-.99-5.836c-.545-3.209-1-6.207-1.017-6.664M46.737,89.248c9.99-1.586,40.891-2.3,61.12-1.419L118,88.273v1.682l-11.237.007c-10.969.006-22.829.294-44.675,1.085-13.134.475-22.658.622-22.658.351,0-.341,4.794-1.75,7.309-2.15m-9.056,3.109c.459-.1,6.344-.254,13.076-.351s19.067-.381,27.408-.632,20.676-.467,27.408-.481l12.243-.025v3.289l-5.3.089c-2.914.048-13.439.346-23.389.661-26.908.851-53.721.974-53.718.245a4.809,4.809,0,0,1,2.271-2.795M35.11,96.71c.077-.077,11.07-.22,24.43-.317s27.5-.34,31.416-.541,11.608-.481,17.084-.624l9.958-.26v3.318l-4.842.211c-2.662.117-10.762.308-18,.427s-15.54.364-18.455.548c-5.163.327-38.488.4-40.086.094-.528-.1-.945-.592-1.223-1.436a3.451,3.451,0,0,1-.284-1.42m-6.371,11.276a1.416,1.416,0,0,1,.914,0c.251.1.045.184-.457.184s-.709-.083-.457-.184m-3.929,2.465c1.191-.014,1.494.079,1.1.334-.65.421-1.031.421-2.01,0-.556-.238-.337-.318.913-.334m-5.69-3c.112.178-.125.41-.525.514-.471.122-.728.008-.728-.324,0-.564.935-.707,1.253-.19m-.614,5.924c.353.27.708.536.793.592s-.2.1-.64.1c-.486,0-.792-.229-.792-.593,0-.508.093-.523.639-.1m3.823,8.237c5.285-.12,22.435-.393,38.112-.606s34.919-.544,42.757-.735,15.527-.349,17.084-.349l2.833,0V127.6h-3.966c-2.182,0-4.937.1-6.121.222a6.087,6.087,0,0,1-2.418-.05c-.145-.15-22.181-.29-48.97-.313l-48.707-.041-.211-5.582Zm100.786,7.077c0,.429-.28.429-1.279,0-.647-.278-.616-.317.274-.34.553-.014,1,.139,1,.34M9.462,140.386l-3.107-.228,3.655-.043a20.132,20.132,0,0,1,4.385.271c.852.365.025.365-4.933,0m42.939.261c-1.005,0-1.371-.074-.817-.158a6.559,6.559,0,0,1,1.828.006c.45.086-.006.155-1.011.152m22.292.013c-.8,0-1.174-.067-.826-.159a4.016,4.016,0,0,1,1.462-.006c.455.086.17.162-.636.165M72.5,138.112c-27.938-.054-52.708-.146-55.044-.2l-4.248-.1-.2-1.724a6.183,6.183,0,0,1-.044-1.879c.548-.558,105.556-1.351,109.112-.825.925.139.982.266,1.1,2.49l.12,2.345Zm43.853-19.473c-4.623.08-25.014.316-45.315.523s-40.322.474-44.493.591l-7.583.211v-4.315l5.391-.229c2.965-.127,16.656-.4,30.423-.606s29.638-.541,35.265-.741,15.611-.364,22.185-.364h11.951l.193,1.187c.107.654.237,1.73.291,2.393l.1,1.205Zm10.6-15.163a8.037,8.037,0,0,1-3.149.366c-1.856,0-2.841-.133-2.7-.366a8.066,8.066,0,0,1,3.15-.365c1.856,0,2.841.134,2.7.365m4.111,8.4c-1.137,0-1.406-.1-1.005-.36.722-.466,2.558-.466,2.558,0,0,.2-.7.363-1.553.36"
                    transform="translate(891.088 1248)"
                    fill="#3d3f47"
                  />
                  <path
                    id="패스_1706"
                    data-name="패스 1706"
                    d="M83.76,78.988a4.131,4.131,0,0,0,5.323-1.818,3.074,3.074,0,0,0-.521-4.195c-1.175-1.267-4.048-1.323-5.464-.1-1.9,1.636-1.514,5.241.662,6.117"
                    transform="translate(891.088 1248)"
                    fill="#3d3f47"
                  />
                </g>
              </svg>
              <div className="w-[220px] h-[220px] mt-20 relative">
                <BookPlant />
              </div>

              <h2 className="font-bold text-3xl relative -translate-y-3">
                + DODO:&#41;RY 다육이 +
              </h2>
              <p className="text-center mt-9 text-zinc-600 mb-12">
                저희 도도리는 고객님들의 행복한 하루를 다육이들과
                <br />
                도도리표처럼 따듯했던 시간을 다시금 돌아보길 원합니다
                <br />
                반복되는 일상, 똑같은 일에 지친 만큼 다육이들과 좋은 새로운
                <br />
                시간들을 보내시길 바랍니다
              </p>

              <SucculentButton name="다육이 보러가기" link="/" />
            </section>
            <img
              src="/index/bulb.png"
              alt="전구"
              className="absolute left-1/2 -translate-x-1/2 -top-3"
            />
            <img
              src="/index/background.png"
              className="w-full h-full object-cover"
              alt="다육이 배경"
            />
            {/*배경이미지*/}
          </article>
          <LandingLayout3 products={products} />
          <LandingLayout4 products={products} />

          <article className="w-full h-[350px] flex justify-center items-center bg-[#353535] relative">
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-center text-white">
                어떤 종류의 다육이를 찾으시나요?
              </h2>
              <p className="text-white text-center mt-3 opacity-70">
                원하시는 다육이를 검색해보세요
              </p>
              <div className="flex space-x-2 mt-12">
                <input
                  type="text"
                  className="w-[300px] py-3 rounded-md bg-transparent text-zinc-200 border border-white px-3 outline-none "
                  placeholder="키워드를 검색해보세요"
                />
                <button className="w-[150px] bg-blue-400 text-white text-center py-3 rounded-md">
                  다육이 검색
                </button>
              </div>
            </div>
            <span className="w-[2px] h-24 bg-[#ECECEC] absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 mix-blend-difference">
              {/*line*/}
            </span>
          </article>
        </main>
        <style>{`
        main *{
          cursor:none;
        }
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

export async function getStaticProps(context: any) {
  const products = await client?.product.findMany({});

  return {
    props: {
      ok: true,
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default Home;
//참고 템플릿 찾기

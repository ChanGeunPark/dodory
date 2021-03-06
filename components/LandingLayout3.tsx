import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Product } from "@prisma/client";
import Link from "next/link";
import { useContext, useEffect } from "react";
import CustomCursorContext from "./CustomCursor/context/CustomCursorContext";
import { motion, useViewportScroll } from "framer-motion";
import SliderPage from "./SliderPage";

interface ProductsResponse {
  products: Product[];
}

export default function LandingLayout3({ products }: ProductsResponse) {
  const { setType } = useContext(CustomCursorContext);
  const { scrollY, scrollYProgress } = useViewportScroll();

  useEffect(() => {
    // scrollY.onChange(() => {
    //   console.log(scrollY.get(), scrollYProgress.get());
    // });
  }, [scrollY, scrollYProgress]);

  return (
    <article className="w-full h-[760px] bg-[#F9F9F9]">
      <section className="container mx-auto flex flex-col items-center">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="484.468"
          height="121.717"
          viewBox="0 0 484.468 121.717"
          className="mt-32 scale-x-[-1]"
        >
          <motion.path
            id="패스_1763"
            data-name="패스 1763"
            d="M486.334,116.353l-44.387-.126c-14.7,0-12.934-39.055-5.039-41.995,1.866-.695,8.063,12.094,8.315,14.362.455,4.094-5.8,21.165-6.467,24.525s-14.194,7.727-28.724,7.727c-13.27,0-33.008-4.619-15.286-.924s21.165-36.535,5.8-37.543-21-10.667-18.394-8.147c2.486,2.405,9.661,5.471,21.249,5.123,8.4-.252,1.764-10.415,2.436-10.163s1.68,4.451-4.787,6.047-12.083-5.337-8.651-4.955c3.78.42,13.7-.6,7.9-2.268C389.453,64.909,380.97,55.5,382.146,55.082s6.635,0,12.346,2.268c5.61,2.228,15.79,11.255,10.751,9.491s-3.444-18.73-2.352-18.73,3.377,2.362,4.871,8.231c1.176,4.619,1.26,9.827.336,9.743s7.979-11.423,9.491-16.462c.638-2.125,3.276,10.079,1.092,14.7-2.376,5.026-6.551,6.131-8.315,5.8-2.825-.538,11.577-9.259,13.018-9.659,1.512-.42.84,8.9-4.367,13.354-4.834,4.132-17.806,5.963-4.283,5.459,11.674-.435,24.357-7.055,20.829-9.071s-9.659.84-5.963.42,12.347-12.514,8.819-13.186-14.53,7.475-11.927,7.475,14.7-11.507,15.958-20.493c.117-.832-12.766,6.551-10.247,7.475.959.352,5.454-9.28,3.863-9.407-4.2-.336-15.874,14.782-14.53,14.95s7.643-20.577,5.291-20.577S411.794,50.631,412.8,49.119s-.168-19.318-2.184-19.486-5.459,15.2-5.123,15.706-2.006-7.709-3.192-7.643c-1.512.084-4.031,9.911-2.268,9.407,2.234-.638-11.423-15.37-11.927-12.682s4.284,15.874,3.276,14.362-13.27-12.85-13.774-7.727,3.858,11.093,5.039,9.827-12.094-6.215-11.759-4.367A29.025,29.025,0,0,0,380.466,61.8c7.255,6.231,18.226,7.223,15.034,6.215s-17.457-3.462-17.218-1.932c.42,2.688,8.063,8.147,8.819,6.8.4-.712-6.131-2.016-7.727,0-2.96,3.739-8.972,13.625-9.071,16.546-.092,2.727,4.758,15.807,7.386,22.679a2.963,2.963,0,0,1-2.918,4.224l-33.889-.144a9.722,9.722,0,0,1-6.206-2.233c-12.461-10.43.013-45.166.013-41.625,0,7.245-1.811,43.017-4.981,44.828-12.562,7.178-33.231,3.14-39.847,1.358-11.773-3.17,10.783,1.99,19.471-.906,4.075-1.358,9.056-25.357-4.981-38.489s-27.938-9.93-6.792-7.245c28.527,3.623,38.224-3.953,37.583-3.17-4.075,4.981-13.841,3.771-20.376-1.358C308.454,62.4,315.923,48.5,322.916,50.6c4.528,1.358-4.528,4.981-2.717,9.962,1.547,4.255,9.056-9.056,9.962-3.17,1.11,7.216-14.256,16.481-21.282,7.7-5.434-6.792.453-15.4,5.434-18.565a16.632,16.632,0,0,1,16.754-.906c12.184,6.092,15.332,17.374,4.981,10.867-15.848-9.962-13.135-13.726-2.717-11.773,14.49,2.717,19.018-4.075,13.132-6.792s-23.546,7.7-24.452-1.811c-.6-6.279,7.7-36.678,13.584-31.7s-12.679,26.263-5.434,24.452,17.207-24.9,19.924-14.49-28.527,27.169-41.659,26.716c-14.058-.485-3.622-37.583,1.359-33.055s-10.867,21.735.906,19.018S312.954,4.867,320.2,7.583s-2.717,33.508-19.924,29.433S271.749,8.489,277.182,9.847s9.962,19.471,13.131,18.565-9.056-26.263-2.264-24,12.226,25.357,9.056,33.961c-3.223,8.749-19.924,10.867-33.055,7.245s-6-12.475,5.886-6.339c14.037,7.245,18.112-2.264,15.848-6.339s-19.471-11.32-20.376-4.075,13.131,3.17,21.282,9.962,10.415,22.641,9.056,20.829-13.131-18.112-11.773-7.7,9.509,15.4,14.037,14.49-12.452-1.132-15.848,2.264l.586,41.61a6.522,6.522,0,0,1-6.522,6.614H239.8c-17.389-1.358-11.874-33.358-11.339-36.66,1.008-6.215-9.278-8.307-6.551-7.811,2.772.5,8.483,2.268,8.651,5.123.2,3.339.252,29.648.252,34.52s-7.185,9.359-25.533,11.171c-15.672,1.548-31.748-3.864-36.619-5.039-1.569-.379,6.551,3.612,21.921,5.291,11.315,1.237,6.8-32.924.5-33.68-18.263-2.192-37.32-15.771-21.249-9.911,23.265,8.483,30.747,7.558,43.926,4.116,11.255-2.94,26.037-17.3,26.037-17.3s-12.021,8.377-16.63,10.5c-5.291,2.436-25.785,5.963-19.4,6.131s10.919-7.673,18.73-12.766c7.727-5.039,17.554-7.811,14.614-7.643-7.3.417-30.656,15.706-26.877,14.446s15.454-22.761,18.9-28.556,14.11-15.2,7.307-10.079-12.094,15.37-19.4,24.861S187.726,78.346,201,75.91s18.73-24.861,20.829-32.672,6.467-31.16,6.467-31.16-8.567,26.037-10.919,34.688-12.262,21.753-10.163,20.493,4.283-15.454,8.4-30.908,7.559-16.714,5.963-15.454c-4.285,3.383-14.362,33.848-16.546,38.551s-10.5,15.622-5.879,11.255-2.1-47.622.252-41.407-8.567,42.835-5.291,42.583S196.832,54,196.545,47.186c-.336-7.979-8.567-30.488-6.131-26.961s3.948,41.491,1.008,39.475-4.283-21.837-5.543-28.22-8.063-20.661-6.383-17.134,4.116,13.378,4.787,19.57c.756,6.971-.588,13.69,1.092,23.1,1.573,8.811,7.139,14.277,2.6,15.874-5.963,2.1-12.6-16.714-14.782-22.845s-8.819-16.378-8.819-16.378,7.811,7.643,9.827,13.942,15.37,26.289,10.079,23.853S168.24,47.605,168.24,47.605s2.688,10.079,5.963,16.462,13.774,17.638,13.774,17.638-6.887-1.008-15.538-6.8-8.483-16.21-7.9-14.11a21.9,21.9,0,0,0,10.247,12.346C182.014,77.338,186.13,77,187.726,77s-6.131-4.871-8.147-5.375-16.714,2.52-17.722,4.619c-.779,1.622,1.2,23.646,2.14,33.581a4.389,4.389,0,0,1-4.369,4.8s-45.451-.044-47.082-.044-6.544-3.9-6.071-18.213c.362-10.964,9.6-20.841,10.149-19.572s-6.433,37.241-8.064,37.876c-5.348,2.08-29.811,12.232-53.1.815-1.22-.6,16.038,5.437,22.925,5.437,2.9,0,4.2-30.1.4-30.1-10.424,0-33.882-14.94-28.989-11.859,2.28,1.435,21.873,7.285,29.282,7.467,5.616.138,32.744-11.807,36.459-12.351s12.5-7.068,11.055-6.252-2.356.181-6.977-2.084-23.2,3.262-15.585,3.262,18.847-9.061,15.585-8.064-6.8-3.9-12.686.634-17.936,2.489-14.674,2.308,9.443-2.949,11.865-6.023c2.356-2.99,4.984-11.326,5.98-11.779s-4.621,2.976-9.514,2.265c-5.618-.815-14.5,8.971-12.686,10.149,1.446.94,6.524-7.249,7.068-12.686.375-3.75-2.809-12.142-1.54-10.964,1.7,1.579-4.078,3.443-7.611,5.89-5.379,3.724-5.89,12.686-4.078,12.957,2.515.377,1.035-7.782-.181-10.783-1.359-3.353-7.172-8.931-6.524-6.524.383,1.423-1.564,6.43-1.45,10.783.075,2.851,1.665,5.907,3.171,5.8,1.356-.1,1-5.255-3.262-8.608-3.931-3.095-8.608-4.8-7.883-4.712s.945,6.692,1.178,9.6c.362,4.531,7.883,11.417,5.074,10.239S66.968,49.436,59.628,48.258s-8.517-4.531-7.249-3.624-1.111,6.835,2.9,11.779c6.615,8.155,25.643,11.87,21.022,8.064s-.453-8.155,1.269-8.246,1.722-2.084,2.447-1.9.091,1.269,1.269,1.812,4.984.544,5.98,4.984-7.947,5.261-6.615,5.527c1.359.272,2.9,1.293,7.158,1.359,5.8.091,12.707-6.879,13.523-5.883S98.773,72.814,85.543,73.085c-2.357.048,8.517-2.99,15.313-2.9,5.383.072,21.022-.453,13.773,3.081s-26.821,1.54-25.462,1.54,13.229-1.178,17.76-.091,2.9,5.618,2.628,6.524-8.064,3.353-12.958,2.175c-5.685-1.369-20.3-8.155-16.944-8.789,2.2-.417,7.7,9.7-5.074,9.061-11.692-.58-2.084-8.789-1-8.427.926.309-.091,4.984-8.246,4.893S50.2,74.445,55.46,75.441,73.3,71.823,71.952,72.36c-8.88,3.534-15.4-6.615-14.407-6.615s4.531,1.9,7.974,1.993,9.877-.815,8.427-.453c-5.736,1.434-14.86-1.54-17.85-6.705s-15.676-4.8-15.676-4.8a17.74,17.74,0,0,0,5.074,9.786c4.861,4.662,17.4,3.715,11.87,5.98-7.466,3.06-8.948-2.057-16.854,2.084-3.806,1.993-8.7,8.336-6.705,7.521,3.215-1.315,11.055.091,11.055.091l2.907,25.811a6.45,6.45,0,0,1-6.409,7.172H3.869"
            transform="translate(-2.869 -2.851)"
            fill="none"
            stroke="#484848"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              default: { duration: 3, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          />
        </motion.svg>
        <h2 className="text-center text-zinc-500 mt-6">
          무료한 일상을 보내시고 계시다면 당신의 마음을 녹여줄
          <br />
          다육이들과 일상을 함께해보세요
        </h2>

        <div className="w-full flex justify-end mt-6">
          <Link href="/">
            <a
              className="flex items-end"
              onMouseOver={() => setType("link")}
              onMouseOut={() => setType("default")}
            >
              <span className="mr-2">다육이 더보기</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="36.742"
                height="55.83"
                viewBox="0 0 36.742 55.83"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="사각형_199"
                      data-name="사각형 199"
                      width="36.742"
                      height="55.83"
                      fill="#6a6a6a"
                    />
                  </clipPath>
                </defs>
                <g
                  id="그룹_157"
                  data-name="그룹 157"
                  transform="translate(-1543.258 -1497.831)"
                >
                  <g
                    id="그룹_156"
                    data-name="그룹 156"
                    transform="translate(1543.258 1497.83)"
                  >
                    <g
                      id="그룹_155"
                      data-name="그룹 155"
                      clipPath="url(#clip-path)"
                    >
                      <path
                        id="패스_1734"
                        data-name="패스 1734"
                        d="M9.742,55.83A6.186,6.186,0,0,1,3.563,49.65v-15.8h-1.4A2.162,2.162,0,0,1,0,31.688v-2.14a2.162,2.162,0,0,1,2.159-2.159H6.613l-.746-.909A12.815,12.815,0,0,1,3.184,15.871a.555.555,0,0,1,.441-.441,12.937,12.937,0,0,1,1.913-.224l.658-.028-.138-.644a12.785,12.785,0,0,1,.78-7.8.556.556,0,0,1,.51-.336h.015A12.835,12.835,0,0,1,12.17,7.457l.575.25.179-.6A12.916,12.916,0,0,1,18.087.094a.559.559,0,0,1,.624,0,12.771,12.771,0,0,1,4.928,6.413L23.81,7l.5-.14a12.92,12.92,0,0,1,3.133-.468h.017a.555.555,0,0,1,.508.336,12.762,12.762,0,0,1,.769,7.86l-.165.752.765-.079a12.867,12.867,0,0,1,3.776.167.556.556,0,0,1,.441.441,12.817,12.817,0,0,1-2.683,10.608l-.747.909h4.454a2.162,2.162,0,0,1,2.159,2.159v2.139a2.162,2.162,0,0,1-2.159,2.159h-1.4v15.8a6.186,6.186,0,0,1-6.179,6.179ZM4.677,49.65a5.071,5.071,0,0,0,5.065,5.065H27.007a5.07,5.07,0,0,0,5.065-5.065v-15.8h-8.69a.557.557,0,0,1,0-1.114h11.2a1.046,1.046,0,0,0,1.045-1.045V29.548A1.046,1.046,0,0,0,34.583,28.5H2.159a1.046,1.046,0,0,0-1.045,1.045v2.139a1.046,1.046,0,0,0,1.045,1.045h11.2a.557.557,0,0,1,0,1.114H4.677Zm1.4-33.342a11.868,11.868,0,0,0-1.446.089l-.43.053-.053.43A11.664,11.664,0,0,0,7.5,26.624c.214.214.444.427.684.631l.156.133h9.473l-.066-.615a11.587,11.587,0,0,0-3.369-7.027,11.655,11.655,0,0,0-8.3-3.437m24.578,0A11.735,11.735,0,0,0,19,26.773l-.066.615H28.4l.156-.134c.24-.205.47-.417.683-.631a11.663,11.663,0,0,0,3.348-9.743l-.053-.43-.43-.053a11.87,11.87,0,0,0-1.447-.089M26.668,7.556a11.733,11.733,0,0,0-10.625,12.2l.008.179.111.141a12.769,12.769,0,0,1,1.7,2.824l.509,1.166.509-1.166a12.881,12.881,0,0,1,8.128-7.176l.283-.084.089-.282a11.61,11.61,0,0,0-.136-7.434L27.1,7.515Zm-19.1.367A11.67,11.67,0,0,0,7.3,14.9l.1.357.367.048a12.828,12.828,0,0,1,6.35,2.709l.778.623.121-.989a12.687,12.687,0,0,1,1.559-4.709l.175-.311-.21-.289A11.739,11.739,0,0,0,8.142,7.556l-.431-.041Zm10.487-6.43a11.822,11.822,0,0,0-4.189,6.4l-.1.383L14.1,8.5a12.8,12.8,0,0,1,2.877,2.587l.43.524.43-.524a12.913,12.913,0,0,1,4.476-3.48l.452-.211L22.6,6.921a11.706,11.706,0,0,0-3.864-5.426L18.4,1.227Z"
                        fill="#6a6a6a"
                      />
                      <path
                        id="패스_1735"
                        data-name="패스 1735"
                        d="M36.185,66.58a.557.557,0,1,1,.557-.557.558.558,0,0,1-.557.557"
                        transform="translate(-17.814 -32.733)"
                        fill="#6a6a6a"
                      />
                    </g>
                  </g>
                  <path
                    id="패스_1736"
                    data-name="패스 1736"
                    d="M5532.3,1540.435h19.441l-4.27,4.27"
                    transform="translate(-3980)"
                    fill="none"
                    stroke="#6a6a6a"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </a>
          </Link>
        </div>
        {/*다육이 슬라이더*/}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="succulent w-full mt-3"
        >
          {products?.map((items) => (
            <SwiperSlide key={items.id}>
              <Link href={`/items/${items.id}`}>
                <a
                  className="block h-[250px] border rounded-xl overflow-hidden relative z-10"
                  onMouseOver={() => setType("link")}
                  onMouseOut={() => setType("default")}
                >
                  <Image
                    src={`https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/${items.mainThumb}/public`}
                    layout="fill"
                    className="w-full h-full object-cover"
                  />
                </a>
              </Link>
              <h2 className="text-center font-medium text-lg mt-2">
                {items.name}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderPage list={[]} />
      </section>
    </article>
  );
}

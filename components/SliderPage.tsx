import { AnyRecord } from "dns";
import { useEffect } from "react";

interface SlideResponse {
  number: number;
  active: boolean;
}

interface SlideResponseProp {
  list: SlideResponse[];
}

export default function SliderPage({ list }: SlideResponseProp) {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="relative -translate-y-[1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      {list?.map((el) => {})}
      <div className="flex items-center slideNum">
        1 <span className="w-9 h-[1px] bg-zinc-500 ml-1">{/* line */}</span>
      </div>
      <div className="flex items-center slideNum text-zinc-400 active">2</div>
      <div className="flex items-center slideNum text-zinc-400">3</div>
      <div className="flex items-center slideNum text-zinc-400">4</div>
      <div className="flex items-center slideNum text-zinc-400">5</div>
      <div className="relative -translate-y-[1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

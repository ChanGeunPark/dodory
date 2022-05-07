import Image from "next/image";

interface DodoryImgResponse {
  src: string;
}

export default function DodoryImg(src: DodoryImgResponse) {
  return (
    <div className="w-full h-full relative bg-gray-200">
      <Image
        src={`https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/${src}/public`}
        layout="fill"
        className="w-full h-full object-cover"
      />
      <img src="" alt="" />
    </div>
  );
}

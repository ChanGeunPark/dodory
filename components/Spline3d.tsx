import dynamic from "next/dynamic";

export function Spline3d() {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
  });

  return (
    // <Spline scene="https://prod.spline.design/NbqCXT93iwZ3tjAN/scene.splinecode" />
    <iframe
      className="relative z-10"
      src="https://my.spline.design/girlflowersdevelop-b6c0fe2c48c266c86e014f132d35a962/"
      frameBorder="0"
      width="100%"
      height="100%"
    ></iframe>
  );
}

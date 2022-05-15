import dynamic from "next/dynamic";

export default function Spline3d() {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
  });

  return (
    <Spline scene="https://prod.spline.design/NbqCXT93iwZ3tjAN/scene.splinecode" />
  );
}

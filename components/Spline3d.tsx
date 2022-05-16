import dynamic from "next/dynamic";

export function Spline3d() {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
  });

  return (
    <Spline scene="https://prod.spline.design/NbqCXT93iwZ3tjAN/scene.splinecode" />
  );
}

export function BookPlant() {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
  });
  return (
    <Spline
      scene="https://prod.spline.design/GHzdi3uELfz37BpW/scene.splinecode"
      className="w-full h-full"
    />
  );
}

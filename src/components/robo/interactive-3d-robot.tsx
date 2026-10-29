import { Suspense, lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

export function InteractiveRobotSpline({ scene, className }: { scene: string; className?: string }) {
  return (
    <Suspense fallback={<div className={`h-full w-full ${className ?? ""}`} />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}

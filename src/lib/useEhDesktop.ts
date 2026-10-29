import { useEffect, useState } from "react";

const CONSULTA = "(min-width: 768px)";

export function useEhDesktop(): boolean {
  const [desktop, setDesktop] = useState(() => typeof window !== "undefined" && window.matchMedia(CONSULTA).matches);
  useEffect(() => {
    const mq = window.matchMedia(CONSULTA);
    const muda = () => setDesktop(mq.matches);
    mq.addEventListener("change", muda);
    return () => mq.removeEventListener("change", muda);
  }, []);
  return desktop;
}

"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PlanEventModal from "./PlanEventModal";
import Hero from "./Hero";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Auto popup (once per session)
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("plan_event_shown");
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("plan_event_shown", "true");
    }, 8000); // 8s delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar onPlanEvent={() => setOpen(true)} />

      {/* Show Hero only on homepage */}
      {pathname === "/" && <Hero onPlanEvent={() => setOpen(true)} />}

      <main className="min-h-[70vh] pt-24">{children}</main>

      <Footer onPlanEvent={() => setOpen(true)} />
      <PlanEventModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
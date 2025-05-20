"use client";

import { useEffect, useState } from "react";

const colors = [
  { name: "Ocean Blue", value: "199 89% 48%", foreground: "0 0% 100%" },
  { name: "Tropical Green", value: "151 100% 35%", foreground: "0 0% 100%" },
  { name: "Sunset Orange", value: "25 100% 60%", foreground: "0 0% 100%" },
  { name: "Mountain Purple", value: "270 70% 40%", foreground: "270 40% 98%" },
  { name: "Golden Sand", value: "42 100% 50%", foreground: "0 0% 10%" },
  { name: "Sky Blue", value: "205 90% 60%", foreground: "0 0% 100%" },
];

export default function ThemeHydrationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const primary = document?.head?.querySelector("meta[name='x-theme-primary']")?.getAttribute("content");
      const fg = document?.head?.querySelector("meta[name='x-theme-primary-foreground']")?.getAttribute("content");

      if (primary) document.documentElement.style.setProperty("--primary", primary);
      if (fg) document.documentElement.style.setProperty("--primary-foreground", fg);
    }
  }, []);

  return <>{children}</>;
}

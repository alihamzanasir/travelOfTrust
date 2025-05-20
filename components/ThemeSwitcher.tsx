"use client";

import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { FaPalette, FaCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const colors = [
  { name: "Ocean Blue", value: "199 89% 48%", foreground: "0 0% 100%" },
  { name: "Tropical Green", value: "151 100% 35%", foreground: "0 0% 100%" },
  { name: "Sunset Orange", value: "25 100% 60%", foreground: "0 0% 100%" },
  { name: "Mountain Purple", value: "270 70% 40%", foreground: "270 40% 98%" },
  { name: "Golden Sand", value: "42 100% 50%", foreground: "0 0% 10%" },
  { name: "Sky Blue", value: "205 90% 60%", foreground: "0 0% 100%" },
];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>("Sky Blue");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = Cookies.get("primary");
    const savedFg = Cookies.get("primary-foreground");

    if (saved) {
      document.documentElement.style.setProperty("--primary", saved);
      const color = colors.find(c => c.value === saved);
      if (color) setSelectedColor(color.name);
    }
    if (savedFg) {
      document.documentElement.style.setProperty("--primary-foreground", savedFg);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const applyColor = (hsl: string, fg: string, name: string) => {
    document.documentElement.style.setProperty("--primary", hsl);
    document.documentElement.style.setProperty("--primary-foreground", fg);
  
    localStorage.setItem("primary", hsl);
    localStorage.setItem("primary-foreground", fg);
  
    // Set cookie (expires in 1 year)
    document.cookie = `primary=${hsl}; path=/; max-age=${60 * 60 * 24 * 365}`;
    document.cookie = `primary-foreground=${fg}; path=/; max-age=${60 * 60 * 24 * 365}`;
    
  
    setSelectedColor(name);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-full",
          "bg-background/80 hover:bg-background/90 transition",
          "text-sm font-medium text-foreground",
          "border border-border shadow-sm",
          "backdrop-blur-sm"
        )}
        onClick={() => setOpen(!open)}
      >
        <FaPalette className="w-4 h-4" />
        {selectedColor && <span className="hidden sm:inline">{selectedColor} </span>}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className={cn(
              "absolute right-0 mt-2 p-4 shadow-lg rounded-lg w-64 z-50",
              "bg-background/95 backdrop-blur-md",
              "border border-border/50",
              "ring-1 ring-black/5"
            )}
          >
            <h3 className="text-sm font-medium mb-3 text-foreground/90">Select Theme</h3>
            <div className="grid grid-cols-3 gap-3">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "flex flex-col items-center gap-1.5",
                    "group relative"
                  )}
                  onClick={() => applyColor(color.value, color.foreground, color.name)}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full border-2 border-white/80 shadow-md",
                      "hover:ring-2 hover:ring-offset-2 hover:ring-primary transition",
                      "flex items-center justify-center",
                      "transition-all duration-200"
                    )}
                    style={{ backgroundColor: `hsl(${color.value})` }}
                  >
                    {selectedColor === color.name && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-white/90 drop-shadow-sm"
                      >
                        <FaCheck className="w-3 h-3" />
                      </motion.span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {color.name }
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
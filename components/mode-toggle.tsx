"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Toggle theme">
          {/* Sun Icon for Light Mode */}
          <SunIcon
            className={`h-[1.2rem] w-[1.2rem] transition-transform duration-300 text-orange-600 ${
              theme === "dark"
                ? "rotate-90 scale-0"
                : "rotate-0 scale-100"
            }`}
          />
          {/* Moon Icon for Dark Mode */}
          <MoonIcon
            className={`absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 ${
              theme === "dark"
                ? "rotate-0 scale-100"
                : "-rotate-90 scale-0"
            }`}
          />
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown to select Light, Dark, or System theme */}
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light Mode
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark Mode
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System Default
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

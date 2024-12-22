"use client";

import { TodoLogo } from "./TodoLogo";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-[1440px] h-[200px] bg-[#0D0D0D] mx-auto flex items-center justify-center">
      <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
        <TodoLogo />
        <h1 className="text-4xl font-bold">
          <span className="text-[#4EA8DE]">Todo</span>
          <span className="text-[#8284FA]">App</span>
        </h1>
      </Link>
    </header>
  );
}

import { ThemeToggle } from "@/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/config";
import { Github, Palette, SunMoon } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed left-0 top-0 flex h-14 w-full items-center justify-between border-b p-4 px-8 shadow-sm dark:border-b-zinc-800">
      <div>
        <Link href={"/"}>
          <h1 className="flex items-center gap-1 text-xl font-black">
            <Palette />
            {SITE.logo}
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button variant="link">
          <Link href={"/docs"}>Docs</Link>
        </Button>

        <Button variant="outline" size="icon">
          <Link href={SITE.github}>
            <Github className="h-5 w-5" />
          </Link>
        </Button>

        <ThemeToggle />
      </div>
    </nav>
  );
}

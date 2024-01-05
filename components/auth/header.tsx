import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="text-center">
        <h1 className={cn("text-3xl font-semibold", font.className)}>
          🔐 Auth
        </h1>
        <Button variant="link" size="sm" asChild className="px-0 font-normal">
          <Link
            href="https://github.com/Lautaro-Aguilar/next-auth-v5"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs font-semibold my-0"
          >
            by Lautaro Aguilar with ❤️
          </Link>
        </Button>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
